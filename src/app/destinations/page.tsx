import React from "react";
import type { Metadata } from "next";
import { travelService } from "@/services/travelService";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Destinations Across India — States, Cities & Hill Stations",
  description:
    "Explore curated destinations across India. Browse storied cities, Maratha hill forts, desert havelis, and coastal spice ports.",
};

export default function DestinationsPage() {
  const cities = travelService.getCities();
  const states = travelService.getStates();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: "Destinations" }]} />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block">
          SUBCONTINENTAL DIRECTORY // 28 STATES &amp; TERRITORIES
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Destinations of India
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed font-sans">
          From the pedestrian-only colonial mall roads of Shimla to the ancient concentric temple streets of Madurai. Explore our verified urban and mountain guides.
        </p>
      </div>

      {/* Featured Cities Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
            Featured Cities &amp; Hill Stations ({cities.length})
          </h2>
          <span className="text-xs font-mono text-[#85867E]">
            Verified Cultural Heritage
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cities.map((city) => (
            <DestinationCard key={city.id} item={city} type="city" />
          ))}
        </div>
      </div>

      {/* States Index */}
      <div className="space-y-6 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
            States &amp; Territories ({states.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {states.map((state) => (
            <DestinationCard key={state.id} item={state} type="state" />
          ))}
        </div>
      </div>
    </div>
  );
}
