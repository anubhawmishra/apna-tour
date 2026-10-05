import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { InteractiveItineraryBuilder } from "@/components/itinerary/InteractiveItineraryBuilder";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Calendar, Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Trip Planner & Curated Itineraries for India",
  description:
    "Build custom day-by-day India itineraries or explore curated 48-hour to 4-day routes across Maharashtra, Rajasthan, Kerala, Uttar Pradesh, and Himachal Pradesh.",
};

export default function ItinerariesPage() {
  const itineraries = travelService.getCuratedItineraries();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 pb-24">
      <Breadcrumb items={[{ label: "Itineraries & Trip Planner" }]} />

      {/* Header */}
      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block">
          TRIP ARCHITECTURE // CUSTOM PACING
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Found the Place. Now Plan the Days.
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed font-sans">
          Pacing is everything in Indian travel. Rather than rushing six monuments in an afternoon, our routes balance early morning light, quiet afternoon museum halls, and atmospheric evening street food.
        </p>
      </div>

      {/* Section 1: Interactive Trip Builder Tool */}
      <div className="space-y-4">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
            Interactive Custom Trip Planner
          </h2>
          <p className="text-xs text-[#85867E] font-mono mt-1">
            Create and organize morning, afternoon, and evening blocks for any Indian destination.
          </p>
        </div>
        <InteractiveItineraryBuilder />
      </div>

      {/* Section 2: Curated Editorial Itineraries */}
      <div id="curated" className="space-y-10 pt-8 border-t border-white/10">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block mb-1">
            HAND-CRAFTED ROUTES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#F3EBDD]">
            Curated Subcontinental Itineraries ({itineraries.length})
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B4A8] mt-1 max-w-xl font-sans">
            Thoughtfully paced journeys written by resident researchers, tested for realistic road transit times and monument crowd patterns.
          </p>
        </div>

        <div className="space-y-12">
          {itineraries.map((itinerary) => (
            <div
              key={itinerary.id}
              className="rounded-2xl border border-white/10 bg-[#141715] overflow-hidden shadow-2xl hover:border-white/20 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left Itinerary Image Banner */}
                <div className="lg:col-span-4 relative h-64 lg:h-auto min-h-[240px] bg-[#1C201D]">
                  <SafeImage
                    src={itinerary.heroImage}
                    alt={itinerary.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141715] via-transparent to-transparent lg:hidden" />
                  <div className="absolute bottom-3 left-3 text-white lg:hidden">
                    <span className="text-[10px] uppercase font-mono tracking-wider bg-[#C85B35] px-2.5 py-0.5 rounded font-semibold">
                      {itinerary.daysCount} Days
                    </span>
                  </div>
                </div>

                {/* Right Content & Day By Day Breakdown */}
                <div className="lg:col-span-8 p-6 sm:p-8 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#85867E]">
                      <span className="uppercase text-[#C85B35] font-semibold">{itinerary.daysCount} Days</span>
                      <span>&bull;</span>
                      <span>Best Months: {itinerary.bestMonths}</span>
                      <span>&bull;</span>
                      <span>{itinerary.idealFor}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EBDD]">
                      {itinerary.title}
                    </h3>

                    <p className="text-sm text-[#B9B4A8] leading-relaxed font-sans">
                      {itinerary.summary}
                    </p>
                  </div>

                  {/* Day-by-Day schedule snippet */}
                  <div className="space-y-3 pt-3 border-t border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#F3EBDD]">
                      Sample Schedule Breakdown:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {itinerary.items.slice(0, 4).map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-xl bg-[#1C201D] border border-white/5 text-xs space-y-1"
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono">
                            <span className="text-[#D28A32]">
                              Day {item.dayNumber} &bull; {item.timeOfDay}
                            </span>
                            <span className="text-[#85867E] text-[10px]">
                              {item.estimatedDuration}
                            </span>
                          </div>
                          <div className="font-serif text-sm font-normal text-[#F3EBDD] line-clamp-1">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-[#85867E] line-clamp-2 font-sans">
                            {item.note}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
