import React from "react";
import type { Metadata } from "next";
import { travelService } from "@/services/travelService";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Curated Indian Experiences & Cultural Journeys",
  description:
    "Explore authentic subcontinental activities: dawn rowing on the sacred Ganga, mud-resist block printing in Bagru, high-elevation tea cupping in Munnar, and temple processions.",
};

export default function ExperiencesPage() {
  const experiences = travelService.getExperiences();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb items={[{ label: "Experiences" }]} />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block">
          FIELD ACTIVITIES &amp; LIVING CRAFT // CULTURAL IMMERSION
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Curated Subcontinental Experiences
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed font-sans">
          Not packaged tours, but specific cultural rituals, masterclasses with traditional craft guilds, dawn river journeys, and high forest walks that reveal the living rhythm of each region.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
}
