import { z } from "zod";
import { siteConfig } from "@/config/site";
import { prisma } from "@/lib/db/prisma";
import { sendEmail } from "./provider";
import {
  generateOwnerEnquiryEmail,
  generateUserConfirmationEmail,
} from "./templates";

export const TravelEnquirySchema = z.object({
  name: z.string().min(2, "Please provide your full name (minimum 2 characters).").max(100),
  email: z.string().email("Please provide a valid email address."),
  phone: z
    .string()
    .min(8, "Please enter a valid mobile / contact number.")
    .max(20, "Mobile number is too long."),
  destination: z.string().min(2, "Please specify the destination or region of interest."),
  travelDates: z.string().optional(),
  travellerCount: z.number().int().min(1).max(100).optional(),
  tripType: z.string().optional(),
  budget: z.string().optional(),
  startingCity: z.string().optional(),
  message: z.string().min(10, "Please share a few details or questions (minimum 10 characters).").max(3000),
  consent: z
    .boolean()
    .refine((val) => val === true, {
      message: "You must consent to be contacted regarding this travel request.",
    }),
  sourcePage: z.string().optional(),
  honeypot: z.string().optional(),
});

export interface SubmitEnquiryResult {
  success: boolean;
  message: string;
  enquiryId?: string;
  errors?: Record<string, string>;
}

export async function processTravelEnquiry(
  rawInput: unknown
): Promise<SubmitEnquiryResult> {
  // Validate input schema
  const parseResult = TravelEnquirySchema.safeParse(rawInput);
  if (!parseResult.success) {
    const errors: Record<string, string> = {};
    for (const issue of parseResult.error.issues) {
      const field = issue.path[0] as string;
      if (!errors[field]) {
        errors[field] = issue.message;
      }
    }
    return {
      success: false,
      message: "Please correct the highlighted fields in the form.",
      errors,
    };
  }

  const data = parseResult.data;

  // Anti-Spam Honeypot check
  if (data.honeypot && data.honeypot.trim().length > 0) {
    console.warn("[Spam Honeypot Blocked]:", data.email);
    // Return simulated success to trick bot
    return {
      success: true,
      message: "Your travel enquiry has been received.",
    };
  }

  // 1. Persist to database if DB is reachable
  let submissionId: string | undefined;
  try {
    const saved = await prisma.contactSubmission.create({
      data: {
        name: data.name.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        destination: data.destination.trim(),
        travelDates: data.travelDates?.trim() || null,
        travellerCount: data.travellerCount || null,
        tripType: data.tripType?.trim() || null,
        budget: data.budget?.trim() || null,
        message: data.message.trim(),
        consent: data.consent,
        sourcePage: data.sourcePage || null,
        subject: `Enquiry: ${data.destination}`,
        status: "NEW",
      },
    });
    submissionId = saved.id;
  } catch (dbErr) {
    console.warn(
      "[Database Persistence Note]: Running in stateless/file-based mode. Prisma write skipped:",
      (dbErr as Error).message
    );
  }

  // 2. Format & dispatch email to the website owner (Ashish Nath Tiwari)
  const ownerPayload = generateOwnerEnquiryEmail(data);
  const targetEmail =
    process.env.CONTACT_EMAIL || siteConfig.contact.email;

  const ownerDispatch = await sendEmail({
    to: targetEmail,
    replyTo: data.email,
    subject: ownerPayload.subject,
    html: ownerPayload.html,
    text: ownerPayload.text,
  });

  if (!ownerDispatch.success) {
    console.error("[Email Notification to Owner Failed]:", ownerDispatch.error);
    // We still return success if DB recorded it, or a human friendly message
  }

  // 3. Dispatch user confirmation email
  const userPayload = generateUserConfirmationEmail(data);
  await sendEmail({
    to: data.email,
    subject: userPayload.subject,
    html: userPayload.html,
    text: userPayload.text,
  }).catch((err) => {
    console.warn("[User Confirmation Email Note]:", err);
  });

  return {
    success: true,
    message: "Your travel enquiry has been successfully sent to Ashish Nath Tiwari and our editorial desk.",
    enquiryId: submissionId,
  };
}
