import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { FoodCard } from "@/components/food/FoodCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Utensils, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Food Discovery & Regional Cuisine Trails in India",
  description:
    "Explore iconic regional food spots across India: century-old Irani bakeries, fiery Maharashtrian misal joints, street kachoris, and temple dining.",
};

export default function FoodPage() {
  const foodSpots = travelService.getFoodSpots();

  const citiesWithFood = [
    { name: "Pune", state: "maharashtra", note: "Puneri Misal & Bakarwadi" },
    { name: "Mumbai", state: "maharashtra", note: "Parsi Berry Pulao & Irani Chai" },
    { name: "Jaipur", state: "rajasthan", note: "Pyaaz Kachori & Honeycomb Ghevar" },
    { name: "Kochi", state: "kerala", note: "Malabar Seafood & Courtyard Cafes" },
    { name: "Munnar", state: "kerala", note: "Flaky Parotta & Cardamom Tea" },
    { name: "Shimla", state: "himachal-pradesh", note: "Mountain Apple Tarts & Crepes" },
    { name: "Madurai", state: "tamil-nadu", note: "Ghee Podi Idli & Jigarthanda" },
    { name: "Varanasi", state: "uttar-pradesh", note: "Claypot Lassi & Winter Malaiyo" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: "Food Discovery" }]} />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block">
          CULINARY GEOGRAPHY // HEARTHS &amp; HERITAGE INSTITUTIONS
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          India Tastes Different Everywhere
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed font-sans">
          Indian gastronomy is defined by geography, water minerals, wood fires, and centuries of community specialization. Discover verified local institutions and must-try regional dishes.
        </p>
      </div>

      {/* Featured City Food Trail Links */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#141715] border border-white/10 shadow-xl space-y-5">
        <div className="flex items-center gap-2">
          <Utensils className="w-4 h-4 text-[#C85B35]" />
          <h2 className="font-serif text-xl sm:text-2xl font-light text-[#F3EBDD]">
            Browse by City Food Trail
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs">
          {citiesWithFood.map((c) => (
            <Link
              key={c.name}
              href={`/food/${c.state}/${c.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="p-3.5 rounded-xl bg-[#1C201D] border border-white/5 hover:border-[#C85B35] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="font-medium text-[#F3EBDD] group-hover:text-[#D28A32] transition-colors">
                {c.name} Food Trail
              </div>
              <div className="text-[11px] text-[#85867E] mt-1 font-sans">{c.note}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Verified Spots Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
            All Verified Heritage Food Spots ({foodSpots.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {foodSpots.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </div>
    </div>
  );
}
