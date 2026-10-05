"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Search, X, MapPin, Compass, Utensils, BookOpen, ArrowRight } from "lucide-react";
import { travelService } from "@/services/travelService";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    if (query.trim().length > 1) {
      return travelService.search(query);
    }
    return {
      states: [],
      cities: [],
      places: [],
      food: [],
      experiences: [],
      stories: [],
    };
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const totalResults =
    results.states.length +
    results.cities.length +
    results.places.length +
    results.food.length +
    results.experiences.length +
    results.stories.length;

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-28 px-4 bg-[#090B0A]/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Search APNA TOUR Archive"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#171A18] rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-5 py-4 border-b border-white/10 bg-[#1C201D]/90">
          <Search className="w-5 h-5 text-[#C85B35] mr-3.5 shrink-0" />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where do you want to wander?"
            className="w-full bg-transparent text-[#F3EBDD] placeholder:text-[#85867E] text-base focus:outline-none font-sans"
            aria-label="Search query"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#85867E] hover:text-[#F3EBDD] mr-2 transition-colors cursor-pointer"
              aria-label="Clear search query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-[11px] px-2 py-1 rounded bg-[#20231F] text-[#B9B4A8] border border-white/5 hover:bg-[#272C26] font-mono cursor-pointer"
            aria-label="Close search"
          >
            ESC
          </button>
        </div>

        {/* Results / Default State Area */}
        <div className="max-h-[60vh] overflow-y-auto p-5 divide-y divide-white/5 scrollbar-thin">
          {query.trim().length <= 1 ? (
            <div className="py-4 px-1 space-y-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#85867E] mb-3 font-mono">
                  Curated Expeditions &amp; Field Inquiries
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Sinhagad Fort",
                    "Shaniwar Wada",
                    "Amber Fort",
                    "Hawa Mahal",
                    "Kolukkumalai Tea",
                    "Fort Kochi",
                    "Dashashwamedh Ghat",
                    "Meenakshi Amman",
                  ].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="text-xs px-3 py-1.5 rounded-full bg-[#1C201D] border border-white/5 text-[#B9B4A8] hover:border-[#C85B35]/50 hover:text-[#F3EBDD] transition-colors cursor-pointer"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#85867E] mb-3 font-mono">
                  Explore by Dimension
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <Link
                    href="/destinations"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-[#1C201D] border border-white/5 hover:border-[#C85B35]/40 text-left transition-colors group cursor-pointer"
                  >
                    <Compass className="w-4 h-4 text-[#C85B35] mb-1.5 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-[#F3EBDD]">Destinations</div>
                    <div className="text-[10px] text-[#85867E]">States &amp; Cities</div>
                  </Link>
                  <Link
                    href="/places"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-[#1C201D] border border-white/5 hover:border-emerald-500/40 text-left transition-colors group cursor-pointer"
                  >
                    <MapPin className="w-4 h-4 text-emerald-500 mb-1.5 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-[#F3EBDD]">Monuments</div>
                    <div className="text-[10px] text-[#85867E]">Forts &amp; Temples</div>
                  </Link>
                  <Link
                    href="/food"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-[#1C201D] border border-white/5 hover:border-[#B98945]/40 text-left transition-colors group cursor-pointer"
                  >
                    <Utensils className="w-4 h-4 text-[#B98945] mb-1.5 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-[#F3EBDD]">Food Trails</div>
                    <div className="text-[10px] text-[#85867E]">Regional Cuisine</div>
                  </Link>
                  <Link
                    href="/stories"
                    onClick={onClose}
                    className="p-3 rounded-xl bg-[#1C201D] border border-white/5 hover:border-amber-500/40 text-left transition-colors group cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-amber-500 mb-1.5 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-[#F3EBDD]">Field Journal</div>
                    <div className="text-[10px] text-[#85867E]">Human Stories</div>
                  </Link>
                </div>
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center">
              <Compass className="w-8 h-8 text-[#85867E] mx-auto mb-3" />
              <p className="text-sm font-medium text-[#F3EBDD]">No matching entries found in archive</p>
              <p className="text-xs text-[#85867E] mt-1 max-w-sm mx-auto">
                Try searching by state name (e.g., &quot;Maharashtra&quot;), historic dynasty, or dish name.
              </p>
            </div>
          ) : (
            <div className="py-2 space-y-4">
              {/* Places */}
              {results.places.length > 0 && (
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#85867E] mb-2 font-mono">
                    Places &amp; Heritage ({results.places.length})
                  </div>
                  <div className="space-y-1">
                    {results.places.slice(0, 4).map((place) => (
                      <button
                        key={place.id}
                        onClick={() =>
                          handleSelect(`/india/${place.stateSlug}/${place.citySlug}/${place.slug}`)
                        }
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#20231F] text-left transition-colors group border border-transparent hover:border-white/5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-[#C85B35] shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-[#F3EBDD] group-hover:text-[#C85B35] transition-colors">
                              {place.name}
                            </div>
                            <div className="text-[11px] text-[#85867E]">
                              {place.cityName}, {place.stateName} &bull; {place.category}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#85867E] group-hover:text-[#F3EBDD] transition-transform group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cities */}
              {results.cities.length > 0 && (
                <div className="pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#85867E] mb-2 font-mono">
                    Cities &amp; Towns ({results.cities.length})
                  </div>
                  <div className="space-y-1">
                    {results.cities.slice(0, 3).map((city) => (
                      <button
                        key={city.id}
                        onClick={() => handleSelect(`/india/${city.stateSlug}/${city.slug}`)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#20231F] text-left transition-colors group border border-transparent hover:border-white/5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-[#F3EBDD] group-hover:text-emerald-400">
                              {city.name}
                            </div>
                            <div className="text-[11px] text-[#85867E]">
                              {city.stateName} &bull; {city.tagline}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#85867E] group-hover:text-[#F3EBDD]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Food */}
              {results.food.length > 0 && (
                <div className="pt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#85867E] mb-2 font-mono">
                    Food &amp; Dining Trails ({results.food.length})
                  </div>
                  <div className="space-y-1">
                    {results.food.slice(0, 3).map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(`/food/${item.stateSlug}/${item.citySlug}`)}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#20231F] text-left transition-colors group border border-transparent hover:border-white/5 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <Utensils className="w-4 h-4 text-[#B98945] shrink-0" />
                          <div>
                            <div className="text-sm font-medium text-[#F3EBDD] group-hover:text-[#B98945]">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-[#85867E]">
                              {item.cityName} &bull; {item.cuisine}
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#85867E] group-hover:text-[#F3EBDD]" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
