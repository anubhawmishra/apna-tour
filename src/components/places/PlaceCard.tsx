import React from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { Clock, ArrowRight, ShieldCheck, Camera } from "lucide-react";
import { PlaceData } from "@/types";
import { SaveButton } from "@/components/ui/SaveButton";

interface PlaceCardProps {
  place: PlaceData;
  featured?: boolean;
}

export function PlaceCard({ place, featured = false }: PlaceCardProps) {
  const href = `/india/${place.stateSlug}/${place.citySlug}/${place.slug}`;

  return (
    <div
      className={`group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#1C201D] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Top Image Container */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-[#141715]">
        <SafeImage
          src={place.heroImage}
          alt={place.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C201D] via-[#1C201D]/30 to-black/20" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#111312]/80 backdrop-blur-md text-[10px] font-medium uppercase tracking-wider text-[#F3EBDD] border border-white/10">
              {place.category}
            </span>
            {place.images && place.images.length > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-[#111312]/80 backdrop-blur-md text-[10px] font-mono text-[#B9B4A8] border border-white/10 flex items-center gap-1.5">
                <Camera className="w-3 h-3 text-[#C85B35]" />
                <span>{place.images.length} Photos</span>
              </span>
            )}
          </div>
          <SaveButton itemId={place.id} itemType="place" />
        </div>

        {/* Bottom City & State Label on Image */}
        <div className="absolute bottom-3.5 left-4 right-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#B9B4A8]/90">
            {place.cityName}, {place.stateName}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F3EBDD] leading-snug group-hover:text-white transition-colors duration-300">
            {place.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs text-[#B9B4A8] line-clamp-2 leading-relaxed">
          {place.tagline}
        </p>

        {/* Verified Entry Facts Badge */}
        <div className="space-y-2 pt-2 border-t border-white/5">
          <div className="flex items-center gap-2 text-xs text-[#85867E]">
            <Clock className="w-3.5 h-3.5 text-[#B98945] shrink-0" />
            <span className="truncate">{place.timingsVerified}</span>
          </div>
          <div className="flex items-center gap-2 text-emerald-300 bg-emerald-950/40 border border-emerald-800/30 px-2.5 py-1.5 rounded-lg text-[11px] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="truncate">Verified: {place.entryFeeNote}</span>
          </div>
        </div>

        {/* Link Footer */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between">
          <Link
            href={href}
            className="flex-1 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#C85B35] group-hover:text-[#D28A32] transition-colors"
          >
            <span>Explore Place Guide</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
