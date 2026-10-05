import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PlaceCard } from "@/components/places/PlaceCard";
import { FoodCard } from "@/components/food/FoodCard";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { MapPin, Calendar, Clock, Sparkles, Utensils, ArrowRight } from "lucide-react";

interface CityPageProps {
  params: Promise<{
    state: string;
    city: string;
  }>;
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug } = await params;
  const city = travelService.getCityBySlug(stateSlug, citySlug);
  if (!city) return { title: "City Not Found" };

  return {
    title: `${city.name}, ${city.stateName} — City Travel Guide`,
    description: city.overview.slice(0, 160),
    openGraph: {
      title: `${city.name} Field Guide — APNA TOUR`,
      description: city.tagline,
      images: [{ url: city.heroImage, alt: city.name }],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { state: stateSlug, city: citySlug } = await params;
  const city = travelService.getCityBySlug(stateSlug, citySlug);

  if (!city) {
    notFound();
  }

  const state = travelService.getStateBySlug(stateSlug);
  const places = travelService.getPlacesByCity(citySlug);
  const foodSpots = travelService.getFoodSpotsByCity(citySlug);
  const experiences = travelService.getExperiencesByCity(citySlug);

  // Schema.org TouristDestination
  const touristDestinationSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: city.name,
    description: city.overview,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: city.stateName,
    },
    image: city.heroImage,
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationSchema) }}
      />

      {/* Hero */}
      <div className="relative h-[400px] sm:h-[480px] w-full bg-charcoal-900 text-white overflow-hidden">
        <SafeImage
          src={city.heroImage}
          alt={city.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 sm:py-12">
          <Breadcrumb
            items={[
              { label: "India", href: "/india" },
              { label: city.stateName, href: `/india/${city.stateSlug}` },
              { label: city.name },
            ]}
            className="text-stone-300"
          />

          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-terracotta-400 bg-charcoal-900/80 px-2.5 py-1 rounded">
              City Field Guide &bull; {city.stateName}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white">
              {city.name}
            </h1>
            <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed">
              {city.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-charcoal-900/80 border border-charcoal-700 text-stone-300">
              Best Time: {city.bestTime.split(";")[0]}
            </span>
            <span className="px-3 py-1 rounded-full bg-charcoal-900/80 border border-charcoal-700 text-stone-300">
              Ideal Pace: {city.idealDays} Days
            </span>
            <span className="px-3 py-1 rounded-full bg-charcoal-900/80 border border-charcoal-700 text-stone-300">
              {places.length} Documented Places
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* City Overview & Known For */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C85B35]">
              Historical &amp; Cultural Context
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
              Understanding {city.name}
            </h2>
            <p className="text-sm sm:text-base text-[#B9B4A8] leading-relaxed">
              {city.overview}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#1C201D] p-5 rounded-2xl border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-semibold text-[#F3EBDD] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C85B35]" />
              <span>Known For</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {city.knownFor.map((k) => (
                <span
                  key={k}
                  className="text-xs px-2.5 py-1 rounded-md bg-[#141715] border border-white/10 text-[#F3EBDD] font-medium"
                >
                  {k}
                </span>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <Link
                href="/itineraries"
                className="text-xs font-semibold text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-1"
              >
                <span>Plan a {city.name} Itinerary</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Places to Visit */}
        {places.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                  Forts, Palaces &amp; Sanctuaries
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                  Places to Visit in {city.name}
                </h2>
              </div>
              <span className="text-xs text-[#85867E]">{places.length} places verified</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {places.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          </div>
        )}

        {/* Regional Food & Iconic Haunts */}
        {foodSpots.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                  Culinary Heritage
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                  Where to Eat in {city.name}
                </h2>
              </div>
              <Link
                href={`/food/${city.stateSlug}/${city.slug}`}
                className="text-xs font-semibold text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-1"
              >
                <span>All {city.name} Food Trails</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodSpots.map((f) => (
                <FoodCard key={f.id} food={f} />
              ))}
            </div>
          </div>
        )}

        {/* Curated Field Experiences in City */}
        {experiences.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                Things to Do
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                Curated Walks &amp; Experiences in {city.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        )}

        {/* Stays & Accommodations Architecture Note */}
        <div className="bg-[#141715] p-6 sm:p-8 rounded-2xl border border-white/10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs uppercase font-mono tracking-wider text-[#85867E] font-semibold">
              Heritage Stays &amp; Sustainable Lodging
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F3EBDD]">
              Where to Stay in {city.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#B9B4A8] leading-relaxed">
              We favor restored residential wadas, ancestral heritage havelis, tea plantation bungalows, and licensed homestays over generic international chain hotels. Verified booking recommendations and direct hosts are verified under our ethical partnership guidelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
