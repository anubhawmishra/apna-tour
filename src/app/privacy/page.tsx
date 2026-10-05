import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy (DPDP Act, 2023) — APNA TOUR",
  description:
    "Privacy Policy for APNA TOUR outlining data handling practices, purpose limitations, consent mechanisms, and user rights under the Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24 text-[#B9B4A8]">
      <Breadcrumb items={[{ label: "Privacy Policy" }]} />

      <div className="border-b border-white/10 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          Legal &amp; Compliance Notice
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F3EBDD]">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#85867E] font-mono">
          Last Updated: October 5, 2026 &bull; Formatted pursuant to the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Act, 2000.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#B9B4A8]">
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            1. Data Fiduciary &amp; Overview
          </h2>
          <p>
            This Privacy Policy applies to the digital travel discovery platform operated by <strong>APNA TOUR Travel Discovery Platform</strong> (&ldquo;APNA TOUR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), founded and operated by Ashish Nath Tiwari, having operational presence across Pune, Maharashtra and Patna, Bihar, India.
          </p>
          <p>
            APNA TOUR is committed to protecting your personal data in accordance with the principles of the <em>Digital Personal Data Protection Act, 2023</em> (DPDP Act) and applicable rules framed thereunder. We collect and process personal data solely for clear, specified, and lawful purposes with your explicit, informed consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            2. Personal Data We Collect
          </h2>
          <p>
            We adhere to data minimization. We only collect information necessary to provide and improve our travel discovery services:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>
              <strong>Direct Communications &amp; Inquiries:</strong> Name, email address, message topic, and text provided via our Contact or Contributor Submission forms.
            </li>
            <li>
              <strong>Newsletter Subscriptions:</strong> Email address and timestamp of affirmative consent for our Sunday Dispatch.
            </li>
            <li>
              <strong>Local Preferences &amp; Saves:</strong> Saved places, custom itineraries, and cookie preferences stored locally in your browser storage.
            </li>
            <li>
              <strong>Technical Telemetry:</strong> Anonymized or aggregated technical indicators (such as browser family, approximate location at state/country level, and referral links) when explicitly consented to in our consent banner.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            3. Purpose of Processing
          </h2>
          <p>
            Your personal data is processed solely for the following specified purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Responding to editorial feedback, correction notices, and contributor pitches.</li>
            <li>Delivering our editorial newsletter upon your affirmative request.</li>
            <li>Protecting against malicious submissions, spam, or denial-of-service abuse.</li>
            <li>Improving the usability, reading layout, and accessibility of our platform.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            4. Consent &amp; Your Right to Withdraw
          </h2>
          <p>
            Where processing is based on consent, you have the right to withdraw your consent at any time as easily as giving it. You may withdraw cookie/analytics consent through the banner preferences control on our footer or unsubscribe from newsletters via the link provided in every dispatch.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            5. Data Principal Rights under the DPDP Act
          </h2>
          <p>
            As a Data Principal under Indian law, you are entitled to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li><strong>Right to Access:</strong> Obtain a summary of personal data processed by us and identities of any data fiduciaries or processors with whom data has been shared.</li>
            <li><strong>Right to Correction &amp; Erasure:</strong> Request the correction of inaccurate data or completion of incomplete records, or erasure of personal data that is no longer necessary for the purpose it was collected.</li>
            <li><strong>Right of Grievance Redressal:</strong> Avail readily accessible grievance redressal mechanisms from us.</li>
            <li><strong>Right to Nominate:</strong> Nominate another individual to exercise your rights in the event of death or incapacity.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            6. Grievance Redressal Officer
          </h2>
          <p>
            In compliance with the DPDP Act, 2023 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, you may address any privacy inquiries or grievances to our designated Grievance Officer:
          </p>
          <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 text-xs sm:text-sm space-y-1 font-mono text-[#F3EBDD]">
            <div><strong>Designation:</strong> Grievance Redressal Officer</div>
            <div><strong>Officer:</strong> Ashish Nath Tiwari</div>
            <div><strong>Platform:</strong> APNA TOUR Travel Discovery Platform</div>
            <div><strong>Direct Contact:</strong> +91 72776 31873</div>
            <div><strong>Email:</strong> ashishnathtiwari12@gmail.com / grievance@apnatour.in</div>
          </div>
          <p className="text-xs text-[#85867E]">
            Learn more about our dedicated procedure on our{" "}
            <Link href="/grievance" className="text-[#C85B35] underline hover:text-[#D28A32]">
              Grievance Redressal page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
