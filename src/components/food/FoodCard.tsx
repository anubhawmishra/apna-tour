import React from "react";
import Link from "next/link";
import { SafeImage } from "@/components/ui/SafeImage";
import { Utensils, MapPin, ArrowRight } from "lucide-react";
import { FoodSpotData } from "@/types";

interface FoodCardProps {
  food: FoodSpotData;
}

export function FoodCard({ food }: FoodCardProps) {
  const priceIndicator =
    food.priceTier === "BUDGET"
      ? "₹ (Under ₹150)"
      : food.priceTier === "MODERATE"
      ? "₹₹ (₹150–₹500)"
      : "₹₹₹ (Premium)";

  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#1C201D] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60">
      {/* Food Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#141715]">
        <SafeImage
          src={food.heroImage}
          alt={food.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C201D] via-[#1C201D]/40 to-transparent" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-0.5 rounded-full bg-[#111312]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-[#F3EBDD]">
            {food.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#111312]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#D28A32]">
            {priceIndicator}
          </span>
        </div>

        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-[10px] uppercase font-mono tracking-wider text-[#B9B4A8] flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-[#C85B35]" />
            <span>{food.neighborhood}, {food.cityName}</span>
          </div>
          <h3 className="font-serif text-lg font-normal leading-tight text-[#F3EBDD] group-hover:text-white transition-colors mt-0.5">
            {food.name}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <p className="text-xs text-[#B9B4A8] line-clamp-2 leading-relaxed">
          {food.description}
        </p>

        {/* Must Try List */}
        <div className="pt-2 border-t border-white/5 space-y-1.5">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#85867E]">
            Must Try Dishes:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {food.mustTryDishes.map((dish) => (
              <span
                key={dish}
                className="text-[10px] px-2 py-0.5 rounded bg-[#141715] text-[#F3EBDD] border border-white/5 font-mono"
              >
                {dish}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
          <Link
            href={`/food/${food.stateSlug}/${food.citySlug}`}
            className="flex-1 flex items-center justify-between font-mono uppercase text-xs tracking-wider text-[#C85B35] group-hover:text-[#D28A32] transition-colors"
          >
            <span>Explore {food.cityName} Food Trail</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
