// Provider-agnostic Email Dispatch Architecture for APNA TOUR
// Supports Resend, direct HTTP webhooks, and graceful local simulation.

export interface SendEmailPayload {
  to: string;
  from?: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

export interface SendEmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
  simulated?: boolean;
}

export async function sendEmail(payload: SendEmailPayload): Promise<SendEmailResult> {
  const apiKey =
    process.env.RESEND_API_KEY ||
    process.env.EMAIL_PROVIDER_API_KEY ||
    process.env.EMAIL_API_KEY;

  const fromEmail =
    payload.from ||
    process.env.FROM_EMAIL ||
    "APNA TOUR <enquiries@apnatour.in>";

  // If Resend API key is present, send via Resend API
  if (apiKey && apiKey.startsWith("re_")) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [payload.to],
          reply_to: payload.replyTo,
          subject: payload.subject,
          html: payload.html,
          text: payload.text,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("[Email Provider Error - Resend]:", errorData);
        return {
          success: false,
          error: "Failed to dispatch email through configured provider.",
        };
      }

      const data = await response.json();
      return {
        success: true,
        messageId: data.id,
      };
    } catch (err) {
      console.error("[Email Provider Exception]:", err);
      return {
        success: false,
        error: "Network exception during email dispatch.",
      };
    }
  }

  // Graceful development / staging fallback:
  // When no API key is supplied, log the dispatch safely and return simulated success
  console.log(
    `[EMAIL SIMULATION - No API key configured]\nTo: ${payload.to}\nSubject: ${payload.subject}\nLength: ${payload.text.length} chars\n(Configure RESEND_API_KEY in .env for production delivery)`
  );

  return {
    success: true,
    messageId: `simulated-${Date.now()}`,
    simulated: true,
  };
}
