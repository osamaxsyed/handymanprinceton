import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { spamReason } from './_spam.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { formType, name, email, phone, address, serviceType, description, preferredDate, submittedAt, sourcePage, ts } = req.body;

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
    const emailSubject = formType === 'booking'
      ? `${SITE_TAG} New Booking Request from ${name}`
      : `${SITE_TAG} New Estimate Request from ${name}`;

    const emailBody = `
      <h2>${formType === 'booking' ? 'New Booking Request' : 'New Estimate Request'}</h2>
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

    // The owner notification is the only send the HTTP response waits on.
    await transporter.sendMail({
      from: `Princeton Handyman <${inboxAddress}>`,
      to: inboxAddress,
      subject: emailSubject,
      html: emailBody,
      replyTo: email || undefined,
    });

    // Email receipt to the customer: the text is the moment, the email is the
    // record they can find again later. Best-effort.
    const followUps: Promise<unknown>[] = [];

    if (email) {
      followUps.push(
        transporter.sendMail({
          from: `Princeton Handyman <${inboxAddress}>`,
          replyTo: inboxAddress,
          to: email,
          subject: `We got your request - Princeton Handyman`,
          html: `
            <p>Thanks ${esc(String(name).trim().split(/\s+/)[0])}, your request is in.</p>
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
        })
      );
    }

    // Bounded wait: give the follow-up a moment to finish, but never let a
    // slow SMTP round trip run the function into Vercel's 10s ceiling and
    // surface as a failure to a customer whose request already landed.
    if (followUps.length) {
      await Promise.race([
        Promise.allSettled(followUps),
        new Promise((resolve) => setTimeout(resolve, 2500)),
      ]);
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
