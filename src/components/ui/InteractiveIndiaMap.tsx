"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { Region } from "@/types";
import { STATES, CITIES } from "@/data/travelData";

export function InteractiveIndiaMap() {
  const [activeRegion, setActiveRegion] = useState<Region>("WEST");
  const [selectedCitySlug, setSelectedCitySlug] = useState<string>("pune");

  const regions: Array<{ id: Region; label: string; count: number; tag: string }> = [
    { id: "WEST", label: "West", count: 1, tag: "Sahyadri Forts & Arabian Coast" },
    { id: "NORTH", label: "North", count: 2, tag: "Desert Fortresses & Himalayan Pines" },
    { id: "SOUTH", label: "South", count: 2, tag: "Temple Gopurams & Cardamom Hills" },
    { id: "CENTRAL", label: "Central", count: 1, tag: "Ancient Ghats & Forest Reserves" },
    { id: "EAST", label: "East", count: 0, tag: "Tea Valleys & Coromandel Coast" },
    { id: "NORTHEAST", label: "Northeast", count: 0, tag: "Living Root Bridges & Monasteries" },
  ];

  const regionStates = STATES.filter((s) => s.region === activeRegion);
  const regionCities = CITIES.filter((c) =>
    regionStates.some((s) => s.slug === c.stateSlug)
  );

  const selectedCity =
    regionCities.find((c) => c.slug === selectedCitySlug) || regionCities[0] || CITIES[0];

  return (
    <div className="bg-[#141715] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
      {/* Region Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto p-3.5 sm:p-4 bg-[#111312] border-b border-white/10">
        <span className="text-[11px] font-mono uppercase tracking-widest text-[#85867E] mr-2 shrink-0">
          Filter Region:
        </span>
        {regions.map((reg) => (
          <button
            key={reg.id}
            onClick={() => {
              setActiveRegion(reg.id);
              const firstCity = CITIES.find((c) =>
                STATES.filter((s) => s.region === reg.id).some((s) => s.slug === c.stateSlug)
              );
              if (firstCity) setSelectedCitySlug(firstCity.slug);
            }}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wide shrink-0 transition-all ${
              activeRegion === reg.id
                ? "bg-[#192D26] text-[#F3EBDD] border border-emerald-500/40 shadow-sm"
                : "bg-[#1C201D] text-[#B9B4A8] hover:text-[#F3EBDD] hover:bg-[#20231F] border border-white/5"
            }`}
          >
            {reg.label} India
          </button>
        ))}
      </div>

      {/* Main Interactive Canvas & Detail Board */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left: Stylized Interactive Spatial Map Board */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#141715] to-[#171A18] relative">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#FAF5EB] bg-[#C85B35] px-3 py-1 rounded-full">
                {activeRegion} India Atlas
              </span>
              <span className="text-xs font-mono text-[#85867E] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#B98945]" />
                Cartographic Index
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EBDD] mb-2">
              {regionStates.length > 0
                ? regionStates.map((s) => s.name).join(" & ")
                : `${activeRegion} Corridor`}
            </h3>
            <p className="text-xs text-[#B9B4A8] max-w-lg mb-6 leading-relaxed">
              {regions.find((r) => r.id === activeRegion)?.tag}. Tap any location card to view verified micro-history, old-town street geography, and seasonal pacing advice.
            </p>

            {/* City interactive pins grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {regionCities.map((city) => {
                const isSelected = selectedCity.slug === city.slug;
                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCitySlug(city.slug)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                      isSelected
                        ? "bg-[#192D26] border-[#C85B35] shadow-lg ring-1 ring-[#C85B35]"
                        : "bg-[#1C201D] hover:bg-[#20231F] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-base font-normal text-[#F3EBDD]">
                        {city.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#D28A32] bg-[#141715] px-2 py-0.5 rounded border border-white/5">
                        {city.stateName}
                      </span>
                    </div>
                    <div className="text-xs text-[#B9B4A8] line-clamp-1 mt-1">
                      {city.tagline}
                    </div>
                    <div className="text-[11px] text-[#85867E] mt-2 flex items-center gap-1 font-mono">
                      <Sparkles className="w-3 h-3 text-[#B98945]" />
                      <span>Known for: {city.knownFor.slice(0, 2).join(", ")}</span>
                    </div>
                  </button>
                );
              })}
              {regionCities.length === 0 && (
                <div className="col-span-2 p-8 text-center bg-[#1C201D] rounded-xl border border-dashed border-white/10">
                  <p className="text-xs text-[#B9B4A8]">
                    Additional state field guides for {activeRegion} India are currently in editorial verification.
                  </p>
                  <p className="text-[11px] font-mono text-[#85867E] mt-1">
                    Explore our active regions: West, North, and South India.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#85867E] font-mono">
            <span>Verified Spatial Metadata</span>
            <Link
              href="/india"
              className="text-[#C85B35] hover:text-[#D28A32] uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
            >
              All 28 States &rarr;
            </Link>
          </div>
        </div>

        {/* Right: Selected City Editorial Showcase */}
        {selectedCity && (
          <div className="lg:col-span-5 bg-[#171A18] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="relative h-60 sm:h-64 w-full bg-[#141715]">
                <SafeImage
                  src={selectedCity.heroImage}
                  alt={selectedCity.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A18] via-[#171A18]/40 to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-widest bg-[#C85B35] px-2.5 py-0.5 rounded text-[#FAF5EB]">
                    {selectedCity.stateName}
                  </span>
                  <h4 className="font-serif text-2xl font-normal text-[#F3EBDD] mt-1.5">
                    {selectedCity.name}
                  </h4>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <p className="text-xs sm:text-sm text-[#B9B4A8] leading-relaxed">
                  {selectedCity.overview}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#141715] border border-white/5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#85867E] block mb-1">
                      Best Window
                    </span>
                    <span className="font-medium text-[#F3EBDD] line-clamp-1">
                      {selectedCity.bestTime}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#141715] border border-white/5">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-[#85867E] block mb-1">
                      Ideal Duration
                    </span>
                    <span className="font-medium text-[#F3EBDD]">
                      {selectedCity.idealDays} Days Pace
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#111312] border-t border-white/10 flex items-center justify-between">
              <Link
                href={`/india/${selectedCity.stateSlug}/${selectedCity.slug}`}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] transition-colors"
              >
                <span>Read {selectedCity.name} Field Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
