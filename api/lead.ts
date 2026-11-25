import type { VercelRequest, VercelResponse } from '@vercel/node';
import { isValidUsPhone, spamReason } from './_spam.js';
import sendEmail from './_send-email.js';

// Hero quick form (2026-11-23). The lead goes to CNJ Dash, which creates the
// Housecall Pro lead with lead_source "Handyman Princeton"; Dash's lead bridge
// then texts the customer from the Princeton Quo line and opens the task. This
// function never texts anyone. If Dash isn't configured, times out, errors or
// answers delivered:false (intake off / shadow), the request falls back to the
// owner email in _send-email.ts (imported directly; it is not a public route)
// so no lead is lost. Before any of that: a per-IP rate limit (429), the phone
// check (400 { error: 'phone' }), then the spam filter incl. honeypot + timing.
//
// Dry-run: on every deployment except Vercel Production (and on Production when
// WEB_LEAD_DRY_RUN=1) the function reports what it would send and sends
// nothing: no Dash call, no email, no text. Preview and local testing are safe.

const DEFAULT_DASH_URL = 'https://dash.cnjhomeservicesllc.com/api/hcp/?web_lead=1';
const SITE_URL = 'https://handymanprinceton.com/';
const REF_RE = /^[A-Za-z0-9-]{8,64}$/;
// A same-site path like "/drywall-repair/princeton": one leading slash, plain
// URL characters, no "..". Anything else ("homepage-hero", a full URL) is dropped.
const PATH_RE = /^\/(?!\/)[A-Za-z0-9\-._~/]*$/;
const PHONE_DISPLAY = '(609) 303-8627';

// Best-effort rate limit: at most RATE_MAX submissions per RATE_WINDOW_MS from
// one IP (first hop of x-forwarded-for). The counter lives in this function
// instance's memory only, so it is per instance and best-effort: Vercel can run
// several instances and recycles them, and a determined sender can get past it.
// It stops one browser or script hammering the form, nothing more. A request
// with no IP header (local tests) is not limited.
const RATE_MAX = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

const clientIp = (req: VercelRequest): string => {
  const h = req.headers?.['x-forwarded-for'];
  return String((Array.isArray(h) ? h[0] : h) || '').split(',')[0].trim();
};

function makeRateLimiter() {
  const hits = new Map<string, number[]>();
  return (ip: string, now: number): boolean => {
    if (!ip) return false;
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (v[v.length - 1] <= now - RATE_WINDOW_MS) hits.delete(k);
    }
    const recent = (hits.get(ip) || []).filter((t) => t > now - RATE_WINDOW_MS);
    recent.push(now);
    hits.set(ip, recent.slice(-(RATE_MAX + 1)));
    return recent.length > RATE_MAX;
  };
}

// Same coercion as _send-email.ts: strings only, capped.
const str = (v: unknown): string =>
  v == null || typeof v === 'object' ? '' : String(v).trim();
const cap = (v: unknown, max: number): string => str(v).slice(0, max);

const last4 = (phone: string) => `***${phone.replace(/\D/g, '').slice(-4)}`;

const dashUrl = (): string => process.env.CNJ_DASH_WEB_LEAD_URL || DEFAULT_DASH_URL;

const urlHost = (url: string): string => {
  try {
    return new URL(url).host;
  } catch {
    return 'invalid-url';
  }
};

const isDryRun = (): boolean =>
  process.env.VERCEL_ENV !== 'production' || process.env.WEB_LEAD_DRY_RUN === '1';

type Handler = (req: VercelRequest, res: VercelResponse) => unknown;

type Deps = {
  fetch?: typeof fetch;
  fallback?: Handler;
  timeoutMs?: number;
  dryRun?: boolean;
  now?: () => number;
};

