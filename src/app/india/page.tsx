import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { InteractiveIndiaMap } from "@/components/ui/InteractiveIndiaMap";
import { Compass, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore India — States & Geographic Regions",
  description:
    "Discover India across 28 states and Union Territories. Verified historical citadels, coastal paths, Himalayan pine valleys, and living cultural landscapes.",
};

export default function ExploreIndiaPage() {
  const states = travelService.getStates();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Explore India" }]} />

      {/* Header */}
      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          Geographic Directory
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Explore India by State
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed">
          From the Sahyadri basalt ridges of Maharashtra to the mirror-smooth lake havelis of Rajasthan and the sacred gopurams of Tamil Nadu. Each state guide offers curated city trails, verified monument facts, and regional food traditions.
        </p>
      </div>

      {/* Interactive Map Explorer */}
      <div>
        <div className="mb-4">
          <h2 className="font-serif text-2xl font-medium text-[#F3EBDD]">
            Interactive Regional Explorer
          </h2>
          <p className="text-xs text-[#85867E]">
            Filter by geographic quadrant to reveal curated urban and rural destinations.
          </p>
        </div>
        <InteractiveIndiaMap />
      </div>

      {/* States Grid */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <h2 className="font-serif text-2xl font-medium text-[#F3EBDD]">
            All Verified State Field Guides ({states.length})
          </h2>
          <span className="text-xs text-[#85867E]">
            Curated with human editorial patience
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {states.map((state) => (
            <DestinationCard key={state.id} item={state} type="state" />
          ))}
        </div>
      </div>
    </div>
  );
}
