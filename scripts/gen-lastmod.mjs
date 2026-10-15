// Writes src/data/lastmod.json: sitemap URL path -> newest git committer date
// across that page's own source files. Run after content changes and commit the
// manifest. Needs full history, so it refuses to run in a shallow clone (Vercel
// builds shallow; the build only reads the committed manifest).
//   npm run lastmod
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { allPages } from './sitemap-pages.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const git = (...args) => execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();

if (git('rev-parse', '--is-shallow-repository') === 'true') {
  console.error('gen-lastmod: shallow clone, git dates would be wrong. Run `git fetch --unshallow` first.');
  process.exit(1);
}

// Shared chrome / plumbing never dates a page: layout components, UI kit, lib,
// hooks, styles, images, the 404 fallback.
const SHARED = [
  /^src\/components\/(Header|Footer|SEO|StickyCallBar|ScrollToTop)\.tsx$/,
  /^src\/pages\/NotFound\.tsx$/,
  /^src\/components\/ui\//,
  /^src\/(lib|hooks|assets)\//,
  /\.(css|jpe?g|png|webp|svg|gif)$/,
];
const isShared = (f) => SHARED.some((re) => re.test(f));

// Resolve a local import specifier ("@/x" or "./x") to a repo-relative file.
const resolveImport = (spec, fromFile) => {
  let base;
  if (spec.startsWith('@/')) base = join(root, 'src', spec.slice(2));
  else if (spec.startsWith('.')) base = resolve(root, dirname(fromFile), spec);
  else return null;
  for (const c of [base, `${base}.tsx`, `${base}.ts`, `${base}.js`, `${base}.json`, join(base, 'index.tsx'), join(base, 'index.ts')]) {
    if (existsSync(c) && !c.endsWith('/') && /\.\w+$/.test(c)) return relative(root, c);
  }
  return null;
};

// Entry file plus its transitive local imports, minus shared chrome.
const sourcesCache = new Map();
const sourcesOf = (entry) => {
  if (sourcesCache.has(entry)) return sourcesCache.get(entry);
  const seen = new Set();
  const walk = (file) => {
    if (seen.has(file) || isShared(file)) return;
    seen.add(file);
    if (!/\.(tsx?|jsx?)$/.test(file)) return;
    const src = readFileSync(join(root, file), 'utf8');
    for (const m of src.matchAll(/(?:import|export)\s[^'"]*?from\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)/g)) {
      const f = resolveImport(m[1] ?? m[2], file);
      if (f) walk(f);
    }
  };
  walk(entry);
  const list = [...seen].sort();
  sourcesCache.set(entry, list);
  return list;
};

const dateCache = new Map();
const lastmodOf = (files) => {
  const key = files.join('\0');
  if (!dateCache.has(key)) dateCache.set(key, git('log', '-1', '--format=%cI', '--', ...files));
  return dateCache.get(key);
};

const pages = {};
for (const page of allPages) {
  const files = sourcesOf(page.entry);
  const date = lastmodOf(files);
  if (!date) {
    console.error(`gen-lastmod: no git history for ${page.url} (${files.join(', ')})`);
    process.exit(1);
  }
  pages[page.url] = date;
}

const fallback = Object.values(pages).sort((a, b) => Date.parse(b) - Date.parse(a))[0];
const out = join(root, 'src/data/lastmod.json');
writeFileSync(out, `${JSON.stringify({ fallback, pages }, null, 2)}\n`);
console.log(`gen-lastmod: ${Object.keys(pages).length} URLs -> ${relative(root, out)} (fallback ${fallback})`);
for (const entry of [...sourcesCache.keys()]) console.log(`  ${entry}: ${sourcesOf(entry).join(', ')}`);
