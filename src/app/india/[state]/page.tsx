import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { SafeImage } from "@/components/ui/SafeImage";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { PlaceCard } from "@/components/places/PlaceCard";
import { FoodCard } from "@/components/food/FoodCard";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { StoryCard } from "@/components/stories/StoryCard";
import { MapPin, Calendar, Clock, CheckCircle, HelpCircle, ArrowRight } from "lucide-react";

interface StatePageProps {
  params: Promise<{
    state: string;
  }>;
}

export async function generateMetadata({
  params,
}: StatePageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = travelService.getStateBySlug(stateSlug);
  if (!state) return { title: "State Not Found" };

  return {
    title: `${state.name} Travel Discovery & Field Guide`,
    description: state.overview.slice(0, 160),
    openGraph: {
      title: `${state.name} Travel Guide — APNA TOUR`,
      description: state.tagline,
      images: [{ url: state.heroImage, alt: state.name }],
    },
  };
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const state = travelService.getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const cities = travelService.getCitiesByState(stateSlug);
  const places = travelService.getPlacesByState(stateSlug);
  const foodSpots = travelService.getFoodSpotsByState(stateSlug);
  const experiences = travelService.getExperiencesByState(stateSlug);
  const stories = travelService.getStoriesByState(stateSlug);

  // FAQ Schema
  const faqSchema = state.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: state.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Banner */}
      <div className="relative h-[420px] sm:h-[500px] w-full bg-charcoal-900 text-white overflow-hidden">
        <SafeImage
          src={state.heroImage}
          alt={state.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8 sm:py-12">
          <Breadcrumb
            items={[
              { label: "India", href: "/india" },
              { label: state.name },
            ]}
            className="text-stone-300"
          />

          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase font-mono tracking-widest text-terracotta-400 bg-charcoal-900/80 px-2.5 py-1 rounded">
              {state.region} India &bull; Capital: {state.capital}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white">
              {state.name}
            </h1>
            <p className="text-base sm:text-xl text-stone-200 font-light leading-relaxed">
              {state.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg bg-charcoal-900/85 backdrop-blur-md p-3 rounded-xl border border-charcoal-700 text-xs">
            <div>
              <span className="text-[10px] text-charcoal-400 uppercase font-mono block">
                Best Window
              </span>
              <span className="font-medium text-stone-200">{state.bestTimeToVisit.split(".")[0]}</span>
            </div>
            <div>
              <span className="text-[10px] text-charcoal-400 uppercase font-mono block">
                Ideal Pace
              </span>
              <span className="font-medium text-stone-200">{state.idealDuration}</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-[10px] text-charcoal-400 uppercase font-mono block">
                Active Field Guides
              </span>
              <span className="font-medium text-stone-200">{cities.length} Cities Curated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Overview & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C85B35]">
              Overview
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
              A Living Subcontinental Landscape
            </h2>
            <p className="text-sm sm:text-base text-[#B9B4A8] leading-relaxed">
              {state.overview}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#1C201D] p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#F3EBDD]">
              State Key Highlights
            </h3>
            <ul className="space-y-2.5 text-xs text-[#B9B4A8]">
              {state.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#C85B35] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cities */}
        {cities.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                  Urban Centers &amp; Hill Stations
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                  Featured Cities in {state.name}
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {cities.map((city) => (
                <DestinationCard key={city.id} item={city} type="city" />
              ))}
            </div>
          </div>
        )}

        {/* Places */}
        {places.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                  Heritage &amp; Landscapes
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                  Places to Visit in {state.name}
                </h2>
              </div>
              <span className="text-xs text-[#85867E]">{places.length} Places</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {places.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          </div>
        )}

        {/* Food */}
        {foodSpots.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                Regional Gastronomy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                Iconic Food Spots in {state.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodSpots.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          </div>
        )}

        {/* Experiences */}
        {experiences.length > 0 && (
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-wider text-[#C85B35] font-semibold block">
                Field Activities
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                Signature Experiences
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>
        )}

        {/* Travel Tips & Advice */}
        {state.travelTips.length > 0 && (
          <div className="bg-[#141715] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F3EBDD]">
              Practical Travel Advice for {state.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-[#B9B4A8]">
              {state.travelTips.map((tip, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#1C201D] border border-white/10 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase text-[#C85B35] font-semibold">
                    Tip #{i + 1}
                  </span>
                  <p className="leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs */}
        {state.faqs && state.faqs.length > 0 && (
          <div className="space-y-4 max-w-3xl">
            <h3 className="font-serif text-2xl font-light text-[#F3EBDD] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#C85B35]" />
              <span>Frequently Asked Questions</span>
            </h3>
            <div className="space-y-3">
              {state.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="p-4 rounded-xl bg-[#1C201D] border border-white/10 group cursor-pointer"
                >
                  <summary className="font-semibold text-sm text-[#F3EBDD] list-none flex items-center justify-between">
                    <span>{faq.question}</span>
                    <span className="text-[#C85B35] font-mono text-sm">+</span>
                  </summary>
                  <p className="text-xs sm:text-sm text-[#B9B4A8] mt-2.5 leading-relaxed pt-2 border-t border-white/10">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
