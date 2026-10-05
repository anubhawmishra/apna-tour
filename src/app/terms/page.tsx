import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service — APNA TOUR",
  description:
    "Terms of Service governing the use of the APNA TOUR travel discovery platform and editorial publications.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24 text-[#B9B4A8]">
      <Breadcrumb items={[{ label: "Terms of Service" }]} />

      <div className="border-b border-white/10 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          User Agreement
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F3EBDD]">
          Terms of Service
        </h1>
        <p className="text-xs text-[#85867E] font-mono">
          Effective Date: October 5, 2026 &bull; Published by APNA TOUR Travel Discovery Platform (Operated by Ashish Nath Tiwari)
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#B9B4A8]">
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or browsing APNA TOUR (accessible at apnatour.in), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            2. Editorial &amp; Factual Information Disclaimer
          </h2>
          <p>
            APNA TOUR publishes travel narratives, opening timings, entry rules, and cultural notes compiled through diligent field reporting. However, monument admission fees, timings enforced by the Archaeological Survey of India (ASI) or state departments, and weather road closures may change without notice. Travelers are advised to confirm critical logistics prior to overland travel.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            3. Intellectual Property Rights
          </h2>
          <p>
            All original editorial essays, photography curations, typographic layouts, and brand assets (including the APNA TOUR brand mark and portal logo) are the intellectual property of APNA TOUR or licensed contributors. Content may not be scraped, republished, or incorporated into automated models without prior written consent.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            4. User Contributed Submissions
          </h2>
          <p>
            When submitting story ideas, comments, or fact corrections through our portal, you represent that the material is original and does not violate third-party intellectual property or confidentiality obligations.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            5. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </section>
      </div>
    </div>
  );
}
