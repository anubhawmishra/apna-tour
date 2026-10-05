"use client";

import React, { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Compass, Utensils, Sparkles, BookOpen, X, AlertCircle } from "lucide-react";
import { travelService } from "@/services/travelService";
import { PlaceCard } from "@/components/places/PlaceCard";
import { FoodCard } from "@/components/food/FoodCard";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { StoryCard } from "@/components/stories/StoryCard";
import { DestinationCard } from "@/components/destinations/DestinationCard";

export function SearchClientPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQuery);
  const [activeTab, setActiveTab] = useState<string>("All");
  const results = useMemo(() => travelService.search(query), [query]);

  const tabs = [
    { id: "All", label: "All Results" },
    { id: "Places", label: `Places (${results.places.length})` },
    { id: "Destinations", label: `Destinations (${results.states.length + results.cities.length})` },
    { id: "Food", label: `Food (${results.food.length})` },
    { id: "Experiences", label: `Experiences (${results.experiences.length})` },
    { id: "Stories", label: `Stories (${results.stories.length})` },
  ];

  const totalCount =
    results.places.length +
    results.cities.length +
    results.states.length +
    results.food.length +
    results.experiences.length +
    results.stories.length;

  return (
    <div className="space-y-8">
      {/* Search Input Bar */}
      <div className="relative max-w-2xl">
        <Search className="w-5 h-5 text-[#85867E] absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city, fort, misal, tea, monastery, or region..."
          className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-[#1C201D] border border-white/10 text-sm sm:text-base text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#85867E] hover:text-[#F3EBDD]"
            aria-label="Clear query"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide uppercase transition-all shrink-0 ${
              activeTab === tab.id
                ? "bg-[#C85B35] text-white shadow-xs"
                : "bg-[#1C201D] text-[#B9B4A8] hover:text-[#F3EBDD] hover:bg-[#20231F] border border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Results Display */}
      {query.trim().length === 0 ? (
        <div className="py-12 text-center bg-[#141715] rounded-2xl border border-white/10 space-y-3">
          <Compass className="w-8 h-8 text-[#85867E] mx-auto" />
          <p className="text-sm font-medium text-[#F3EBDD]">
            Start typing above to search verified monuments, food spots, and essays.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {["Pune", "Jaipur", "Kochi", "Sinhagad", "Munnar", "Misal"].map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="text-xs px-3 py-1 rounded-full bg-[#1C201D] border border-white/10 text-[#B9B4A8] hover:text-[#F3EBDD] hover:border-[#C85B35]"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : totalCount === 0 ? (
        <div className="py-16 text-center bg-[#141715] rounded-2xl border border-white/10 space-y-2">
          <AlertCircle className="w-8 h-8 text-[#85867E] mx-auto" />
          <h3 className="text-base font-semibold text-[#F3EBDD]">
            No results found for &ldquo;{query}&rdquo;
          </h3>
          <p className="text-xs text-[#85867E] max-w-sm mx-auto">
            Try searching for broader terms like &quot;Maharashtra&quot;, &quot;fort&quot;, &quot;tea&quot;, or &quot;temple&quot;.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {/* Places Results */}
          {(activeTab === "All" || activeTab === "Places") && results.places.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#F3EBDD] border-b border-white/10 pb-2">
                Places to Visit ({results.places.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.places.map((place) => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            </div>
          )}

          {/* Destinations Results */}
          {(activeTab === "All" || activeTab === "Destinations") &&
            (results.cities.length > 0 || results.states.length > 0) && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-[#F3EBDD] border-b border-white/10 pb-2">
                  Cities &amp; States ({results.cities.length + results.states.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.states.map((st) => (
                    <DestinationCard key={st.id} item={st} type="state" />
                  ))}
                  {results.cities.map((city) => (
                    <DestinationCard key={city.id} item={city} type="city" />
                  ))}
                </div>
              </div>
            )}

          {/* Food Results */}
          {(activeTab === "All" || activeTab === "Food") && results.food.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#F3EBDD] border-b border-white/10 pb-2">
                Food &amp; Dining Institutions ({results.food.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.food.map((f) => (
                  <FoodCard key={f.id} food={f} />
                ))}
              </div>
            </div>
          )}

          {/* Experiences Results */}
          {(activeTab === "All" || activeTab === "Experiences") &&
            results.experiences.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-medium text-[#F3EBDD] border-b border-white/10 pb-2">
                  Curated Experiences ({results.experiences.length})
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.experiences.map((exp) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                  ))}
                </div>
              </div>
            )}

          {/* Stories Results */}
          {(activeTab === "All" || activeTab === "Stories") && results.stories.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#F3EBDD] border-b border-white/10 pb-2">
                Field Journal Stories ({results.stories.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.stories.map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
