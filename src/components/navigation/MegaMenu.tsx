import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { STATES } from "@/data/travelData";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-[#141715]/98 border-b border-white/10 shadow-2xl backdrop-blur-md transition-all duration-200 z-40"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          {/* Column 1: States Spotlight */}
          <div className="col-span-4 border-r border-white/5 pr-8">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-[#85867E] mb-4 flex items-center justify-between font-mono">
              <span>Featured States</span>
              <Link
                href="/india"
                onClick={onClose}
                className="text-[#C85B35] hover:text-[#DA6A42] text-xs normal-case font-medium inline-flex items-center gap-1 cursor-pointer"
              >
                All states <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-3">
              {STATES.slice(0, 4).map((state) => (
                <Link
                  key={state.id}
                  href={`/india/${state.slug}`}
                  onClick={onClose}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-[#1C201D] transition-colors group cursor-pointer"
                >
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#20231F]">
                    <Image
                      src={state.heroImage}
                      alt={state.name}
                      fill
                      sizes="56px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-serif font-medium text-[#F3EBDD] group-hover:text-[#C85B35] transition-colors">
                      {state.name}
                    </div>
                    <div className="text-xs text-[#85867E] line-clamp-1 mt-0.5">
                      {state.tagline}
                    </div>
                    <div className="text-[10px] text-[#B98945] font-mono uppercase tracking-wide mt-1">
                      {state.region} Region &bull; {state.idealDuration}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Popular Discovery Routes */}
          <div className="col-span-4 border-r border-white/5 pr-8">
            <div className="text-[11px] font-semibold tracking-wider uppercase text-[#85867E] mb-4 font-mono">
              Explore by City
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {[
                { name: "Pune", state: "maharashtra", note: "Peths & Sahyadri Forts" },
                { name: "Mumbai", state: "maharashtra", note: "Art Deco & Waterfront" },
                { name: "Jaipur", state: "rajasthan", note: "Amber Fort & Crafts" },
                { name: "Udaipur", state: "rajasthan", note: "Lake Pichola & Mewar" },
                { name: "Kochi", state: "kerala", note: "Spice Wharfs & Jew Town" },
                { name: "Munnar", state: "kerala", note: "Kolukkumalai Tea" },
                { name: "Shimla", state: "himachal-pradesh", note: "Colonial Ridge & Pines" },
                { name: "Dharamshala", state: "himachal-pradesh", note: "Tibetan Monasteries" },
                { name: "Madurai", state: "tamil-nadu", note: "Living Temple Wonders" },
                { name: "Varanasi", state: "uttar-pradesh", note: "Dawn Boat & Ancient Ghats" },
              ].map((c) => (
                <Link
                  key={c.name}
                  href={`/india/${c.state}/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[#1C201D] transition-colors group cursor-pointer"
                >
                  <div className="font-medium text-[#F3EBDD] group-hover:text-[#C85B35] flex items-center gap-1.5 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#85867E] group-hover:text-[#C85B35]" />
                    <span>{c.name}</span>
                  </div>
                  <div className="text-[10px] text-[#85867E] pl-5">{c.note}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Editorial Focus Banner */}
          <div className="col-span-4 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-semibold tracking-wider uppercase text-[#85867E] mb-4 font-mono">
                Editorial Spotlight
              </div>
              <div className="relative rounded-xl overflow-hidden bg-[#1C201D] text-white p-5 group border border-white/5">
                <Image
                  src="/images/places/dashashwamedh-ghat/hero.jpg"
                  alt="Varanasi Ganga Ghats"
                  fill
                  className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="relative z-10 space-y-2">
                  <span className="inline-block text-[10px] uppercase tracking-wider font-semibold bg-[#C85B35] px-2 py-0.5 rounded text-[#FAF5EB]">
                    Featured Journal
                  </span>
                  <h4 className="font-serif text-lg font-normal leading-snug text-[#F3EBDD]">
                    Clay Cups &amp; Slow Currents: 24 Hours on the Ghats of Banaras
                  </h4>
                  <p className="text-xs text-[#B9B4A8] line-clamp-2">
                    In the world&apos;s oldest living city, eternity is not an abstraction—it is the morning mist on water and the sound of wooden oars.
                  </p>
                  <Link
                    href="/stories/clay-cups-slow-currents-varanasi"
                    onClick={onClose}
                    className="inline-flex items-center gap-1.5 text-xs text-[#FAF5EB] hover:text-[#C85B35] font-medium pt-2 transition-colors cursor-pointer"
                  >
                    Read Field Story &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#B9B4A8]">
              <span className="font-serif italic text-[#85867E]">&ldquo;India, beyond the obvious.&rdquo;</span>
              <Link
                href="/itineraries"
                onClick={onClose}
                className="text-[#C85B35] hover:text-[#DA6A42] font-medium cursor-pointer"
              >
                Create bespoke itinerary &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
