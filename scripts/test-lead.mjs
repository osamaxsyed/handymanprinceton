// /api/lead checks. Run: npm run test:lead
// fetch and the email fallback are injected, so nothing leaves this machine.
// Real-path checks pass dryRun: false; the dry-run checks at the end cover the
// VERCEL_ENV switch.
import { registerHooks } from 'node:module';

// The api files import siblings as './x.js' (what Vercel needs); map those to
// the .ts sources so node --experimental-strip-types can load them here.
registerHooks({
  resolve(spec, ctx, next) {
    try {
      return next(spec, ctx);
    } catch (e) {
      if (spec.startsWith('.') && spec.endsWith('.js')) return next(spec.slice(0, -3) + '.ts', ctx);
      throw e;
    }
  },
});

const { makeHandler, default: defaultHandler } = await import('../api/lead.ts');
const { default: publicSendEmail } = await import('../api/send-email.ts');

delete process.env.VERCEL_ENV;
delete process.env.WEB_LEAD_DRY_RUN;

const SECRET = 'test-secret-0123456789-abcdefghij';
const PHONE = '(609) 375-0098';
const REF = '3f2b8c1e-5d4a-4e1b-9c7d-0a1b2c3d4e5f';
const DASH = 'https://dash.cnjhomeservicesllc.com/api/hcp/?web_lead=1';

const body = (over = {}) => ({
  formType: 'estimate',
  name: 'Jane Q Public',
  phone: PHONE,
  description: 'Sticking door in the kitchen',
  serviceType: 'Hero quick form',
  sourcePage: 'homepage-hero',
  submittedAt: '2026-11-23T15:00:00.000Z',
  ts: String(Date.now() - 60_000),
  clientRef: REF,
  ...over,
});

function mockRes() {
  return {
    statusCode: 0,
    payload: undefined,
    status(c) { this.statusCode = c; return this; },
    json(p) { this.payload = p; return this; },
  };
}

// Capture console output so we can assert nothing sensitive is logged.
let logs = [];
const orig = { log: console.log, error: console.error };
console.log = (...a) => logs.push(a.join(' '));
console.error = (...a) => logs.push(a.join(' '));

const jsonResponse = (status, data) =>
  new Response(typeof data === 'string' ? data : JSON.stringify(data), { status });

// dryRun: false (real path) unless the test passes 'env' to let the handler decide.
async function run({ method = 'POST', reqBody = body(), secret = SECRET, url, fetchImpl, timeoutMs, dryRun = false } = {}) {
  logs = [];
  if (secret === null) delete process.env.WEB_LEAD_SECRET;
  else process.env.WEB_LEAD_SECRET = secret;
  if (url === undefined) delete process.env.CNJ_DASH_WEB_LEAD_URL;
  else process.env.CNJ_DASH_WEB_LEAD_URL = url;

  const calls = [];
  const fallbackCalls = [];
  const fetch = async (u, init) => {
    calls.push({ url: u, init, body: init?.body ? JSON.parse(init.body) : undefined });
    return fetchImpl ? fetchImpl(u, init) : jsonResponse(200, { delivered: true });
  };
  const fallback = (req, res) => {
    fallbackCalls.push(req);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  };
  const handler = makeHandler({ fetch, fallback, timeoutMs, ...(dryRun === 'env' ? {} : { dryRun }) });
  const res = mockRes();
  await handler({ method, body: reqBody }, res);
  return { res, calls, fallbackCalls, logs: [...logs] };
}

let failed = 0;
let total = 0;
function check(label, cond, detail = '') {
  total++;
  if (!cond) failed++;
  orig.log(`${cond ? 'ok  ' : 'FAIL'} ${label}${cond || !detail ? '' : ` (${detail})`}`);
}
const noLeak = (r) =>
  r.logs.every((l) => !l.includes(SECRET) && !l.includes('3750098') && !l.includes('375-0098') && !l.includes(PHONE));

