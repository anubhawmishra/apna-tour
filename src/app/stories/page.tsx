import React from "react";
import type { Metadata } from "next";
import { travelService } from "@/services/travelService";
import { StoryCard } from "@/components/stories/StoryCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Field Journal & Travel Essays — APNA TOUR",
  description:
    "Long-form editorial essays, regional history chronicles, and slow travel narratives from across the Indian subcontinent.",
};

export default function StoriesPage() {
  const stories = travelService.getStories();
  const featured = stories.find((s) => s.isFeatured) || stories[0];
  const remaining = stories.filter((s) => s.id !== featured.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: "Stories" }]} />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block">
          THE FIELD JOURNAL // SUBCONTINENTAL ESSAYS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Essays &amp; Chronicles from India
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed font-sans">
          Reflective travel writing focused on architectural nuance, craft communities, dawn river rites, and the quiet dignity of slow overland travel.
        </p>
      </div>

      {/* Featured Story */}
      <StoryCard story={featured} featured={true} />

      {/* Remaining Stories Grid */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
            All Field Dispatches ({stories.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {remaining.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </div>
  );
}
