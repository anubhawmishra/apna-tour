import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ShieldCheck, Mail, Clock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Grievance Redressal Mechanism — APNA TOUR",
  description:
    "Statutory Grievance Redressal Officer contact information and complaint resolution process pursuant to the DPDP Act, 2023 and Information Technology Rules.",
};

export default function GrievancePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-24 text-[#B9B4A8]">
      <Breadcrumb items={[{ label: "Grievance Redressal" }]} />

      <div className="border-b border-white/10 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          Statutory Notice
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-[#F3EBDD]">
          Grievance Redressal Mechanism
        </h1>
        <p className="text-xs text-[#85867E] font-mono">
          Pursuant to Section 13 of the Digital Personal Data Protection Act, 2023 &amp; Rule 3(2) of the Information Technology (Intermediary Guidelines) Rules, 2021.
        </p>
      </div>

      <div className="space-y-8 text-sm sm:text-base leading-relaxed text-[#B9B4A8]">
        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            1. Overview of Redressal Mechanism
          </h2>
          <p>
            APNA TOUR is committed to addressing concerns regarding personal data processing, content inaccuracies, or user rights promptly, fairly, and transparently. We have established a designated Grievance Redressal mechanism to receive and resolve any concerns raised by Data Principals.
          </p>
        </section>

        {/* Official Officer Contact Card */}
        <section className="p-6 rounded-2xl bg-[#1C201D] border border-white/10 space-y-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="font-serif text-lg font-semibold text-[#F3EBDD]">
              Designated Grievance Redressal Officer
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-mono text-[#F3EBDD]">
            <div>
              <span className="text-[#85867E] block text-[10px] uppercase">Name / Designation:</span>
              <span className="font-semibold text-[#F3EBDD]">Ashish Nath Tiwari</span> (Grievance Redressal Officer)
            </div>
            <div>
              <span className="text-[#85867E] block text-[10px] uppercase">Entity:</span>
              <span className="font-semibold text-[#F3EBDD]">APNA TOUR Travel Discovery Platform</span>
            </div>
            <div>
              <span className="text-[#85867E] block text-[10px] uppercase">Official Email:</span>
              <span className="font-semibold text-[#C85B35]">ashishnathtiwari12@gmail.com / grievance@apnatour.in</span>
            </div>
            <div>
              <span className="text-[#85867E] block text-[10px] uppercase">Direct Helpline:</span>
              <span className="font-semibold text-[#F3EBDD]">+91 72776 31873 (Mon–Sat, 10am–6pm IST)</span>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            2. Procedure for Lodging a Grievance
          </h2>
          <p>
            To lodge a grievance regarding your personal data or content on the platform, please send a written communication to the Grievance Officer email above containing:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Your full name and contact information (email address or phone number).</li>
            <li>A clear description of the specific grievance or data right request (e.g., erasure, correction, withdrawal of consent).</li>
            <li>Any relevant URLs or screenshot references on APNA TOUR.</li>
            <li>A statement affirming that the information provided in the complaint is accurate.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl sm:text-2xl font-medium text-[#F3EBDD]">
            3. Resolution Timelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 space-y-1">
              <span className="font-semibold text-[#F3EBDD] block flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#C85B35]" />
                Acknowledgment
              </span>
              <p className="text-[#B9B4A8]">
                Receipt of the grievance is acknowledged within <strong>24 to 48 hours</strong> with a unique tracking reference.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 space-y-1">
              <span className="font-semibold text-[#F3EBDD] block flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-400" />
                Resolution
              </span>
              <p className="text-[#B9B4A8]">
                The grievance will be investigated and disposed of within the statutory timeframe (no later than 15 to 30 days as prescribed by law).
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
