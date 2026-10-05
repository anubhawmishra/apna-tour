import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy — APNA TOUR",
  description:
    "Explanation of how APNA TOUR uses cookies, local browser storage, and reader preferences in compliance with privacy principles.",
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24 text-[#B9B4A8]">
      <Breadcrumb items={[{ label: "Cookie Policy" }]} />

      <div className="border-b border-white/10 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          Transparency &amp; Cookies
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F3EBDD]">
          Cookie Policy
        </h1>
        <p className="text-xs text-[#85867E] font-mono">
          Last Updated: October 5, 2026 &bull; Published by APNA TOUR Travel Discovery Platform (Operated by Ashish Nath Tiwari)
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#B9B4A8]">
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            1. What Are Cookies and Local Storage?
          </h2>
          <p>
            Cookies and browser local storage are small text files or key-value records saved on your computer or mobile device when you access our travel discovery website. They help the website remember your actions and preferences over time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            2. Categories of Storage We Use
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 space-y-1 text-xs sm:text-sm">
              <span className="font-semibold text-[#F3EBDD] block">Strictly Necessary (Always Active)</span>
              <p className="text-[#B9B4A8]">
                Required for core security, session state, and remembering whether you have accepted or customized privacy preferences. These do not track browsing across other websites.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 space-y-1 text-xs sm:text-sm">
              <span className="font-semibold text-[#F3EBDD] block">Functional &amp; Reader Preferences</span>
              <p className="text-[#B9B4A8]">
                Used to save your custom trip plans (such as days and activities in the Itinerary Builder) and bookmarked places into your local browser so you can revisit them later without having to log in.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 space-y-1 text-xs sm:text-sm">
              <span className="font-semibold text-[#F3EBDD] block">Aggregated Reader Analytics (Optional)</span>
              <p className="text-[#B9B4A8]">
                Helps our editorial desk understand which state guides, food trails, and travel stories readers consult most frequently. Loaded only after you give affirmative consent.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            3. How to Manage or Clear Cookies
          </h2>
          <p>
            You can modify your cookie choices at any time through our footer consent preferences, or by clearing cookies directly in your browser settings (Chrome, Firefox, Safari, Edge).
          </p>
        </section>
      </div>
    </div>
  );
}