// Method / validation / spam
{
  const r = await run({ method: 'GET' });
  check('GET -> 405', r.res.statusCode === 405 && r.calls.length === 0 && r.fallbackCalls.length === 0);
}
{
  const r = await run({ reqBody: body({ phone: '' }) });
  check('missing phone -> 400', r.res.statusCode === 400 && r.calls.length === 0 && r.fallbackCalls.length === 0);
}
{
  const r = await run({ reqBody: body({ name: '' }) });
  check('missing name -> 400', r.res.statusCode === 400 && r.calls.length === 0);
}
{
  const r = await run({ reqBody: body({ phone: '+12025550179' }) });
  check('spam phone -> 200 success, zero fetch, zero fallback',
    r.res.statusCode === 200 && r.res.payload?.success === true && r.calls.length === 0 && r.fallbackCalls.length === 0);
  check('spam logs "[spam] phone-555-01xx handymanprinceton.com"',
    r.logs.includes('[spam] phone-555-01xx handymanprinceton.com'));
}
{
  const r = await run({ reqBody: body({ ts: String(Date.now() - 500) }) });
  check('spam timing -> silent success, nothing sent', r.res.payload?.success === true && r.calls.length === 0 && r.fallbackCalls.length === 0);
}

// No secret -> email fallback, no dash call
{
  const r = await run({ secret: null });
  check('secret unset -> zero fetch', r.calls.length === 0);
  check('secret unset -> fallback invoked once', r.fallbackCalls.length === 1);
  const fb = r.fallbackCalls[0];
  check('fallback request is POST estimate with the lead fields',
    fb?.method === 'POST' && fb.body.formType === 'estimate' && fb.body.name === 'Jane Q Public' &&
    fb.body.phone === PHONE && fb.body.description === 'Sticking door in the kitchen' &&
    fb.body.serviceType === 'Hero quick form' && fb.body.sourcePage === 'homepage-hero' &&
    fb.body.submittedAt === '2026-11-23T15:00:00.000Z' && fb.body.ts === body().ts,
    JSON.stringify(fb?.body));
  check('fallback response becomes ours', r.res.statusCode === 200 && r.res.payload?.message === 'Email sent successfully');
  check('logs path=email reason=no-secret', r.logs.includes('[lead] path=email reason=no-secret'));
  check('no-secret logs leak nothing', noLeak(r), JSON.stringify(r.logs));
}
{
  const r = await run({ secret: 'short-secret' });
  check('secret < 24 chars -> treated as unset (zero fetch, fallback)', r.calls.length === 0 && r.fallbackCalls.length === 1);
  check('short secret not logged', r.logs.every((l) => !l.includes('short-secret')));
}

// Happy path: exact request to dash
{
  const r = await run();
  check('delivered:true -> 200 success', r.res.statusCode === 200 && r.res.payload?.success === true);
  check('delivered:true -> no fallback', r.fallbackCalls.length === 0);
  check('one fetch', r.calls.length === 1);
  const c = r.calls[0];
  check('URL is the dash web_lead endpoint', c?.url === DASH, c?.url);
  check('method POST', c?.init.method === 'POST');
  check('Authorization: Bearer <secret>', c?.init.headers.Authorization === `Bearer ${SECRET}`);
  check('Content-Type application/json', c?.init.headers['Content-Type'] === 'application/json');
  check('signal present', c?.init.signal instanceof AbortSignal);
  const b = c?.body ?? {};
  const want = {
    brand_key: 'princeton',
    ref: `site:princeton:${REF}`,
    source: 'site',
    phone: PHONE,
    first_name: 'Jane',
    last_name: 'Q Public',
    description: 'Sticking door in the kitchen',
    service: 'Hero quick form',
    page_url: 'https://handymanprinceton.com/',
  };
  check('body is exactly the expected JSON', JSON.stringify(b) === JSON.stringify(want), JSON.stringify(b));
  check('logs path=hcp reason=delivered', r.logs.includes('[lead] path=hcp reason=delivered'));
  const leadLine = r.logs.find((l) => l.startsWith('[lead] {'));
  check('[lead] line has masked phone ***0098', leadLine?.includes('"***0098"'), leadLine);
  check('delivered logs leak nothing', noLeak(r), JSON.stringify(r.logs));
}
{
  const r = await run({ url: 'https://example.test/hook' });
  check('CNJ_DASH_WEB_LEAD_URL overrides the URL', r.calls[0]?.url === 'https://example.test/hook');
}
{
  const r = await run({ reqBody: body({ name: 'Cher' }) });
  check('single-word name -> last_name ""', r.calls[0]?.body.first_name === 'Cher' && r.calls[0]?.body.last_name === '');
}

