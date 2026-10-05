import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContributorForm } from "./ContributorForm";
import { BookOpen, CheckCircle, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Write for APNA TOUR — Contributor Submission Guidelines",
  description:
    "Pitch subcontinental travel essays, architectural guides, and regional culinary histories to APNA TOUR.",
};

export default function WriteForUsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24 text-[#B9B4A8]">
      <Breadcrumb items={[{ label: "Write for Us" }]} />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          Editorial Submissions
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Write for APNA TOUR
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed">
          We commission original, human-written field chronicles from writers, architectural researchers, and regional culinary historians living across India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Left Form */}
        <div className="md:col-span-7 bg-[#1C201D] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
          <ContributorForm />
        </div>

        {/* Right Guidelines */}
        <div className="md:col-span-5 space-y-6 text-xs sm:text-sm">
          <div className="p-6 rounded-2xl bg-[#1C201D] border border-white/10 space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#F3EBDD]">
              What We Look For in Pitches
            </h3>
            <ul className="space-y-3 text-[#B9B4A8]">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Specific Geography:</strong> Stories grounded in particular neighborhoods, peths, mountain paths, or fishing harbors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Original Observation:</strong> Accounts drawn from direct observation rather than aggregated internet summaries.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Respectful Cultural Nuance:</strong> Understanding local customs, sanctum decorum, and community history.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-[#141715] border border-white/10 space-y-3 text-xs">
            <h4 className="font-semibold text-[#F3EBDD] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C85B35]" />
              <span>Editorial Process &amp; Terms</span>
            </h4>
            <p className="text-[#85867E] leading-relaxed">
              We review submissions within two weeks. Submission of a pitch does not guarantee publication or assignment. All published pieces undergo rigorous fact-checking and copy editing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