// Injectable for scripts/test-lead.mjs; the deployed function is makeHandler().
export function makeHandler({ fetch: doFetch, fallback = sendEmail, timeoutMs = 6000, dryRun, now = Date.now }: Deps = {}) {
  const rateLimited = makeRateLimiter();
  return async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    if (rateLimited(clientIp(req), now())) {
      console.log('[rate-limit] handymanprinceton.com');
      return res.status(429).json({ error: 'rate-limit', message: `Please call or text us at ${PHONE_DISPLAY}` });
    }

    const raw = req.body && typeof req.body === 'object' ? req.body : {};
    const name = cap(raw.name, 200);
    const phone = cap(raw.phone, 40);
    const description = cap(raw.description, 5000);
    const sourcePage = cap(raw.sourcePage, 200);
    const submittedAt = cap(raw.submittedAt, 60);
    const ts = cap(raw.ts, 20);
    // Capped above the 64-char limit so an over-long ref fails REF_RE instead
    // of being truncated into a valid one.
    const clientRef = cap(raw.clientRef, 65);
    // Hidden honeypot input on the quick form; only a bot fills it.
    const honeypot = cap(raw.company_website, 200);

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and a phone number are required' });
    }

    // A mistyped number is a person, not a bot: tell the form, send nothing.
    if (!isValidUsPhone(phone)) {
      return res.status(400).json({ error: 'phone' });
    }

    const spam = spamReason({ phone, message: description, ts, honeypot });
    const secret = process.env.WEB_LEAD_SECRET || '';
    const ref = `site:princeton:${REF_RE.test(clientRef) ? clientRef : crypto.randomUUID()}`;
    const [first, ...rest] = name.split(/\s+/);
    const path = PATH_RE.test(sourcePage) && !sourcePage.includes('..') ? sourcePage.slice(1) : '';
    // Built in one place, so the dry-run reports exactly what the real path posts.
    const dashBody = {
      brand_key: 'princeton',
      ref,
      source: 'site',
      phone,
      first_name: first,
      last_name: rest.join(' '),
      description,
      service: 'Hero quick form',
      page_url: SITE_URL + path,
    };

    if (dryRun ?? isDryRun()) {
      const vercelEnv = process.env.VERCEL_ENV || null;
      const host = urlHost(dashUrl());
      console.log(`[lead] path=dry-run ${JSON.stringify({
        site: 'handymanprinceton.com',
        vercel_env: vercelEnv,
        spam,
        url_host: host,
        ref,
        phone: last4(phone),
        secret_ok: secret.length >= 24,
      })}`);
      return res.status(200).json({
        success: true,
        dry_run: true,
        vercel_env: vercelEnv,
        spam,
        would_post: {
          url_host: host,
          ...dashBody,
          phone: last4(phone),
          description: description.slice(0, 200),
        },
        secret_present: secret.length > 0,
        secret_ok: secret.length >= 24,
      });
    }

    // Layer 1 bot filter: answer like success, send nothing.
    if (spam) {
      console.log(`[spam] ${spam} handymanprinceton.com`);
      return res.status(200).json({ success: true });
    }

    console.log(`[lead] ${JSON.stringify({
      site: 'handymanprinceton.com',
      ref,
      name,
      phone: last4(phone),
      sourcePage,
      messageChars: description.length,
    })}`);

    const reason = await sendToDash();
    if (reason === 'delivered') {
      console.log('[lead] path=hcp reason=delivered');
      return res.status(200).json({ success: true });
    }

    console.log(`[lead] path=email reason=${reason}`);
    const fallbackReq = {
      method: 'POST',
      body: {
        formType: 'estimate',
        name,
        phone,
        description,
        serviceType: 'Hero quick form',
        sourcePage,
        submittedAt,
        ts,
      },
    } as unknown as VercelRequest;
    return fallback(fallbackReq, res);

    // Returns 'delivered' or a short reason for the email fallback.
    async function sendToDash(): Promise<string> {
      if (secret.length < 24) return secret ? 'secret-too-short' : 'no-secret';

      try {
        const r = await (doFetch ?? fetch)(dashUrl(), {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${secret}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dashBody),
          signal: AbortSignal.timeout(timeoutMs),
        });
        if (r.status !== 200) return `http-${r.status}`;
        const data = await r.json().catch(() => null);
        return data && data.delivered === true ? 'delivered' : 'not-delivered';
      } catch (error) {
        const n = (error as { name?: string })?.name;
        return n === 'TimeoutError' || n === 'AbortError' ? 'timeout' : 'fetch-error';
      }
    }
  };
}

export default makeHandler();