// page_url from sourcePage
for (const [sp, want] of [
  ['/drywall-repair/princeton', 'https://handymanprinceton.com/drywall-repair/princeton'],
  ['homepage-hero', 'https://handymanprinceton.com/'],
  ['//evil.example/x', 'https://handymanprinceton.com/'],
  ['https://evil.example/', 'https://handymanprinceton.com/'],
  ['/../etc/passwd', 'https://handymanprinceton.com/'],
  ['/a?b=<script>', 'https://handymanprinceton.com/'],
]) {
  const r = await run({ reqBody: body({ sourcePage: sp }) });
  check(`page_url for sourcePage ${JSON.stringify(sp)}`, r.calls[0]?.body.page_url === want, r.calls[0]?.body.page_url);
}

// clientRef validation
const UUID_RE = /^site:princeton:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
{
  const r = await run({ reqBody: body({ clientRef: '1732370000000-k3j4h5g6f7' }) });
  check('fallback-style clientRef kept', r.calls[0]?.body.ref === 'site:princeton:1732370000000-k3j4h5g6f7');
}
for (const [label, ref] of [
  ['missing', undefined],
  ['too short', 'abc'],
  ['bad chars', 'abc def/../ghi'],
  ['too long', 'a'.repeat(65)],
  ['object', { x: 1 }],
]) {
  const r = await run({ reqBody: body({ clientRef: ref }) });
  const got = r.calls[0]?.body.ref;
  check(`clientRef ${label} -> fresh UUID ref`, UUID_RE.test(got ?? ''), got);
}
{
  const a = await run({ reqBody: body({ clientRef: 'bad ref' }) });
  const b = await run({ reqBody: body({ clientRef: 'bad ref' }) });
  check('invalid clientRef -> different UUID each request', a.calls[0]?.body.ref !== b.calls[0]?.body.ref);
}

// Dash refused / failed -> email fallback
for (const [label, fetchImpl, reason] of [
  ['delivered:false', () => jsonResponse(200, { delivered: false, reason: 'shadow' }), 'not-delivered'],
  ['delivered missing', () => jsonResponse(200, { ok: true }), 'not-delivered'],
  ['delivered:"true" string', () => jsonResponse(200, { delivered: 'true' }), 'not-delivered'],
  ['non-JSON 200', () => jsonResponse(200, '<html>oops</html>'), 'not-delivered'],
  ['HTTP 500', () => jsonResponse(500, { delivered: true }), 'http-500'],
  ['HTTP 401', () => jsonResponse(401, { error: 'unauthorized' }), 'http-401'],
  ['HTTP 201', () => jsonResponse(201, { delivered: true }), 'http-201'],
  ['fetch throws', () => { throw new TypeError('fetch failed'); }, 'fetch-error'],
  ['TimeoutError', () => { throw new DOMException('timed out', 'TimeoutError'); }, 'timeout'],
]) {
  const r = await run({ fetchImpl });
  check(`${label} -> fallback once`, r.calls.length === 1 && r.fallbackCalls.length === 1);
  check(`${label} -> logs path=email reason=${reason}`, r.logs.includes(`[lead] path=email reason=${reason}`), JSON.stringify(r.logs));
  check(`${label} -> fallback response is ours`, r.res.statusCode === 200 && r.res.payload?.message === 'Email sent successfully');
  check(`${label} -> logs leak nothing`, noLeak(r), JSON.stringify(r.logs));
}
{
  // Real timeout: fetch hangs until the AbortSignal fires. AbortSignal.timeout's
  // timer is unref'd, so hold the event loop open while we wait.
  const keepAlive = setTimeout(() => {}, 5000);
  const started = Date.now();
  const r = await run({
    timeoutMs: 50,
    fetchImpl: (_u, init) => new Promise((_, reject) => {
      init.signal.addEventListener('abort', () => reject(init.signal.reason));
    }),
  });
  const ms = Date.now() - started;
  clearTimeout(keepAlive);
  check(`hung dash aborts after timeoutMs (${ms}ms) -> fallback`, r.fallbackCalls.length === 1 && ms < 2000);
  check('hung dash logs reason=timeout', r.logs.includes('[lead] path=email reason=timeout'), JSON.stringify(r.logs));
}

