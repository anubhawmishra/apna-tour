import React from "react";
import type { Metadata } from "next";
import { travelService } from "@/services/travelService";
import { PlaceCard } from "@/components/places/PlaceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PlacesClientView } from "./PlacesClientView";

export const metadata: Metadata = {
  title: "Places to Visit in India — Forts, Temples & Nature",
  description:
    "Directory of historic places to visit across India. Verified visiting hours, entry fees, best time of day, and accessibility guidelines.",
};

export default function PlacesPage() {
  const places = travelService.getPlaces();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb items={[{ label: "Places to Visit" }]} />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block">
          CURATED MONUMENT &amp; LANDSCAPE ARCHIVE // VERIFIED RESEARCH
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Places to Visit Across India
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed font-sans">
          Each monument, fortress, and sacred courtyard documented here includes independently verified opening hours, authentic ticket notes, best hours for natural light, and quiet moments.
        </p>
      </div>

      <PlacesClientView initialPlaces={places} />
    </div>
  );
}
