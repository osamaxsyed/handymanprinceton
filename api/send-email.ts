import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { spamReason, phoneFlag } from './_spam.js';

const EMAIL_RE = /^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/;

// Every body field is coerced to a string and capped, so an array, object or
// megabyte of text can't reach the email or the log.
const str = (v: unknown): string =>
  v == null || typeof v === 'object' ? '' : String(v).trim();
const cap = (v: unknown, max: number): string => str(v).slice(0, max);

const CHECK_PHONE_LINE = 'Phone number may be incomplete or mistyped: please double check.';

// Lead order: validation, spam (silent success), one "[lead]" log line, then
// the owner email in its own try/catch, then the customer receipt in its own.
// The visitor sees success when the owner email went out; a receipt failure
// never fails the request. If the owner email fails, "[lead] ALL SENDS FAILED"
// is logged with the payload and the form shows its error state with the phone.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const raw = req.body && typeof req.body === 'object' ? req.body : {};
  const formType = cap(raw.formType, 40);
  const name = cap(raw.name, 200);
  const email = cap(raw.email, 254);
  const phone = cap(raw.phone, 40);
  const address = cap(raw.address, 300);
  const serviceType = cap(raw.serviceType, 200);
  const description = cap(raw.description, 5000);
  const preferredDate = cap(raw.preferredDate, 100);
  const submittedAt = cap(raw.submittedAt, 60);
  const sourcePage = cap(raw.sourcePage, 200);
  const ts = cap(raw.ts, 20);

  // Hero quick form collects name + phone only; other forms collect email.
  if (!name || (!email && !phone)) {
    return res.status(400).json({ error: 'Name and an email or phone number are required' });
  }

  // Layer 1 bot filter (api/_spam.ts): a hit answers exactly like success and
  // sends nothing, so no inbox, receipt, or Quo text fires for a bot.
  const spam = spamReason({ phone, email, message: description, ts });
  if (spam) {
    console.log(`[spam] ${spam} handymanprinceton.com`);
    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  }

  const checkPhone = phoneFlag(phone) === 'check-phone';
  const replyTo = EMAIL_RE.test(email) ? email : undefined;

  const leadLog = {
    site: 'handymanprinceton.com',
    formType,
    name,
    phone,
    email,
    address,
    serviceType,
    message: description.slice(0, 1000),
    preferredDate,
    sourcePage,
    submittedAt,
    checkPhone,
  };
  console.log(`[lead] ${JSON.stringify(leadLog)}`);

  // Gmail transport; EMAIL_USER / EMAIL_PASS are set in the Vercel project.
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const inboxAddress = 'osama@handymanprinceton.com';
  const SITE_TAG = '[Princeton]';
  const SITE_NAME = 'handymanprinceton.com';

  // Form values land in an HTML email, so escape before interpolating.
  const esc = (v: unknown) =>
    String(v ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const row = (label: string, value: unknown) =>
    value ? `<p><strong>${label}:</strong> ${esc(value)}</p>` : '';

  // Subject format is parsed by the owner's handler: "[Princeton] New (Booking|Estimate) Request from ..."
  // A flag only ever goes on the end, so that prefix match keeps working.
  const emailSubject = (formType === 'booking'
    ? `${SITE_TAG} New Booking Request from ${name}`
    : `${SITE_TAG} New Estimate Request from ${name}`) + (checkPhone ? ' (check phone)' : '');

  const emailBody = `
      <h2>${formType === 'booking' ? 'New Booking Request' : 'New Estimate Request'}</h2>
      ${checkPhone ? `<p style="color:#b42318;"><strong>${CHECK_PHONE_LINE}</strong></p>` : ''}
      <p><strong>Source Site:</strong> ${SITE_NAME}</p>
      ${row('Name', name)}
      ${row('Email', email)}
      <p><strong>Phone:</strong> ${esc(phone || 'Not provided')}</p>
      ${row('Address', address)}
      ${row('Service Type', serviceType)}
      ${row('Came from', sourcePage)}
      ${description ? `<p><strong>Description:</strong> ${esc(description)}</p>` : ''}
      ${row('Preferred Date', preferredDate)}
      ${row('Submitted', submittedAt)}
    `;

  // Owner notification first: the HTTP response depends on it alone.
  try {
    await transporter.sendMail({
      from: `Princeton Handyman <${inboxAddress}>`,
      to: inboxAddress,
      subject: emailSubject,
      html: emailBody,
      replyTo,
    });
  } catch (error) {
    console.error('Owner email failed:', error);
    console.error(`[lead] ALL SENDS FAILED ${JSON.stringify(leadLog)}`);
    return res.status(500).json({ error: 'Failed to send email' });
  }

  // Email receipt to the customer: the text is the moment, the email is the
  // record they can find again later. Best-effort, only to one valid address.
  if (replyTo) {
    const receipt = transporter.sendMail({
      from: `Princeton Handyman <${inboxAddress}>`,
      replyTo: inboxAddress,
      to: replyTo,
      subject: `We got your request - Princeton Handyman`,
      html: `
            <p>Thanks ${esc(name.split(/\s+/)[0])}, your request is in.</p>
            <p>Osama reviews these personally and gets back to you the same business day.
               If you have photos of the job, text them to (609) 375-0098: it is the fastest
               way to get you a real price without a second trip.</p>
            <h3 style="margin-bottom:6px">Flat pricing, settled before any work starts</h3>
            <p style="margin-top:0">Handyman Visit $345 (up to 2 hours) &middot; Half Day $595 &middot; Full Day $1,095<br>
               Bigger one-to-three-day jobs get one written price. Materials on the quote. No hourly meters.</p>
            <p>- Princeton Handyman &middot; NJ HIC #13VH13918800<br>
               <a href="https://handymanprinceton.com">handymanprinceton.com</a></p>`,
    }).catch((receiptError) => {
      console.error('Customer receipt email failed (form still delivered):', receiptError);
    });

    // Bounded wait: give the receipt a moment to finish, but never let a
    // slow SMTP round trip run the function into Vercel's 10s ceiling and
    // surface as a failure to a customer whose request already landed.
    try {
      await Promise.race([
        receipt,
        new Promise((resolve) => setTimeout(resolve, 2500)),
      ]);
    } catch (receiptError) {
      console.error('Customer receipt email failed (form still delivered):', receiptError);
    }
  }

  return res.status(200).json({ success: true, message: 'Email sent successfully' });
}
