import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AUTHORS } from "@/data/travelData";
import { ShieldCheck, Compass, Heart, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About APNA TOUR — An Independent Indian Travel Journal",
  description:
    "Learn about APNA TOUR: our editorial principles, commitment to verified subcontinental research, and mission to document India with human patience.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      <Breadcrumb items={[{ label: "About APNA TOUR" }]} />

      {/* Header */}
      <div className="space-y-4 border-b border-white/10 pb-10">
        <span className="text-xs uppercase font-mono tracking-widest text-[#C85B35] block">
          OUR MANIFESTO // INDEPENDENT RESEARCH
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-[#F3EBDD] leading-tight">
          Your Trusted Companion for Discovering India.
        </h1>
        <p className="font-serif italic text-lg sm:text-2xl text-[#D28A32] leading-relaxed">
          &ldquo;India is too storied, too layered, and too vast to be reduced to twenty-second reels or automated top-ten lists.&rdquo;
        </p>
      </div>

      {/* Narrative Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-[#B9B4A8] text-sm sm:text-base leading-relaxed font-sans">
        <div className="md:col-span-8 space-y-5">
          <p>
            APNA TOUR was founded with a singular conviction: travelers in India deserve an independent, carefully verified, and beautifully written discovery companion.
          </p>
          <p>
            For too long, travel information in India has been split between bureaucratic portals that neglect practical reader details, and algorithmic aggregation sites filled with recycled copy, fake reviews, and generic stock imagery.
          </p>
          <p>
            We take a different path. We walk the basalt stairs of Sinhagad at dawn before the buses arrive. We sit inside 100-year-old Parsi cafes and interview tea pluckers at 7,000 feet in Munnar. We verify whether a monument charges ₹25 or ₹300, whether the gate closes at 5:00 PM or 6:30 PM, and what you should eat within walking distance.
          </p>
        </div>

        <div className="md:col-span-4 bg-[#141715] p-6 rounded-2xl border border-white/10 space-y-4 text-xs shadow-xl">
          <h3 className="font-serif text-lg font-light text-[#F3EBDD]">
            Our 4 Core Commitments
          </h3>
          <ul className="space-y-3.5">
            <li className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong className="text-[#F3EBDD]">Zero AI Hallucinations:</strong> Every opening hour, ticket note, and address is manually verified.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-[#C85B35] shrink-0 mt-0.5" />
              <span><strong className="text-[#F3EBDD]">Pacing Over Checklists:</strong> Realistic transit durations and morning light recommendations.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <Heart className="w-4 h-4 text-[#D28A32] shrink-0 mt-0.5" />
              <span><strong className="text-[#F3EBDD]">Respect for Living Heritage:</strong> We promote responsible interaction with sacred sanctums and artisan guilds.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <BookOpen className="w-4 h-4 text-[#B98945] shrink-0 mt-0.5" />
              <span><strong className="text-[#F3EBDD]">Editorial Integrity:</strong> Editorial mentions cannot be bought. Sponsored content is always explicitly labeled.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Editorial Team */}
      <div className="space-y-8 pt-6 border-t border-white/10">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-[#C85B35] block mb-1">
            THE WRITERS
          </span>
          <h2 className="font-serif text-3xl font-light text-[#F3EBDD]">
            Resident Researchers &amp; Chroniclers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {Object.values(AUTHORS).map((author) => (
            <div
              key={author.id}
              className="p-6 rounded-2xl bg-[#141715] border border-white/10 shadow-xl space-y-4"
            >
              {author.avatarUrl && (
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/15">
                  <Image
                    src={author.avatarUrl}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-normal text-[#F3EBDD]">
                  {author.name}
                </h3>
                <div className="text-xs text-[#C85B35] font-mono">
                  {author.title}
                </div>
                <div className="text-[11px] text-[#85867E] font-mono">
                  {author.location}
                </div>
              </div>
              <p className="text-xs text-[#B9B4A8] leading-relaxed font-sans">
                {author.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA to contribute */}
      <div className="p-8 sm:p-10 rounded-2xl bg-[#192D26] border border-emerald-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F3EBDD]">
            Do you write about Indian heritage or regional cuisines?
          </h3>
          <p className="text-xs text-[#B9B4A8] mt-1 max-w-xl font-sans">
            We commission in-depth field dispatches from writers, photographers, and historians living across peninsular India.
          </p>
        </div>
        <Link
          href="/write-for-us"
          className="px-5 py-3 rounded-xl bg-[#C85B35] hover:bg-[#D28A32] text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shrink-0 inline-flex items-center gap-2 shadow-md"
        >
          <span>Write for APNA TOUR</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
