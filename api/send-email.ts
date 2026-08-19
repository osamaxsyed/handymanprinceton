import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { formType, name, email, phone, address, serviceType, description, preferredDate, submittedAt } = req.body;

    // Validate required fields
    if (!name || (!email && !phone)) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Create transporter using Gmail or your preferred email service
    // You'll need to set these environment variables in Vercel
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

    const emailSubject = formType === 'booking'
      ? `${SITE_TAG} New Booking Request from ${name}`
      : `${SITE_TAG} New Estimate Request from ${name}`;

    const emailBody = `
      <h2>${formType === 'booking' ? 'New Booking Request' : 'New Estimate Request'}</h2>
      <p><strong>Source Site:</strong> ${SITE_NAME}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      ${address ? `<p><strong>Address:</strong> ${address}</p>` : ''}
      ${serviceType ? `<p><strong>Service Type:</strong> ${serviceType}</p>` : ''}
      ${description ? `<p><strong>Description:</strong> ${description}</p>` : ''}
      ${preferredDate ? `<p><strong>Preferred Date:</strong> ${preferredDate}</p>` : ''}
      <p><strong>Submitted:</strong> ${submittedAt}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: `Princeton Handyman <${inboxAddress}>`,
      to: inboxAddress,
      subject: emailSubject,
      html: emailBody,
      replyTo: email,
    });

    // Email receipt to the customer, mirroring the booking flow: the text is the
    // moment, the email is the record they can find again later. Best-effort and
    // skipped for job applications.
    if (email && !isApplication) {
      try {
        await transporter.sendMail({
          from: `Princeton Handyman <${inboxAddress}>`,
          replyTo: inboxAddress,
          to: email,
          subject: `We got your request - Princeton Handyman`,
          html: `
            <p>Thanks ${esc(String(name).trim().split(/\s+/)[0])}, your estimate request is in.</p>
            <p>Osama reviews these personally and gets back to you the same business day.
               If you have photos of the job, text them to (609) 375-0098: it is the fastest
               way to get you a real price without a second trip.</p>
            <h3 style="margin-bottom:6px">Flat pricing, agreed before any work starts</h3>
            <p style="margin-top:0">Handyman Visit $295 (up to 2 hours) &middot; Half Day $495 &middot; Full Day $895<br>
               Bathroom projects get one fixed written price at a free in-home estimate.
               Materials at cost. No hourly meters.</p>
            <p>- Princeton Handyman &middot; NJ HIC #13VH13918800<br>
               <a href="https://handymanprinceton.com">handymanprinceton.com</a></p>`,
        });
      } catch (receiptError) {
        console.error('Customer receipt email failed (form still delivered):', receiptError);
      }
    }

    // Auto-acknowledge estimate requests by text from the Quo line (the same
    // number Osama texts from, so replies land in his normal thread). Photos
    // are the point: EBH prices from photos. Best-effort — never fails the
    // form submission, and job applications are excluded.
    const quoKey = process.env.QUO_API_KEY;
    const quoFrom = process.env.QUO_PHONE_NUMBER_ID;
    const digits = String(phone || '').replace(/\D/g, '');
    const e164 =
      digits.length === 10 ? `+1${digits}`
      : digits.length === 11 && digits.startsWith('1') ? `+${digits}`
      : null;
    if (quoKey && quoFrom && e164 && !isApplication) {
      const firstName = String(name).trim().split(/\s+/)[0];
      try {
        await fetch('https://api.openphone.com/v1/messages', {
          method: 'POST',
          headers: { Authorization: quoKey, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: quoFrom,
            to: [e164],
            content:
              `Hi ${firstName}, this is Princeton Handyman — we got your estimate request and Osama will reach out shortly. ` +
              `If you have photos of the job, reply with them here. It helps us get you a price faster.`,
          }),
        });
      } catch (smsError) {
        console.error('Quo auto-text failed (form still delivered):', smsError);
      }
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