// Fallback failure propagates (send-email answers 500 when the owner email fails).
{
  logs = [];
  process.env.WEB_LEAD_SECRET = SECRET;
  const handler = makeHandler({
    fetch: async () => jsonResponse(500, {}),
    fallback: (_req, res) => res.status(500).json({ error: 'Failed to send email' }),
    dryRun: false,
  });
  const res = mockRes();
  await handler({ method: 'POST', body: body() }, res);
  check('fallback 500 is returned to the visitor', res.statusCode === 500);
}

// The deployed export, unmocked: secret unset -> the real send-email.ts runs.
// nodemailer's transport is swapped for a recorder (same module instance
// send-email imported), so no SMTP connection is opened and nothing is sent.
{
  const nodemailer = (await import('nodemailer')).default;
  const realCreate = nodemailer.createTransport;
  const mails = [];
  nodemailer.createTransport = () => ({ sendMail: async (m) => { mails.push(m); return {}; } });
  const savedUser = process.env.EMAIL_USER;
  delete process.env.EMAIL_USER;
  delete process.env.WEB_LEAD_SECRET;
  // The deployed handler decides dry-run from the environment; this is Production.
  process.env.VERCEL_ENV = 'production';
  const realFetch = globalThis.fetch;
  let fetched = 0;
  globalThis.fetch = async () => { fetched++; return jsonResponse(200, { delivered: true }); };
  logs = [];
  const res = mockRes();
  await defaultHandler({ method: 'POST', body: body() }, res);
  // Same handler off Production: dry-run, so no fetch and no email.
  delete process.env.VERCEL_ENV;
  const mailsBefore = mails.length;
  const dryRes = mockRes();
  await defaultHandler({ method: 'POST', body: body() }, dryRes);
  check('default export: VERCEL_ENV unset -> dry-run, zero fetch, no email',
    dryRes.statusCode === 200 && dryRes.payload?.dry_run === true && fetched === 0 && mails.length === mailsBefore,
    JSON.stringify(dryRes.payload));
  globalThis.fetch = realFetch;
  nodemailer.createTransport = realCreate;
  if (savedUser !== undefined) process.env.EMAIL_USER = savedUser;
  check('default export: secret unset -> zero fetch', fetched === 0);
  check('default export: real send-email ran (owner email built)',
    mails.length === 1 && mails[0].to === 'osama@handymanprinceton.com' &&
    mails[0].subject === '[Princeton] New Estimate Request from Jane Q Public', JSON.stringify(mails.map((m) => m.subject)));
  check('default export: send-email response is ours',
    res.statusCode === 200 && res.payload?.message === 'Email sent successfully');
}

