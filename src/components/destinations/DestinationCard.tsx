import React from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { ArrowRight, MapPin } from "lucide-react";
import { CityData, StateData } from "@/types";

interface DestinationCardProps {
  item: CityData | StateData;
  type: "state" | "city";
  featured?: boolean;
}

export function DestinationCard({ item, type, featured = false }: DestinationCardProps) {
  const isState = type === "state";
  const stateItem = isState ? (item as StateData) : null;
  const cityItem = !isState ? (item as CityData) : null;

  const href = isState
    ? `/india/${stateItem!.slug}`
    : `/india/${cityItem!.stateSlug}/${cityItem!.slug}`;

  const title = item.name;
  const locationLabel = isState ? `${stateItem!.region} REGION` : cityItem!.stateName.toUpperCase();

  return (
    <Link
      href={href}
      className={`group relative flex flex-col rounded-2xl overflow-hidden bg-[#1C201D] border border-white/10 transition-all duration-500 hover:border-white/25 cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2 min-h-[460px]" : "min-h-[380px]"
      }`}
    >
      {/* Large Image Background */}
      <div className="absolute inset-0 overflow-hidden bg-[#141715]">
        <SafeImage
          src={item.heroImage}
          alt={title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111312] via-[#111312]/50 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
      </div>

      {/* Top Location Pill */}
      <div className="relative z-10 p-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111312]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-widest text-[#B9B4A8]">
          <MapPin className="w-3 h-3 text-[#C85B35]" />
          <span>{locationLabel}</span>
        </span>
      </div>

      {/* Bottom Editorial Content Area */}
      <div className="relative z-10 mt-auto p-6 sm:p-7 space-y-2.5 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="text-[11px] font-mono tracking-widest uppercase text-[#D28A32]">
          {isState ? `${stateItem!.idealDuration} PACING` : `${cityItem!.idealDays} DAYS PACING`}
        </div>

        <h3
          className={`font-serif font-light text-[#F3EBDD] leading-tight ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-[#B9B4A8] line-clamp-2 leading-relaxed font-light">
          {item.tagline}
        </p>

        {/* Arrow Reveal on Hover */}
        <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C85B35] group-hover:text-[#DA6A42]">
          <span>{isState ? "Explore State Portal" : "Enter City Guide"}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </div>
      </div>
    </Link>
  );
}
