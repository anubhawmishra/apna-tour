import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass, Sparkles, MapPin, Calendar, Clock, Utensils, Heart } from "lucide-react";
import { travelService } from "@/services/travelService";
import { EditorialHero } from "@/components/hero/EditorialHero";
import { InteractiveIndiaMap } from "@/components/ui/InteractiveIndiaMap";
import { DestinationCard } from "@/components/destinations/DestinationCard";
import { PlaceCard } from "@/components/places/PlaceCard";
import { FoodCard } from "@/components/food/FoodCard";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { StoryCard } from "@/components/stories/StoryCard";

export default function HomePage() {
  const states = travelService.getStates();
  const featuredPlaces = travelService.getFeaturedPlaces();
  const hiddenGems = travelService.getHiddenGems();
  const foodSpots = travelService.getFoodSpots();
  const experiences = travelService.getFeaturedExperiences();
  const stories = travelService.getStories();
  const curatedItineraries = travelService.getCuratedItineraries();

  const featuredStory = stories.find((s) => s.isFeatured) || stories[0];
  const secondaryStories = stories.filter((s) => s.id !== featuredStory.id).slice(0, 3);

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* 01: Hero Section */}
      <EditorialHero />

      {/* 02: Explore India by Region (Interactive Spatial Canvas) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35] block mb-2">
              SECTION 02 // CARTOGRAPHIC ARCHIVE
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
              Explore India by Region
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#B9B4A8] max-w-md mt-3 md:mt-0 leading-relaxed font-sans">
            Filter across North, South, West, Central, and Northeast to uncover regional fortress architecture, coastal trails, and monastic retreats.
          </p>
        </div>

        <InteractiveIndiaMap />
      </section>

      {/* 03: Featured Destinations (Asymmetric Editorial Composition) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35] block mb-2">
              SECTION 03 // STORIED REGIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
              Featured States &amp; Citadels
            </h2>
          </div>
          <Link
            href="/india"
            className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-2 mt-3 md:mt-0 transition-colors"
          >
            <span>Explore All 28 States</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetrical 3-card editorial layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <DestinationCard item={states[0]} type="state" featured={true} />
          <div className="md:col-span-1 space-y-6 sm:space-y-8 flex flex-col justify-between">
            <DestinationCard item={states[1]} type="state" />
            <DestinationCard item={states[2]} type="state" />
          </div>
        </div>
      </section>

      {/* 04: Hidden India — Off-the-Beaten-Path Heritage */}
      <section className="bg-[#141715] py-20 sm:py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#B98945] block mb-2">
                SECTION 04 // HIDDEN INDIA
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
                Places worth the quiet journey
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#B9B4A8] max-w-md mt-3 md:mt-0 leading-relaxed font-sans">
              Quiet gravity-fed palace water gardens, cloud-level tea factories from the 1930s, and artisan institutes tucked beneath cedar canopies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hiddenGems.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* 05: Food Journeys — "India tastes different everywhere" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35] block mb-2">
              SECTION 05 // CULINARY HEARTHS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
              India tastes different everywhere
            </h2>
          </div>
          <Link
            href="/food"
            className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-2 mt-3 md:mt-0 transition-colors"
          >
            <span>Explore Regional Food Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodSpots.slice(0, 4).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>

      {/* 06: Curated Field Experiences */}
      <section className="bg-[#141715] py-20 sm:py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#D28A32] block mb-2">
                SECTION 06 // LIVING TRADITIONS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
                Curated Field Experiences
              </h2>
            </div>
            <Link
              href="/experiences"
              className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-2 mt-3 md:mt-0 transition-colors"
            >
              <span>Browse All Experiences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {experiences.slice(0, 3).map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      {/* 07: Practical Weekend Escapes from Major Hubs (Deep Forest Green Accent) */}
      <section className="bg-[#192D26] py-20 sm:py-24 border-y border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#D28A32] block mb-2">
              SECTION 07 // PRACTICAL ESCAPES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
              Weekend Escapes from Major Hubs
            </h2>
            <p className="text-xs sm:text-sm text-[#B9B4A8] mt-3 leading-relaxed">
              Calculated for 36-to-48 hour getaways by road or express train from key metropolitan centers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                from: "Pune",
                dest: "Sinhagad & Panshet Backwaters",
                distance: "32 km &bull; 1.5 hrs",
                note: "Monsoon mist, red basalt trails, and rustic village pithla-bhakri hearths.",
                href: "/india/maharashtra/pune/sinhagad-fort",
              },
              {
                from: "Mumbai",
                dest: "Ballard Estate & Elephanta Caves",
                distance: "Catamaran &bull; 1 hr",
                note: "6th-century rock-cut Shiva trimurti carvings and vintage Irani tea institutions.",
                href: "/india/maharashtra/mumbai",
              },
              {
                from: "Jaipur",
                dest: "Bagru Craft Village & Amber",
                distance: "30 km &bull; 45 mins",
                note: "Living natural dye indigo vats, Chippa woodblock artisans, and stepwells.",
                href: "/india/rajasthan/jaipur",
              },
              {
                from: "Kochi",
                dest: "Munnar Kannan Devan Tea Hills",
                distance: "128 km &bull; 4 hrs",
                note: "Winding ghat climbs, cold mountain air, and high orthodox tea withering factory.",
                href: "/india/kerala/munnar",
              },
            ].map((escape) => (
              <Link
                key={escape.from}
                href={escape.href}
                className="p-6 rounded-2xl bg-[#141715] border border-white/10 hover:border-[#C85B35] hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#D28A32] mb-3">
                    <span className="uppercase tracking-wider">From {escape.from}</span>
                    <span
                      dangerouslySetInnerHTML={{ __html: escape.distance }}
                      className="text-[10px] text-[#85867E]"
                    />
                  </div>
                  <h4 className="font-serif text-lg font-normal text-[#F3EBDD] group-hover:text-white transition-colors">
                    {escape.dest}
                  </h4>
                  <p className="text-xs text-[#B9B4A8] mt-2.5 leading-relaxed">
                    {escape.note}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#C85B35] group-hover:text-[#D28A32]">
                  <span>Route Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 08: Editorial Journal / Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35] block mb-2">
              SECTION 08 // FIELD ESSAYS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#F3EBDD]">
              Essays from the Subcontinent
            </h2>
          </div>
          <Link
            href="/stories"
            className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-2 mt-3 md:mt-0 transition-colors"
          >
            <span>Read All 10 Field Stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured Story Hero Card */}
        <div className="space-y-8">
          <StoryCard story={featuredStory} featured={true} />

          {/* Secondary Story Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {secondaryStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 09: Trip Planning / Itinerary Builder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#171A18] to-[#141715] border border-white/10 text-[#F3EBDD] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-[11px] uppercase font-mono tracking-widest text-[#C85B35]">
              TRIP ARCHITECTURE // CUSTOM PACING
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[#F3EBDD]">
              Found the place. <br />
              <span className="font-serif italic font-normal text-[#D28A32]">
                Now plan the days.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#B9B4A8] leading-relaxed">
              Use our interactive itinerary builder to map morning, afternoon, and evening blocks. Add verified heritage walks, pacing notes, and regional dishes directly into a personalized schedule.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/itineraries"
                className="px-6 py-3.5 rounded-xl bg-[#C85B35] hover:bg-[#D28A32] text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shadow-md inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Build an Itinerary</span>
              </Link>
              <Link
                href="/itineraries#curated"
                className="px-5 py-3.5 rounded-xl bg-[#1C201D] hover:bg-[#20231F] text-[#F3EBDD] text-xs font-mono uppercase tracking-wider transition-colors border border-white/10 inline-flex items-center gap-2"
              >
                <span>Browse 5 Curated Routes</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Background Decorative Graphic */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
            <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C85B35] via-transparent to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}
