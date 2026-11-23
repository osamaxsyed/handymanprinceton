// /api/lead checks. Run: npm run test:lead
// fetch and the email fallback are injected, so nothing leaves this machine.
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

async function run({ method = 'POST', reqBody = body(), secret = SECRET, url, fetchImpl, timeoutMs } = {}) {
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
  const handler = makeHandler({ fetch, fallback, timeoutMs });
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
  const realFetch = globalThis.fetch;
  let fetched = 0;
  globalThis.fetch = async () => { fetched++; return jsonResponse(200, { delivered: true }); };
  logs = [];
  const res = mockRes();
  await defaultHandler({ method: 'POST', body: body() }, res);
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

console.log = orig.log;
console.error = orig.error;
console.log(failed ? `\n${failed} of ${total} failing` : `\nall ${total} passed`);
process.exit(failed ? 1 : 0);
