// Manual IndexNow ping after a production deploy is live. Never wired into the build.
//   npm run indexnow -- --days 2 --include-home [--dry-run]
//   npm run indexnow -- --since <previous-deploy-sha>
//   npm run indexnow -- --urls https://handymanprinceton.com/a,https://...
import { execFileSync } from 'node:child_process';

const HOST = 'handymanprinceton.com';
const KEY = '1e4952d899dbb776d20c1213207fba1f';
const MANIFEST = 'src/data/lastmod.json';
const CAP = 100;

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const opt = (name) => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : undefined;
};
const die = (msg) => {
  console.error(`indexnow: ${msg}`);
  process.exit(1);
};

const dryRun = flag('dry-run');
const origin = `https://${HOST}`;
const keyLocation = `${origin}/${KEY}.txt`;

const get = async (url) => {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.text();
};
const blocks = (xml, tag) => [...xml.matchAll(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`, 'g'))].map((m) => m[1]);
const tag = (xml, name) => xml.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1].trim();

// Live sitemap (follows a sitemap index if one is ever used), as [{ loc, lastmod }].
const liveSitemap = async (url = `${origin}/sitemap.xml`) => {
  const xml = await get(url);
  const children = blocks(xml, 'sitemap').map((b) => tag(b, 'loc'));
  if (children.length) return (await Promise.all(children.map(liveSitemap))).flat();
  return blocks(xml, 'url').map((b) => ({ loc: tag(b, 'loc'), lastmod: tag(b, 'lastmod') }));
};

let urlList = [];
if (opt('urls')) {
  urlList = opt('urls').split(',').map((u) => u.trim()).filter(Boolean);
  const off = urlList.filter((u) => new URL(u).hostname !== HOST);
  if (off.length) die(`URLs not on ${HOST}: ${off.join(', ')}`);
} else if (opt('since')) {
  // Manifest entries whose lastmod changed between <ref> and HEAD.
  const at = (rev) => {
    try {
      return JSON.parse(execFileSync('git', ['show', `${rev}:${MANIFEST}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })).pages;
    } catch {
      return {};
    }
  };
  const before = at(opt('since'));
  const now = at('HEAD');
  urlList = Object.keys(now).filter((p) => now[p] !== before[p]).map((p) => origin + p);
} else {
  const days = Number(opt('days') ?? 2);
  if (!(days > 0)) die('--days must be a positive number');
  const cutoff = Date.now() - days * 86400000;
  const live = await liveSitemap();
  console.log(`live sitemap: ${live.length} URLs, ${live.filter((u) => u.lastmod).length} with <lastmod>`);
  urlList = live.filter((u) => u.lastmod && Date.parse(u.lastmod) >= cutoff).map((u) => u.loc);
}
if (flag('include-home')) urlList.unshift(`${origin}/`);
urlList = [...new Set(urlList)];
if (urlList.length > CAP) {
  console.warn(`indexnow: ${urlList.length} URLs, capping at ${CAP}`);
  urlList = urlList.slice(0, CAP);
}
if (!urlList.length) {
  console.log(`indexnow: no URLs to submit for ${HOST}`);
  process.exit(0);
}

const payload = { host: HOST, key: KEY, keyLocation, urlList };

// The key file must be live before IndexNow will accept the key.
let keyOk = false;
try {
  keyOk = (await get(keyLocation)).trim() === KEY;
} catch (e) {
  console.warn(`indexnow: ${e.message}`);
}
if (!keyOk) {
  if (!dryRun) die(`${keyLocation} does not serve the key; deploy first`);
  console.warn(`indexnow: WARNING ${keyLocation} does not serve the key yet (dry run continues)`);
}

if (dryRun) {
  console.log(`DRY RUN: would POST to https://api.indexnow.org/indexnow (${urlList.length} URLs):`);
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
console.log(`IndexNow ${res.status} ${res.statusText} for ${HOST}`);
for (const u of urlList) console.log(`  ${u}`);
if (!res.ok) process.exit(1);
