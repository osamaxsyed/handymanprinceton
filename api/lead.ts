import type { VercelRequest, VercelResponse } from '@vercel/node';
import { spamReason } from './_spam.js';
import sendEmail from './send-email.js';

// Hero quick form (2026-11-23). The lead goes to CNJ Dash, which creates the
// Housecall Pro lead with lead_source "Handyman Princeton"; Dash's lead bridge
// then texts the customer from the Princeton Quo line and opens the task. This
// function never texts anyone. If Dash isn't configured, times out, errors or
// answers delivered:false (intake off / shadow), the request falls back to the
// owner email in send-email.ts so no lead is lost.

const DEFAULT_DASH_URL = 'https://dash.cnjhomeservicesllc.com/api/hcp/?web_lead=1';
const SITE_URL = 'https://handymanprinceton.com/';
const REF_RE = /^[A-Za-z0-9-]{8,64}$/;
// A same-site path like "/drywall-repair/princeton": one leading slash, plain
// URL characters, no "..". Anything else ("homepage-hero", a full URL) is dropped.
const PATH_RE = /^\/(?!\/)[A-Za-z0-9\-._~/]*$/;

// Same coercion as send-email.ts: strings only, capped.
const str = (v: unknown): string =>
  v == null || typeof v === 'object' ? '' : String(v).trim();
const cap = (v: unknown, max: number): string => str(v).slice(0, max);

const last4 = (phone: string) => `***${phone.replace(/\D/g, '').slice(-4)}`;

type Handler = (req: VercelRequest, res: VercelResponse) => unknown;

type Deps = {
  fetch?: typeof fetch;
  fallback?: Handler;
  timeoutMs?: number;
};

// Injectable for scripts/test-lead.mjs; the deployed function is makeHandler().
export function makeHandler({ fetch: doFetch, fallback = sendEmail, timeoutMs = 6000 }: Deps = {}) {
  return async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
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

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and a phone number are required' });
    }

    // Layer 1 bot filter: answer like success, send nothing.
    const spam = spamReason({ phone, message: description, ts });
    if (spam) {
      console.log(`[spam] ${spam} handymanprinceton.com`);
      return res.status(200).json({ success: true });
    }

    const ref = `site:princeton:${REF_RE.test(clientRef) ? clientRef : crypto.randomUUID()}`;
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
      const secret = process.env.WEB_LEAD_SECRET || '';
      if (secret.length < 24) return secret ? 'secret-too-short' : 'no-secret';

      const [first, ...rest] = name.split(/\s+/);
      const path = PATH_RE.test(sourcePage) && !sourcePage.includes('..') ? sourcePage.slice(1) : '';
      try {
        const r = await (doFetch ?? fetch)(process.env.CNJ_DASH_WEB_LEAD_URL || DEFAULT_DASH_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${secret}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            brand_key: 'princeton',
            ref,
            source: 'site',
            phone,
            first_name: first,
            last_name: rest.join(' '),
            description,
            service: 'Hero quick form',
            page_url: SITE_URL + path,
          }),
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
