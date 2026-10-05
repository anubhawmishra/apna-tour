import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { travelService } from "@/services/travelService";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SaveButton } from "@/components/ui/SaveButton";
import { ShareModal } from "@/components/ui/ShareModal";
import { PlaceCard } from "@/components/places/PlaceCard";
import { PlacePhotoGallery } from "@/components/places/PlacePhotoGallery";
import { TravelEnquiryForm } from "@/components/forms/TravelEnquiryForm";
import {
  Clock,
  Ticket,
  Sun,
  Hourglass,
  Navigation,
  Accessibility,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Sparkles,
  BookOpen,
  Calendar,
  Compass,
  Footprints,
  Car,
  Lightbulb,
  UtensilsCrossed,
  HelpCircle,
} from "lucide-react";

interface PlacePageProps {
  params: Promise<{
    state: string;
    city: string;
    place: string;
  }>;
}

export async function generateMetadata({
  params,
}: PlacePageProps): Promise<Metadata> {
  const { state: stateSlug, city: citySlug, place: placeSlug } = await params;
  const place = travelService.getPlaceBySlug(stateSlug, citySlug, placeSlug);
  if (!place) return { title: "Place Not Found" };

  return {
    title: `${place.name} — Visiting Guide, History & Photo Gallery (${place.cityName}) | APNA TOUR`,
    description: place.description.slice(0, 160),
    openGraph: {
      title: `${place.name} — APNA TOUR Field Guide`,
      description: place.tagline,
      images: [{ url: place.heroImage, alt: place.name }],
    },
  };
}

