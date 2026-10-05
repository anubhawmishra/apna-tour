import { siteConfig } from "@/config/site";
import { TravelEnquiryInput } from "@/types";

export function generateOwnerEnquiryEmail(enquiry: TravelEnquiryInput): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = `New APNA TOUR Travel Enquiry — ${enquiry.destination}`;
  const timestamp = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const text = `
NEW APNA TOUR TRAVEL ENQUIRY
============================
Destination: ${enquiry.destination}
Submission Time: ${timestamp}
Source Page: ${enquiry.sourcePage || "Direct"}

TRAVELLER DETAILS:
------------------
Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Starting City: ${enquiry.startingCity || "Not specified"}

TRIP SPECIFICATIONS:
--------------------
Travel Dates: ${enquiry.travelDates || "Flexible / Not specified"}
Number of Travellers: ${enquiry.travellerCount || "Not specified"}
Preferred Trip Type: ${enquiry.tripType || "Not specified"}
Estimated Budget: ${enquiry.budget || "Not specified"}

TRAVELLER MESSAGE & REQUIREMENTS:
---------------------------------
${enquiry.message}

--
APNA TOUR Communications Dispatch
Recipient: ${siteConfig.contact.name} (${siteConfig.contact.email})
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; color: #171615; margin: 0; padding: 24px; }
    .card { background-color: #FFFFFF; max-width: 620px; margin: 0 auto; border-radius: 12px; border: 1px solid #E7DFD1; padding: 32px; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
    .header { border-bottom: 2px solid #C85327; padding-bottom: 16px; margin-bottom: 24px; }
    .brand { font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #C85327; }
    h1 { font-size: 24px; font-weight: 600; margin: 6px 0 0 0; color: #171615; }
    .tag { display: inline-block; background-color: #FDF4ED; color: #A63F19; font-size: 12px; font-weight: 600; padding: 4px 10px; rounded: 6px; margin-top: 8px; }
    .section-title { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700; color: #7F776E; margin-top: 24px; margin-bottom: 12px; border-bottom: 1px solid #EFE8DC; padding-bottom: 4px; }
    .grid { display: table; width: 100%; }
    .row { display: table-row; }
    .label { display: table-cell; width: 38%; padding: 6px 0; font-size: 13px; color: #5E5851; font-weight: 500; }
    .val { display: table-cell; width: 62%; padding: 6px 0; font-size: 13px; color: #171615; font-weight: 600; }
    .message-box { background-color: #FAF7F2; border-left: 3px solid #C85327; padding: 16px; font-size: 14px; line-height: 1.6; color: #262422; margin-top: 8px; border-radius: 0 8px 8px 0; }
    .footer { font-size: 11px; color: #A39B91; text-align: center; margin-top: 32px; border-top: 1px solid #EFE8DC; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="brand">APNA TOUR &bull; Field Operations</div>
      <h1>New Travel Enquiry</h1>
      <div class="tag">Destination: ${enquiry.destination}</div>
    </div>

    <div class="section-title">Traveller Contact Information</div>
    <div class="grid">
      <div class="row"><div class="label">Full Name:</div><div class="val">${enquiry.name}</div></div>
      <div class="row"><div class="label">Email Address:</div><div class="val"><a href="mailto:${enquiry.email}" style="color: #C85327; text-decoration: none;">${enquiry.email}</a></div></div>
      <div class="row"><div class="label">Phone / WhatsApp:</div><div class="val"><a href="tel:${enquiry.phone}" style="color: #171615; text-decoration: none;">${enquiry.phone}</a></div></div>
      ${enquiry.startingCity ? `<div class="row"><div class="label">Starting City:</div><div class="val">${enquiry.startingCity}</div></div>` : ""}
    </div>

    <div class="section-title">Trip Details &amp; Preferences</div>
    <div class="grid">
      <div class="row"><div class="label">Destination:</div><div class="val">${enquiry.destination}</div></div>
      <div class="row"><div class="label">Travel Dates:</div><div class="val">${enquiry.travelDates || "Flexible / Not specified"}</div></div>
      <div class="row"><div class="label">No. of Travellers:</div><div class="val">${enquiry.travellerCount || "Not specified"}</div></div>
      <div class="row"><div class="label">Trip Style:</div><div class="val">${enquiry.tripType || "Not specified"}</div></div>
      <div class="row"><div class="label">Estimated Budget:</div><div class="val">${enquiry.budget || "Not specified"}</div></div>
    </div>

    <div class="section-title">Traveller Message &amp; Requirements</div>
    <div class="message-box">
      ${enquiry.message.replace(/\n/g, "<br>")}
    </div>

    <div class="footer">
      Received: ${timestamp} &bull; Source: ${enquiry.sourcePage || "Direct Web"}<br>
      Routed to Operations Lead: <strong>${siteConfig.contact.name}</strong> (${siteConfig.contact.email})
    </div>
  </div>
</body>
</html>
`.trim();

  return { subject, html, text };
}