// Dry-run: decided per request from VERCEL_ENV / WEB_LEAD_DRY_RUN when the
// option is not given. Never calls fetch or the fallback.
async function withEnv(env, fn) {
  const keys = ['VERCEL_ENV', 'WEB_LEAD_DRY_RUN'];
  const saved = Object.fromEntries(keys.map((k) => [k, process.env[k]]));
  for (const k of keys) {
    if (env[k] === undefined) delete process.env[k];
    else process.env[k] = env[k];
  }
  try {
    return await fn();
  } finally {
    for (const k of keys) {
      if (saved[k] === undefined) delete process.env[k];
      else process.env[k] = saved[k];
    }
  }
}
const isDry = (r) => r.res.statusCode === 200 && r.res.payload?.dry_run === true && r.res.payload?.success === true;
const noCalls = (r) => r.calls.length === 0 && r.fallbackCalls.length === 0;
{
  const r = await withEnv({}, () => run({ dryRun: 'env' }));
  check('(a) VERCEL_ENV unset -> dry-run', isDry(r) && r.res.payload.vercel_env === null, JSON.stringify(r.res.payload));
  check('(a) VERCEL_ENV unset -> no fetch, no fallback', noCalls(r));
  check('(a) logs one [lead] path=dry-run line', r.logs.filter((l) => l.startsWith('[lead] path=dry-run ')).length === 1 && r.logs.length === 1, r.logs.join(' | '));
  const w = r.res.payload?.would_post || {};
  const want = {
    url_host: 'dash.cnjhomeservicesllc.com', brand_key: 'princeton', ref: `site:princeton:${REF}`, source: 'site', phone: '***0098',
    first_name: 'Jane', last_name: 'Q Public', description: 'Sticking door in the kitchen',
    service: 'Hero quick form', page_url: 'https://handymanprinceton.com/',
  };
  check('(a) would_post exact', JSON.stringify(w) === JSON.stringify(want), JSON.stringify(w));
  check('(a) secret_present + secret_ok', r.res.payload?.secret_present === true && r.res.payload?.secret_ok === true && r.res.payload?.spam === null);
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env', secret: 'short' }));
  check('dry-run reports short secret', isDry(r) && r.res.payload.secret_present === true && r.res.payload.secret_ok === false && noCalls(r));
  const r2 = await withEnv({}, () => run({ dryRun: 'env', secret: null }));
  check('dry-run reports missing secret', isDry(r2) && r2.res.payload.secret_present === false && r2.res.payload.secret_ok === false && noCalls(r2));
}
{
  const r = await withEnv({ VERCEL_ENV: 'preview' }, () => run({ dryRun: 'env' }));
  check('(b) VERCEL_ENV=preview -> dry-run, no calls', isDry(r) && r.res.payload.vercel_env === 'preview' && noCalls(r), JSON.stringify(r.res.payload));
}
{
  const r = await withEnv({ VERCEL_ENV: 'development' }, () => run({ dryRun: 'env' }));
  check('VERCEL_ENV=development -> dry-run, no calls', isDry(r) && noCalls(r));
}
{
  const r = await withEnv({ VERCEL_ENV: 'production' }, () => run({ dryRun: 'env' }));
  const sent = r.calls[0]?.body || {};
  check('(c) VERCEL_ENV=production -> real path, fetch once, no fallback',
    r.calls.length === 1 && r.fallbackCalls.length === 0 && r.res.payload?.dry_run === undefined && r.res.payload?.success === true, JSON.stringify(r.res.payload));
  check('(c) production body brand_key princeton, ref site:princeton:', sent.brand_key === 'princeton' && sent.ref?.startsWith('site:princeton:'), JSON.stringify(sent));
  check('(c) production response has no dry-run fields', JSON.stringify(r.res.payload) === JSON.stringify({ success: true }), JSON.stringify(r.res.payload));
}
{
  const r = await withEnv({ VERCEL_ENV: 'production', WEB_LEAD_DRY_RUN: '0' }, () => run({ dryRun: 'env' }));
  check('production + WEB_LEAD_DRY_RUN=0 -> real path', r.calls.length === 1 && r.res.payload?.dry_run === undefined);
}
{
  const r = await withEnv({ VERCEL_ENV: 'production', WEB_LEAD_DRY_RUN: '1' }, () => run({ dryRun: 'env' }));
  check('(d) production + WEB_LEAD_DRY_RUN=1 -> dry-run, no calls', isDry(r) && r.res.payload.vercel_env === 'production' && noCalls(r), JSON.stringify(r.res.payload));
}
{
  const r = await withEnv({ VERCEL_ENV: 'production' }, () => run({ dryRun: true }));
  check('dryRun: true option overrides production', isDry(r) && noCalls(r));
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env', reqBody: body({ phone: '732-555-0123' }) }));
  check('(e) dry-run spam phone -> spam phone-555-01xx', isDry(r) && r.res.payload.spam === 'phone-555-01xx', JSON.stringify(r.res.payload));
  check('(e) dry-run spam -> no calls, no [spam] line', noCalls(r) && !r.logs.some((l) => l.startsWith('[spam]')), r.logs.join(' | '));
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env', reqBody: body({ description: 'x'.repeat(500) }) }));
  check('dry-run description capped at 200', r.res.payload?.would_post?.description?.length === 200);
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env', reqBody: body({ sourcePage: '/drywall-repair/princeton' }) }));
  check('dry-run page_url carries the real path', r.res.payload?.would_post?.page_url === 'https://handymanprinceton.com/drywall-repair/princeton', JSON.stringify(r.res.payload?.would_post));
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env' }));
  const out = JSON.stringify(r.res.payload);
  check('(f) dry-run response never contains the secret', !out.includes(SECRET) && !out.includes('Bearer'), out);
  check('(f) dry-run response masks the phone', !out.replace(/\D/g, '').includes('6093750098') && !out.includes(PHONE) && r.res.payload?.would_post?.phone === '***0098', out);
  check('(f) dry-run logs never contain the secret or full phone', noLeak(r), r.logs.join(' | '));
}
for (const [label, over] of [['missing name', { name: '' }], ['missing phone', { phone: '' }]]) {
  for (const env of [{}, { VERCEL_ENV: 'preview' }]) {
    const r = await withEnv(env, () => run({ dryRun: 'env', reqBody: body(over) }));
    check(`(g) ${label} (${env.VERCEL_ENV || 'unset'}) -> 400 before dry-run`, r.res.statusCode === 400 && r.res.payload?.dry_run === undefined && noCalls(r), JSON.stringify(r.res.payload));
  }
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env', method: 'GET' }));
  check('GET in dry-run env -> 405', r.res.statusCode === 405 && noCalls(r));
}

