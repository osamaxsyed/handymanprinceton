import type { VercelRequest, VercelResponse } from '@vercel/node';

// Closed public route (2026-11-25). POST /api/send-email used to send the owner
// email (and the customer receipt / text) for anyone who called it, skipping
// /api/lead and CNJ Dash. The sending code now lives in api/_send-email.ts,
// which Vercel does not expose as a route (leading underscore); api/lead.ts
// imports it directly as its fallback. This route sends nothing, ever.
export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  return res.status(410).json({ error: 'Gone' });
}
