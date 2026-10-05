"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, Compass, ArrowRight, MapPin, Sparkles } from "lucide-react";

export function EditorialHero() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push("/destinations");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#101210] border-b border-white/10 min-h-[85vh] lg:min-h-[90vh] flex flex-col justify-between">
      {/* Cinematic Background Image with Slow Zoom & Atmospheric Dark Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <SafeImage
          src="/images/places/amber-fort/hero.jpg"
          alt="Amber Fort ramparts at dawn, Rajasthan"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45 scale-105 transition-transform duration-[20s] ease-out hover:scale-110"
        />
        {/* Layered Cinematic Overlays for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/70 to-[#101210]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111312]/95 via-[#111312]/60 to-transparent" />
        <div className="absolute inset-0 editorial-dark-glow pointer-events-none" />
      </div>

      {/* Main Magazine Cover Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 w-full flex-1 flex flex-col justify-center">
        <div className="max-w-4xl space-y-8">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1C201D]/80 border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C85B35] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest font-mono font-semibold text-[#B9B4A8]">
              EXPLORE INDIA &bull; INDEPENDENT TRAVEL ARCHIVE
            </span>
          </div>

          {/* Large Editorial Headline */}
          <div className="space-y-3">
            <div className="text-xs uppercase font-mono tracking-[0.3em] text-[#D28A32]">
              APNA TOUR &bull; FIELD JOURNAL
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-light text-[#F3EBDD] leading-[1.04] tracking-tight">
              India, beyond <br />
              <span className="italic font-normal text-[#C85B35] underline decoration-[#B98945]/30 decoration-wavy decoration-1 underline-offset-8">
                the obvious.
              </span>
            </h1>
          </div>

          {/* Supporting Prose */}
          <p className="text-base sm:text-lg lg:text-xl text-[#B9B4A8] max-w-2xl font-light leading-relaxed">
            A quiet companion for thoughtful travellers. Centuries-old Sahyadri hill forts,
            fog-draped orthodox tea ridges, heritage coastal wharfs, and verified field facts.
            Human-written, factually researched, and completely free of AI filler.
          </p>

          {/* Premium Editorial Search Interface */}
          <div className="max-w-2xl pt-2">
            <form
              onSubmit={handleSearchSubmit}
              className="p-2 sm:p-2.5 rounded-2xl bg-[#171A18]/90 border border-white/10 backdrop-blur-md shadow-2xl transition-all duration-300 focus-within:border-[#C85B35]/60 focus-within:shadow-[0_0_30px_rgba(200,91,53,0.15)] flex flex-col sm:flex-row gap-2"
            >
              <div className="flex-1 flex items-center px-4 py-2.5">
                <Search className="w-5 h-5 text-[#85867E] mr-3 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Where do you want to wander?"
                  className="w-full bg-transparent text-sm sm:text-base text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none font-sans"
                  aria-label="Search destinations, places, or food"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-[#C85B35] hover:bg-[#DA6A42] text-[#FAF5EB] text-xs font-semibold uppercase tracking-wider transition-all duration-200 shrink-0 inline-flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Seek Journey</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Quick Suggestions Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-3 text-xs text-[#85867E]">
              <span className="font-mono text-[11px] text-[#B9B4A8]">Curated suggestions:</span>
              {[
                { label: "Sinhagad Fort", href: "/india/maharashtra/pune/sinhagad-fort" },
                { label: "Amber Fort", href: "/india/rajasthan/jaipur/amber-fort" },
                { label: "Kolukkumalai Tea", href: "/india/kerala/munnar/kolukkumalai-estate" },
                { label: "Fort Kochi", href: "/india/kerala/kochi/fort-kochi-heritage" },
                { label: "Banaras Ghats", href: "/india/uttar-pradesh/varanasi/dashashwamedh-ghat" },
              ].map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="px-2.5 py-1 rounded-full bg-[#1C201D] hover:bg-[#20231F] border border-white/5 hover:border-[#C85B35]/40 text-[#B9B4A8] hover:text-[#F3EBDD] text-[11px] transition-colors cursor-pointer"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Magazine Bottom Metadata Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#0E100F]/90 backdrop-blur-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3 text-[#B9B4A8] font-mono text-[11px]">
            <span className="text-[#C85B35] font-bold">21 PLACES</span>
            <span>&bull;</span>
            <span>6 STATES</span>
            <span>&bull;</span>
            <span>VERIFIED FACTUAL LOGISTICS</span>
          </div>

          <div className="flex items-center gap-6 text-[#85867E]">
            <Link
              href="/india"
              className="hover:text-[#F3EBDD] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Compass className="w-3.5 h-3.5 text-[#C85B35]" />
              <span>Explore State Portals</span>
            </Link>
            <Link
              href="/stories"
              className="hover:text-[#F3EBDD] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Field Dispatches &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
