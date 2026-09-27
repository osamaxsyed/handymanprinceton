// Layer 1 bot-filter checks. Run: npm run test:spam
// Known bot payloads (2026-09-27) must be rejected; realistic leads must pass.
import { spamReason } from '../api/_spam.ts';

const NOW = 1_800_000_000_000;
const BOT_MSG = 'I would like more information. Please contact me by email —';
const cases = [
  // The four verified bot payloads.
  ['bot: Jessica Brown 555-0179', { phone: '+12025550179', email: 'jessica.brown@gmail.com', message: BOT_MSG }, 'phone-555-01xx'],
  ['bot: Nicole Davis 555-0142', { phone: '+12025550142', email: 'nicoledavis@mail.ru', message: BOT_MSG }, 'phone-555-01xx'],
  ['bot: Michael Johnson template msg, real-looking phone', { phone: '(908) 234-5678', email: 'mjohnson@outlook.com', message: BOT_MSG }, 'message-template'],
  ['bot: mail.ru, no message, real-looking phone', { phone: '7325551234', email: 'someone@mail.ru', message: 'Not sure yet' }, 'email-domain'],
  // More of the signature.
  ['bot: template with odd spacing/case', { message: 'i WOULD like  more information.  please contact me BY email' }, 'message-template'],
  ['bot: NANP-invalid exchange starting 1', { phone: '732-155-1234' }, 'phone-nanp'],
  ['bot: NANP-invalid area code starting 0', { phone: '032-555-1234' }, 'phone-nanp'],
  ['bot: 9 digits', { phone: '73255512' }, 'phone-format'],
  ['bot: 11 digits not starting with 1', { phone: '27325551234' }, 'phone-format'],
  ['bot: submitted 1s after page load', { phone: '609-375-0098', ts: String(NOW - 1000) }, 'timing'],
  ['bot: yandex', { email: 'x@yandex.ru' }, 'email-domain'],
  // Real leads.
  ['real: 732-555-1234 is not the fictional 01xx block', { phone: '732-555-1234', email: 'a@gmail.com', message: 'Need a drywall patch in my kitchen' }, null],
  ['real: +1 609 375 0098', { phone: '+1 609 375 0098', email: 'b@aol.com', message: 'Fence quote for 120 ft' }, null],
  ['bot: 555-0100 is the first number of the fictional block', { phone: '9085550100', email: 'c@gmail.com', message: 'Roof leaking near the chimney' }, 'phone-555-01xx'],
  ['real: 555-0200 is outside the fictional block', { phone: '908-555-0200', email: 'c@gmail.com', message: 'Roof leaking near the chimney' }, null],
  ['real: missing ts (cached page / JS off) is not judged on timing', { phone: '7323334444', email: 'd@yahoo.com', message: 'Hero quick form' }, null],
  ['real: garbage ts ignored', { phone: '7323334444', ts: 'abc' }, null],
  ['real: submitted 45s after page load', { phone: '7323334444', ts: String(NOW - 45_000) }, null],
  ['real: page loaded yesterday', { phone: '7323334444', ts: String(NOW - 86_400_000) }, null],
  ['real: client clock 2 minutes ahead', { phone: '7323334444', ts: String(NOW + 120_000) }, null],
  ['real: phone optional and empty', { phone: '', email: 'e@hotmail.com' }, null],
  ['real: no fields at all', {}, null],
  ['real: message mentions email but is not the template', { message: 'Please contact me by email, I work nights' }, null],
];

let failed = 0;
for (const [label, fields, want] of cases) {
  const got = spamReason(fields, NOW);
  const ok = got === want;
  if (!ok) failed++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label} -> ${got}${ok ? '' : ` (want ${want})`}`);
}
console.log(failed ? `\n${failed} failing` : `\nall ${cases.length} passed`);
process.exit(failed ? 1 : 0);
