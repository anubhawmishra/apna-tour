import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { FoodCard } from "@/components/food/FoodCard";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Utensils, MapPin, ArrowRight } from "lucide-react";

interface CityFoodPageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

export async function generateMetadata({
  params,
}: CityFoodPageProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const city = travelService.getCityBySlug(stateSlug, citySlug);
  if (!city) return { title: "Food Trail Not Found" };

  return {
    title: `${city.name} Food Trail & Regional Culinary Guide`,
    description: `Iconic breakfast spots, traditional sweet houses, and must-try dishes in ${city.name}, ${city.stateName}.`,
  };
}

export default async function CityFoodPage({ params }: CityFoodPageProps) {
  const { state: stateSlug, city: citySlug } = await params;
  const city = travelService.getCityBySlug(stateSlug, citySlug);

  if (!city) {
    notFound();
  }

  const foodSpots = travelService.getFoodSpotsByCity(citySlug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      <Breadcrumb
        items={[
          { label: "Food Discovery", href: "/food" },
          { label: city.stateName, href: `/india/${city.stateSlug}` },
          { label: `${city.name} Food Trail` },
        ]}
      />

      <div className="border-b border-white/10 pb-8 space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C85B35]">
          <Utensils className="w-4 h-4" />
          <span>Local Culinary Trail &bull; {city.stateName}</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Where to Eat in {city.name}
        </h1>
        <p className="text-base text-[#B9B4A8] max-w-2xl leading-relaxed">
          The dishes and institutions that define breakfast, afternoon breaks, and evening meals in {city.name}. Zero commercial sponsorships—selected solely for taste and cultural authenticity.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h2 className="font-serif text-2xl font-medium text-[#F3EBDD]">
            Documented Institutions ({foodSpots.length})
          </h2>
          <Link
            href={`/india/${city.stateSlug}/${city.slug}`}
            className="text-xs font-semibold text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-1"
          >
            <span>View Full {city.name} City Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {foodSpots.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>

        {foodSpots.length === 0 && (
          <div className="p-12 text-center bg-[#141715] rounded-2xl border border-white/10">
            <p className="text-sm text-[#B9B4A8]">
              Additional culinary entries for {city.name} are currently in editorial field review.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
