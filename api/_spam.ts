// Layer 1 bot filter for the lead form. Pure function, no I/O: hand it the
// submitted fields and it returns a short reason string when the submission
// matches a known bot signature, or null when it looks human. On a reason the
// handler answers exactly like success and sends nothing (silent drop), logging
// one line `[spam] <reason> <site>` for the Vercel function logs.
//
// Why (verified 2026-09-27): 25 of 53 rank-rent form leads in 60 days were bots
// that walked past the "company" honeypot. Their signature: a phone in the
// fictional 555-01xx range (+12025550179, +12025550142), the stock message
// "I would like more information. Please contact me by email", stock names
// reused across sites, and some @mail.ru addresses. The honeypot stays; this
// sits behind it. No third-party script, no captcha.

const TEMPLATE = 'i would like more information. please contact me by email';

// Deliberately short. Only domains that appear on bot leads and have no
// plausible use by a New Jersey homeowner. Do not grow this into a generic
// "free mail" list: gmail/yahoo/aol/hotmail/outlook are real customers.
const DENY_DOMAINS = new Set([
  'mail.ru', 'bk.ru', 'list.ru', 'inbox.ru', 'internet.ru', // Mail.ru group
  'yandex.ru', 'yandex.com', 'ya.ru', // Yandex
  'rambler.ru',
]);

// A human cannot load the page and fill name + phone + message in under this.
const MIN_FILL_MS = 3000;

export type SpamReason =
  | 'phone-format'
  | 'phone-nanp'
  | 'phone-555-01xx'
  | 'message-template'
  | 'email-domain'
  | 'timing';

export type SpamFields = {
  phone?: unknown;
  email?: unknown;
  message?: unknown;
  ts?: unknown;
};

// NANP rules on the digits we were given. Only judged when a phone was
// actually submitted; forms with an optional phone pass an empty value through.
export function phoneReason(phone: unknown): SpamReason | null {
  if (phone == null || String(phone).trim() === '') return null;
  let d = String(phone).replace(/\D/g, '');
  if (d.length === 11 && d[0] === '1') d = d.slice(1);
  if (d.length !== 10) return 'phone-format';
  const area = d.slice(0, 3);
  const exchange = d.slice(3, 6);
  const line = d.slice(6);
  // Area codes and exchanges never start with 0 or 1.
  if (/^[01]/.test(area) || /^[01]/.test(exchange)) return 'phone-nanp';
  // 555-0100 through 555-0199 are reserved for fiction; nobody has one.
  if (exchange === '555' && line.startsWith('01')) return 'phone-555-01xx';
  return null;
}

export function messageReason(message: unknown): SpamReason | null {
  if (!message) return null;
  const m = String(message).toLowerCase().replace(/\s+/g, ' ');
  return m.includes(TEMPLATE) ? 'message-template' : null;
}

export function emailReason(email: unknown): SpamReason | null {
  if (!email) return null;
  const e = String(email).trim().toLowerCase();
  const at = e.lastIndexOf('@');
  if (at < 0) return null;
  return DENY_DOMAINS.has(e.slice(at + 1)) ? 'email-domain' : null;
}

// `ts` is the page-load time (ms since epoch) sent along with the form. Missing
// or unparsable (old cached page, JS off, direct POST from a script that never
// read the form): no timing verdict. Only a submission that carries a real
// page-load time and arrives within MIN_FILL_MS is judged.
export function timingReason(ts: unknown, now: number = Date.now()): SpamReason | null {
  if (ts == null || ts === '') return null;
  const t = Number(ts);
  if (!Number.isFinite(t) || t <= 0) return null;
  const elapsed = now - t;
  // A client clock more than a minute ahead of ours says nothing about speed.
  if (elapsed < -60_000) return null;
  return elapsed < MIN_FILL_MS ? 'timing' : null;
}

// First matching reason wins; null means "let it through".
export function spamReason(
  { phone, email, message, ts }: SpamFields = {},
  now: number = Date.now(),
): SpamReason | null {
  return (
    phoneReason(phone) ||
    messageReason(message) ||
    emailReason(email) ||
    timingReason(ts, now)
  );
}
