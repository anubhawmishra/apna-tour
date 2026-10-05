"use client";

import React, { useState } from "react";
import { PlaceData } from "@/types";
import { PlaceCard } from "@/components/places/PlaceCard";

interface PlacesClientViewProps {
  initialPlaces: PlaceData[];
}

export function PlacesClientView({ initialPlaces }: PlacesClientViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Heritage", "Architecture", "Nature", "Spiritual", "Culture"];

  const filteredPlaces =
    selectedCategory === "All"
      ? initialPlaces
      : initialPlaces.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="space-y-8">
      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all shrink-0 ${
              selectedCategory === cat
                ? "bg-[#192D26] text-[#F3EBDD] border border-emerald-500/40 shadow-sm"
                : "bg-[#1C201D] text-[#B9B4A8] hover:text-[#F3EBDD] hover:bg-[#20231F] border border-white/5"
            }`}
          >
            {cat} {cat === "All" ? `(${initialPlaces.length})` : ""}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPlaces.map((place) => (
          <PlaceCard key={place.id} place={place} />
        ))}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="p-12 text-center bg-[#141715] rounded-2xl border border-white/10">
          <p className="text-sm font-medium text-[#B9B4A8]">No places in this category yet.</p>
        </div>
      )}
    </div>
  );
}