// Form hardening (2026-11-25): honeypot, missing ts, invalid phone -> 400,
// per-IP rate limit, and the closed public /api/send-email route.
async function capture(fn) {
  const saved = { log: console.log, error: console.error, warn: console.warn };
  const lines = [];
  for (const k of Object.keys(saved)) console[k] = (...a) => lines.push(a.map(String).join(' '));
  try { return { value: await fn(), lines }; } finally { Object.assign(console, saved); }
}
{
  const r = await run({ reqBody: body({ qf_alt_ref: 'https://spam.example' }) });
  check('honeypot filled -> 200 success, zero fetch, no fallback',
    r.res.statusCode === 200 && r.res.payload?.success === true && r.calls.length === 0 && r.fallbackCalls.length === 0, JSON.stringify(r.res));
  check('honeypot -> exactly one [spam] line, reason honeypot',
    r.logs.filter((l) => l.startsWith('[spam]')).length === 1 && r.logs.includes('[spam] honeypot handymanprinceton.com'), r.logs.join(' | '));
}
{
  const r = await run({ reqBody: body({ qf_alt_ref: '' }) });
  check('honeypot empty -> delivered as normal', r.calls.length === 1 && r.res.payload?.success === true);
}
for (const [label, over] of [['missing ts', { ts: undefined }], ['empty ts', { ts: '' }], ['non-numeric ts', { ts: 'abc' }]]) {
  const r = await run({ reqBody: body(over) });
  check(`${label} -> silent success, zero fetch, no fallback`,
    r.res.statusCode === 200 && r.res.payload?.success === true && r.calls.length === 0 && r.fallbackCalls.length === 0, JSON.stringify(r.res));
  check(`${label} -> logs [spam] timing-missing`, r.logs.includes('[spam] timing-missing handymanprinceton.com'), r.logs.join(' | '));
}
for (const bad of ['555-1234', '732-155-1234', '032-555-1234', '27325551234', '73255512345', '732-555-1234 x12']) {
  const r = await run({ reqBody: body({ phone: bad }) });
  check(`invalid phone ${JSON.stringify(bad)} -> 400 { error: 'phone' }, nothing sent, not logged as spam`,
    r.res.statusCode === 400 && r.res.payload?.error === 'phone' && r.calls.length === 0 && r.fallbackCalls.length === 0 &&
    !r.logs.some((l) => l.startsWith('[spam]')), JSON.stringify(r.res));
}
{
  const r = await withEnv({}, () => run({ dryRun: 'env', reqBody: body({ phone: '555-1234' }) }));
  check('invalid phone -> 400 before dry-run', r.res.statusCode === 400 && r.res.payload?.error === 'phone' && noCalls(r), JSON.stringify(r.res));
}
for (const good of ['(732) 555-8642', '+1 732 555 8642', '17325558642', '732.555.8642']) {
  const r = await run({ reqBody: body({ phone: good }) });
  check(`valid phone ${JSON.stringify(good)} -> delivered`, r.res.statusCode === 200 && r.calls.length === 1 && r.fallbackCalls.length === 0, JSON.stringify(r.res));
}
{
  const r = await run({ reqBody: body({ phone: '+12025550179' }) });
  check('555-01xx is still silent spam, not a 400', r.res.statusCode === 200 && r.res.payload?.success === true && r.calls.length === 0);
}
// Rate limit: one handler instance, injected clock, 6 POSTs from one IP inside 10 minutes.
{
  process.env.WEB_LEAD_SECRET = SECRET;
  let clock = 1_800_000_000_000;
  let dash = 0;
  const h = makeHandler({
    fetch: async () => { dash++; return jsonResponse(200, { delivered: true }); },
    fallback: (_q, s) => s.status(200).json({ success: true }),
    dryRun: false,
    now: () => clock,
  });
  const call = async (xff) => {
    const res = mockRes();
    await h({ method: 'POST', headers: xff === undefined ? {} : { 'x-forwarded-for': xff }, body: body() }, res);
    return res;
  };
  const { value: first5, lines } = await capture(async () => {
    const out = [];
    for (let i = 0; i < 5; i++) out.push(await call(i % 2 ? '203.0.113.7' : '203.0.113.7, 10.0.0.1'));
    return out;
  });
  check('rate limit: first 5 from one IP -> 200, 5 dash posts', first5.every((r) => r.statusCode === 200) && dash === 5, JSON.stringify(first5.map((r) => r.statusCode)));
  const { value: sixth, lines: l6 } = await capture(() => call('203.0.113.7'));
  check('rate limit: 6th within 10 min -> 429, no dash post', sixth.statusCode === 429 && dash === 5, JSON.stringify(sixth));
  check('rate limit: 429 JSON says call or text (609) 303-8627', sixth.payload?.error === 'rate-limit' && sixth.payload?.message === 'Please call or text us at (609) 303-8627', JSON.stringify(sixth.payload));
  check('rate limit: logs [rate-limit] without the IP', l6.includes('[rate-limit] handymanprinceton.com') && !l6.some((l) => l.includes('203.0.113.7')) && !lines.some((l) => l.includes('203.0.113.7')), l6.join(' | '));
  const { value: other } = await capture(() => call('198.51.100.9'));
  check('rate limit: another IP still -> 200', other.statusCode === 200 && dash === 6);
  const { value: noIp } = await capture(() => call(undefined));
  check('rate limit: no x-forwarded-for -> not limited', noIp.statusCode === 200);
  clock += 10 * 60 * 1000 + 1;
  const { value: later } = await capture(() => call('203.0.113.7'));
  check('rate limit: same IP after the 10-minute window -> 200', later.statusCode === 200, JSON.stringify(later));
  const fresh = makeHandler({ fetch: async () => jsonResponse(200, { delivered: true }), dryRun: false });
  const { value: freshRes } = await capture(async () => {
    const res = mockRes();
    await fresh({ method: 'POST', headers: { 'x-forwarded-for': '203.0.113.7' }, body: body() }, res);
    return res;
  });
  check('rate limit: counter is per handler instance', freshRes.statusCode === 200);
}
// The public route is closed; the private module is what lead.ts falls back to.
{
  const nodemailer = (await import('nodemailer')).default;
  const realCreate = nodemailer.createTransport;
  const realFetch = globalThis.fetch;
  let transports = 0;
  let fetched = 0;
  nodemailer.createTransport = () => { transports++; return { sendMail: async () => ({}) }; };
  globalThis.fetch = async () => { fetched++; return jsonResponse(200, {}); };
  const post = mockRes();
  await publicSendEmail({ method: 'POST', body: body({ formType: 'estimate', email: 'x@example.com' }) }, post);
  const get = mockRes();
  await publicSendEmail({ method: 'GET' }, get);
  nodemailer.createTransport = realCreate;
  globalThis.fetch = realFetch;
  check('public POST /api/send-email -> 410, no mail transport, no fetch', post.statusCode === 410 && transports === 0 && fetched === 0, JSON.stringify(post));
  check('public GET /api/send-email -> 405', get.statusCode === 405);
}

console.log = orig.log;
console.error = orig.error;
console.log(failed ? `\n${failed} of ${total} failing` : `\nall ${total} passed`);
process.exit(failed ? 1 : 0);