export function generateUserConfirmationEmail(enquiry: TravelEnquiryInput): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = `We've received your travel enquiry for ${enquiry.destination} — APNA TOUR`;

  const text = `
Dear ${enquiry.name},

Thank you for reaching out to APNA TOUR.

We have received your enquiry regarding travel to ${enquiry.destination}. Our founder and travel operations lead, Ashish Nath Tiwari, along with our resident researchers, will review your requirements and follow up with you directly via email (${enquiry.email}) or phone (${enquiry.phone}).

YOUR ENQUIRY SUMMARY:
- Destination: ${enquiry.destination}
- Dates: ${enquiry.travelDates || "Flexible"}
- Travellers: ${enquiry.travellerCount || "Not specified"}
- Your note: "${enquiry.message}"

In the meantime, feel free to explore our curated state and city field journals at https://apnatour.in.

Warm regards,
Ashish Nath Tiwari
Founder & Operations Lead
APNA TOUR — Your trusted companion for discovering India
Direct: ${siteConfig.contact.email} | ${siteConfig.contact.displayPhone}
`.trim();

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${subject}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; color: #171615; margin: 0; padding: 24px; }
    .card { background-color: #FFFFFF; max-width: 580px; margin: 0 auto; border-radius: 12px; border: 1px solid #E7DFD1; padding: 32px; }
    .brand { font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #C85327; }
    h1 { font-family: Georgia, serif; font-size: 24px; font-weight: 400; color: #171615; margin: 12px 0; }
    p { font-size: 14px; line-height: 1.6; color: #3D3935; }
    .summary-box { background-color: #FAF7F2; padding: 16px; border-radius: 8px; border: 1px solid #E7DFD1; font-size: 13px; margin: 20px 0; }
    .footer { font-size: 12px; color: #7F776E; margin-top: 28px; border-top: 1px solid #EFE8DC; padding-top: 16px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="brand">APNA TOUR</div>
    <h1>Namaste ${enquiry.name},</h1>
    <p>
      Thank you for contacting APNA TOUR. We have received your travel enquiry regarding <strong>${enquiry.destination}</strong>.
    </p>
    <p>
      Our team documents India through on-ground field observations, authentic regional food paths, and carefully verified monument hours. Our operations lead, <strong>Ashish Nath Tiwari</strong>, will review your plans and connect with you shortly.
    </p>

    <div class="summary-box">
      <strong>Your Request Snapshot:</strong><br>
      &bull; <strong>Destination:</strong> ${enquiry.destination}<br>
      &bull; <strong>Dates:</strong> ${enquiry.travelDates || "Flexible"}<br>
      &bull; <strong>Party Size:</strong> ${enquiry.travellerCount || "Not specified"}<br>
      &bull; <strong>Message:</strong> <em>${enquiry.message}</em>
    </div>

    <p>
      If you have additional details to share, you can reply directly to this email or reach Ashish via WhatsApp at <a href="${siteConfig.contact.whatsappUrl}" style="color: #C85327; font-weight: 600;">${siteConfig.contact.displayPhone}</a>.
    </p>

    <div class="footer">
      <strong>Ashish Nath Tiwari</strong> &bull; Founder &amp; Operations Lead<br>
      <strong>APNA TOUR</strong> &bull; Your trusted companion for discovering India<br>
      <a href="https://apnatour.in" style="color: #C85327; text-decoration: none;">apnatour.in</a>
    </div>
  </div>
</body>
</html>
`.trim();

  return { subject, html, text };
}
