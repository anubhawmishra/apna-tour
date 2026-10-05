import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SearchClientPage } from "./SearchClientPage";

export const metadata: Metadata = {
  title: "Search Travel Discovery — APNA TOUR",
  description:
    "Search across verified places, regional food institutions, cultural experiences, and editorial field stories across India.",
};

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-20">
      <Breadcrumb items={[{ label: "Search" }]} />

      <div className="border-b border-white/10 pb-6 space-y-2">
        <span className="text-xs uppercase tracking-widest font-semibold text-[#C85B35]">
          Discovery Engine
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-light text-[#F3EBDD]">
          Search APNA TOUR
        </h1>
        <p className="text-xs sm:text-sm text-[#85867E] max-w-xl">
          Query across monuments, regional breakfast trails, mountain walks, and subcontinental essays.
        </p>
      </div>

      <Suspense fallback={<div className="py-12 text-center text-xs text-[#85867E]">Loading search engine...</div>}>
        <SearchClientPage />
      </Suspense>
    </div>
  );
}
