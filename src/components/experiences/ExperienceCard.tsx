import React from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { Clock, Compass, ArrowRight } from "lucide-react";
import { ExperienceData } from "@/types";

interface ExperienceCardProps {
  experience: ExperienceData;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#1C201D] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60">
      <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-[#141715]">
        <SafeImage
          src={experience.heroImage}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C201D] via-[#1C201D]/30 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-[#111312]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#F3EBDD]">
            {experience.theme}
          </span>
          {experience.difficulty && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#111312]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D28A32]">
              {experience.difficulty}
            </span>
          )}
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#B9B4A8]">
            {experience.cityName ? `${experience.cityName}, ` : ""}{experience.stateName}
          </div>
          <h3 className="font-serif text-lg font-normal leading-snug text-[#F3EBDD] group-hover:text-white transition-colors mt-0.5">
            {experience.title}
          </h3>
        </div>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <p className="text-xs text-[#B9B4A8] line-clamp-2 leading-relaxed">
          {experience.summary}
        </p>

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#85867E]">
          <span className="flex items-center gap-1.5 font-mono">
            <Clock className="w-3.5 h-3.5 text-[#B98945]" />
            {experience.duration}
          </span>
          <span className="text-[#C85B35] font-mono capitalize">
            Best in {experience.seasonRecommended.toLowerCase().replace("_", " ")}
          </span>
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
          <Link
            href="/experiences"
            className="flex-1 flex items-center justify-between font-mono uppercase text-xs tracking-wider text-[#C85B35] group-hover:text-[#D28A32] transition-colors"
          >
            <span>Read Practical Field Tips</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