export default async function PlacePage({ params }: PlacePageProps) {
  const { state: stateSlug, city: citySlug, place: placeSlug } = await params;
  const place = travelService.getPlaceBySlug(stateSlug, citySlug, placeSlug);

  if (!place) {
    notFound();
  }

  const nearbyPlaces = travelService
    .getPlacesByCity(place.citySlug)
    .filter((p) => p.id !== place.id);

  const cityFoodSpots = travelService
    .getFoodSpotsByCity(place.citySlug)
    .slice(0, 2);

  const cityExperiences = travelService
    .getExperiencesByCity(place.citySlug)
    .slice(0, 2);

  // Schema.org TouristAttraction with full gallery & metadata
  const attractionImages = place.images && place.images.length > 0
    ? place.images.map((img) => img.url)
    : [place.heroImage, ...(place.galleryImages || [])];

  const attractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: place.name,
    description: place.about || place.description,
    image: attractionImages,
    touristType: place.category,
    isAccessibleForFree: place.entryFeeNote.toLowerCase().includes("free"),
    publicAccess: true,
    address: {
      "@type": "PostalAddress",
      addressLocality: place.cityName,
      addressRegion: place.stateName,
      addressCountry: "India",
    },
  };

  return (
    <div className="space-y-12 sm:space-y-16 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attractionSchema) }}
      />

      {/* Top Breadcrumb & Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <Breadcrumb
          items={[
            { label: "India", href: "/india" },
            { label: place.stateName, href: `/india/${place.stateSlug}` },
            { label: place.cityName, href: `/india/${place.stateSlug}/${place.citySlug}` },
            { label: place.name },
          ]}
        />
        <div className="flex items-center gap-2">
          <SaveButton itemId={place.id} itemType="place" showLabel={true} />
          <ShareModal title={`${place.name} — ${place.cityName}, India`} />
        </div>
      </div>

      {/* Main Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C201D] border border-white/10 text-[#D28A32] text-xs font-mono uppercase tracking-wider">
            <span>{place.category}</span>
            <span className="text-[#85867E]">&bull;</span>
            <span className="text-[#B9B4A8]">{place.cityName}, {place.stateName}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#F3EBDD] leading-tight">
            {place.name}
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-[#C85B35]">
            &ldquo;{place.tagline}&rdquo;
          </p>

          <p className="text-base sm:text-lg text-[#B9B4A8] leading-relaxed pt-2 font-sans">
            {place.description}
          </p>
        </div>
      </div>

      {/* Premium Multi-Angle Photo Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PlacePhotoGallery
          placeName={place.name}
          placeLocation={`${place.cityName}, ${place.stateName}`}
          images={place.images}
          fallbackHeroImage={place.heroImage}
        />
      </div>

      {/* Verified Practical Key Facts Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-[#141715] border border-white/10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#F3EBDD]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Visiting Facts &amp; Logistics</span>
            </div>
            <span className="text-[11px] font-mono text-[#85867E]">
              Field Verification &bull; {place.cityName}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
            {/* Opening Hours */}
            <div className="space-y-1">
              <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#B98945]" />
                Visiting Hours
              </span>
              <p className="font-medium text-[#F3EBDD]">{place.timingsVerified}</p>
            </div>

            {/* Entry Fee Note */}
            <div className="space-y-1">
              <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5 text-[#B98945]" />
                Entry &amp; Tickets
              </span>
              <p className="font-medium text-[#F3EBDD]">{place.entryFeeNote}</p>
            </div>

            {/* Best Time of Day */}
            <div className="space-y-1">
              <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-[#B98945]" />
                Best Time of Day
              </span>
              <p className="font-medium text-[#F3EBDD]">{place.bestTimeOfDay}</p>
            </div>

            {/* Ideal Duration */}
            <div className="space-y-1">
              <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
                <Hourglass className="w-3.5 h-3.5 text-[#B98945]" />
                Recommended Time
              </span>
              <p className="font-medium text-[#F3EBDD]">{place.durationHours} Hours</p>
            </div>
          </div>
        </div>
      </div>

      {/* Editorial Essay / About Section */}
      {place.about && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs uppercase tracking-wider text-[#C85B35] font-mono">
                Field Perspective
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                About {place.name}
              </h2>
            </div>
            <div className="lg:col-span-8">
              <p className="font-serif text-base sm:text-lg text-[#F3EBDD] leading-relaxed border-l-2 border-[#C85B35] pl-6 py-1">
                {place.about}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Why This Place Is Special (Structured Bullet Points) */}
      {place.whySpecial && place.whySpecial.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#141715] border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Sparkles className="w-5 h-5 text-[#D28A32]" />
              <h2 className="font-serif text-2xl font-normal text-[#F3EBDD]">
                Why This Place Is Special
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {place.whySpecial.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-4 rounded-xl bg-[#1C201D] border border-white/5 text-xs sm:text-sm text-[#B9B4A8] leading-relaxed"
                >
                  <span className="w-6 h-6 rounded-full bg-[#192D26] text-[#D28A32] border border-emerald-500/30 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Dedicated Deep History Section */}
      {place.history && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-2xl bg-[#141715] border border-white/10 space-y-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1C201D] border border-white/10 flex items-center justify-center text-[#C85B35] shadow-sm">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#B98945] block">
                    Historical Annals
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                    Chronicle &amp; Origins
                  </h2>
                </div>
              </div>

              {place.history.origin && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1C201D] border border-white/10 text-xs text-[#F3EBDD] font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#D28A32]" />
                  <span>{place.history.origin}</span>
                </div>
              )}
            </div>

            {/* Dynasties Banner */}
            {place.history.dynasties && (
              <div className="flex items-center gap-2 text-xs font-mono text-[#F3EBDD] bg-[#1C201D] px-4 py-2.5 rounded-xl border border-white/5">
                <span className="font-bold uppercase text-[#D28A32]">Associated Dynasties:</span>
                <span>{place.history.dynasties}</span>
              </div>
            )}

            {/* Deep Narrative Essay */}
            <div className="space-y-4">
              <p className="text-sm sm:text-base text-[#B9B4A8] leading-relaxed font-sans">
                {place.history.narrative}
              </p>
            </div>

            {/* Key Timeline Events */}
            {place.history.keyEvents && place.history.keyEvents.length > 0 && (
              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-wider font-mono font-semibold text-[#85867E] block">
                  Key Historical Milestones
                </span>
                <div className="space-y-2.5">
                  {place.history.keyEvents.map((event, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C201D] border border-white/5 text-xs sm:text-sm text-[#B9B4A8]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#C85B35] mt-1.5 shrink-0" />
                      <span>{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Things to See & Things to Do Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Things to See */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Compass className="w-5 h-5 text-[#C85B35]" />
              <h2 className="font-serif text-2xl font-light text-[#F3EBDD]">
                Structures &amp; Things to See Inside
              </h2>
            </div>

            {place.thingsToSee && place.thingsToSee.length > 0 ? (
              <div className="space-y-3.5">
                {place.thingsToSee.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#1C201D] border border-white/10 shadow-sm space-y-1.5"
                  >
                    <h3 className="font-serif text-base font-normal text-[#F3EBDD]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B9B4A8] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="space-y-3">
                {place.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C201D] border border-white/10 text-xs sm:text-sm text-[#B9B4A8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C85B35] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Things to Do & Experiences */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <Footprints className="w-5 h-5 text-[#C85B35]" />
              <h2 className="font-serif text-2xl font-light text-[#F3EBDD]">
                Recommended Activities
              </h2>
            </div>

            {place.thingsToDo && place.thingsToDo.length > 0 ? (
              <div className="space-y-2.5">
                {place.thingsToDo.map((todo, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C201D] border border-white/10 text-xs sm:text-sm text-[#B9B4A8]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{todo}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 text-xs text-[#B9B4A8]">
                Early morning guided walks, photography sessions, and exploring adjacent heritage lanes.
              </div>
            )}

            {/* Related City Food Spots */}
            {cityFoodSpots.length > 0 && (
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs uppercase tracking-wider font-mono font-semibold text-[#85867E] flex items-center gap-1.5">
                  <UtensilsCrossed className="w-3.5 h-3.5 text-[#C85B35]" />
                  Nearby Heritage Food in {place.cityName}
                </span>
                <div className="space-y-2">
                  {cityFoodSpots.map((spot) => (
                    <div
                      key={spot.id}
                      className="p-3.5 rounded-xl bg-[#1C201D] border border-white/5 space-y-1 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-[#F3EBDD]">{spot.name}</span>
                        <span className="text-[10px] font-mono uppercase text-[#D28A32] bg-[#141715] px-2 py-0.5 rounded border border-white/5">
                          {spot.cuisine}
                        </span>
                      </div>
                      <p className="text-[#85867E] text-[11px] leading-relaxed">
                        Must try: {spot.mustTryDishes.slice(0, 3).join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Practical Travel & Logistics Guide */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#141715] border border-white/10 shadow-xl space-y-6">
          <div className="flex items-center gap-2 border-b border-white/10 pb-3">
            <Navigation className="w-5 h-5 text-[#C85B35]" />
            <h2 className="font-serif text-2xl font-light text-[#F3EBDD]">
              Field Logistics &amp; Practical Travel Information
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs sm:text-sm">
            {/* How to Reach */}
            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/5 space-y-2">
              <span className="font-mono uppercase text-[11px] font-bold text-[#F3EBDD] flex items-center gap-1.5">
                <Navigation className="w-3.5 h-3.5 text-[#C85B35]" />
                Transit &amp; How to Reach
              </span>
              <p className="text-[#B9B4A8] leading-relaxed">
                {place.practicalInfo?.howToReach || place.howToReach}
              </p>
            </div>

            {/* Terrain & Walking */}
            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/5 space-y-2">
              <span className="font-mono uppercase text-[11px] font-bold text-[#F3EBDD] flex items-center gap-1.5">
                <Footprints className="w-3.5 h-3.5 text-[#C85B35]" />
                Terrain &amp; Walking
              </span>
              <p className="text-[#B9B4A8] leading-relaxed">
                {place.practicalInfo?.terrain || "Mixed stone surfaces and level courtyards."}
              </p>
            </div>

            {/* Parking & Approach */}
            <div className="p-4 rounded-xl bg-[#1C201D] border border-white/5 space-y-2">
              <span className="font-mono uppercase text-[11px] font-bold text-[#F3EBDD] flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-[#C85B35]" />
                Parking &amp; Vehicles
              </span>
              <p className="text-[#B9B4A8] leading-relaxed">
                {place.practicalInfo?.parking || "Municipal or street parking available nearby."}
              </p>
            </div>
          </div>

          {/* Accessibility Note */}
          {(place.practicalInfo?.accessibility || place.accessibility) && (
            <div className="flex items-start gap-3 p-4 rounded-xl bg-[#192D26] border border-emerald-800/40 text-xs sm:text-sm text-emerald-200">
              <Accessibility className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-emerald-300">Accessibility Assessment:</span>
                <span>{place.practicalInfo?.accessibility || place.accessibility}</span>
              </div>
            </div>
          )}

          {/* Curated Field Tips */}
          {place.practicalInfo?.travelTips && place.practicalInfo.travelTips.length > 0 && (
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase tracking-wider font-mono font-semibold text-[#85867E] flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-[#D28A32]" />
                Curated Editorial Field Tips
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {place.practicalInfo.travelTips.map((tip, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#1C201D] border border-white/5 text-xs text-[#B9B4A8] leading-relaxed"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Travel Enquiry & Consultation Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141715] border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-widest font-mono text-[#C85B35] block">
                TRIP ADVISORY // BESPOKE ROUTING
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#F3EBDD]">
                Planning to Visit {place.name}?
              </h2>
              <p className="text-sm text-[#B9B4A8] leading-relaxed font-sans">
                Connect directly with our travel advisory desk led by founder Ashish Nath Tiwari.
                We provide authentic local routing, private heritage guides, reliable transit drivers,
                and curated stays across {place.cityName} and {place.stateName}.
              </p>
              <div className="p-5 rounded-2xl bg-[#1C201D] border border-white/10 text-xs text-[#B9B4A8] space-y-2">
                <span className="font-mono uppercase tracking-wider text-xs text-[#F3EBDD] block">
                  Operations Desk Lead:
                </span>
                <p className="text-[#F3EBDD]">Ashish Nath Tiwari &bull; <a href="mailto:ashishnathtiwari12@gmail.com" className="text-[#C85B35] hover:underline">ashishnathtiwari12@gmail.com</a></p>
                <p>Direct WhatsApp: <a href="https://wa.me/917277631873" className="text-[#D28A32] font-semibold hover:underline">+91 72776 31873</a></p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <TravelEnquiryForm
                defaultDestination={`${place.name}, ${place.cityName}`}
                sourcePage={`/india/${place.stateSlug}/${place.citySlug}/${place.slug}`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Places in City */}
      {nearbyPlaces.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#C85B35] block mb-1">
                MORE IN {place.cityName.toUpperCase()}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
                Nearby Places to Combine
              </h3>
            </div>
            <Link
              href={`/india/${place.stateSlug}/${place.citySlug}`}
              className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Full {place.cityName} Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.slice(0, 3).map((nearby) => (
              <PlaceCard key={nearby.id} place={nearby} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
