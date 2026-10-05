"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Camera,
} from "lucide-react";
import { PlaceImage } from "@/types";

interface PlacePhotoGalleryProps {
  placeName: string;
  placeLocation?: string;
  images?: PlaceImage[];
  fallbackHeroImage?: string;
}

export function PlacePhotoGallery({
  placeName,
  placeLocation,
  images = [],
  fallbackHeroImage,
}: PlacePhotoGalleryProps) {
  const displayImages: PlaceImage[] =
    images && images.length > 0
      ? images
      : fallbackHeroImage
      ? [
          {
            id: "fallback-hero",
            url: fallbackHeroImage,
            altText: placeName,
            caption: `${placeName} view`,
            perspective: "Featured View",
            source: "APNA TOUR Field Archive",
            license: "Editorial License",
            sortOrder: 1,
            isFeatured: true,
          },
        ]
      : [];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartXRef = useRef<number | null>(null);

  const activeImage = displayImages[selectedIndex] || displayImages[0];

  const handleNext = useCallback(() => {
    if (displayImages.length <= 1) return;
    setSelectedIndex((prev) => (prev + 1) % displayImages.length);
  }, [displayImages.length]);

  const handlePrev = useCallback(() => {
    if (displayImages.length <= 1) return;
    setSelectedIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  }, [displayImages.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isLightboxOpen, handleNext, handlePrev]);

  // Touch Swipe handler for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > 50) {
      handlePrev();
    } else if (diff < -50) {
      handleNext();
    }
    touchStartXRef.current = null;
  };

  if (!displayImages || displayImages.length === 0) return null;

  return (
    <div className="space-y-4" aria-label={`Photo Gallery of ${placeName}`}>
      {/* 1. Main Featured Viewfinder */}
      <div
        onClick={() => setIsLightboxOpen(true)}
        className="group relative h-[360px] sm:h-[480px] lg:h-[540px] w-full rounded-2xl overflow-hidden bg-sand-200 border border-editorial cursor-pointer select-none shadow-xs"
      >
        <SafeImage
          src={activeImage.url}
          alt={activeImage.altText || `${placeName} view`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 85vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-900/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

        {/* Top Badges: Perspective & Gallery Count */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold uppercase tracking-wider text-charcoal-800 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-terracotta-500" />
            <span>{activeImage.perspective || "Curated Perspective"}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-900/80 backdrop-blur-md text-white text-xs font-mono">
            <span>{selectedIndex + 1}</span>
            <span className="text-charcoal-400">/</span>
            <span>{displayImages.length}</span>
            <Maximize2 className="w-3.5 h-3.5 ml-1 text-stone-300" />
          </div>
        </div>

        {/* Bottom Caption & Source Bar */}
        <div className="absolute bottom-4 left-4 right-4 text-white space-y-1.5 pointer-events-none">
          <p className="font-serif text-lg sm:text-xl font-light text-white leading-snug line-clamp-2">
            {activeImage.caption}
          </p>
          <div className="flex items-center justify-between text-[11px] text-stone-300 font-mono">
            <span>Click or tap to enter full-screen visual archive</span>
            <span className="text-[10px] text-stone-400 uppercase tracking-wider">
              {activeImage.source} &bull; {activeImage.license}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Thumbnail Strip with Mouse Interaction */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
        {displayImages.map((img, idx) => {
          const isCurrent = idx === selectedIndex;
          return (
            <button
              key={img.id || idx}
              onClick={() => setSelectedIndex(idx)}
              className={`relative h-18 sm:h-20 w-24 sm:w-28 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 group ${
                isCurrent
                  ? "border-terracotta-500 ring-2 ring-terracotta-400/40 shadow-md scale-[1.02]"
                  : "border-editorial opacity-70 hover:opacity-100 hover:border-charcoal-400"
              }`}
              aria-label={`View photo ${idx + 1}: ${img.caption}`}
            >
              <SafeImage
                src={img.thumbnailUrl || img.url}
                alt={img.altText}
                fill
                sizes="112px"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-charcoal-900/30 transition-opacity ${
                  isCurrent ? "opacity-0" : "opacity-40 group-hover:opacity-0"
                }`}
              />
              <span className="absolute bottom-1 right-1 text-[9px] font-mono px-1 rounded bg-charcoal-900/80 text-white font-semibold">
                {idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. Full-Screen Editorial Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/98 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={`Full-screen gallery of ${placeName}`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white border-b border-charcoal-800 pb-3">
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-terracotta-400 font-semibold">
                {placeName}{placeLocation ? ` • ${placeLocation}` : ""} &bull; Visual Archive
              </div>
              <div className="text-sm font-serif text-stone-200">
                {activeImage.perspective || "Perspective"} ({selectedIndex + 1} of {displayImages.length})
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-charcoal-400 hidden sm:inline font-mono">
                [Use &larr; &rarr; keys or Swipe]
              </span>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-full bg-charcoal-800 text-stone-200 hover:text-white hover:bg-charcoal-700 transition-colors"
                aria-label="Close full-screen gallery"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Center Stage with Prev/Next Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-white border border-charcoal-700 shadow-xl transition-transform hover:scale-105"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image */}
            <div className="relative w-full h-full max-w-5xl max-h-[75vh] flex items-center justify-center">
              <SafeImage
                src={activeImage.url}
                alt={activeImage.altText || `${placeName} visual archival photo`}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 text-white border border-charcoal-700 shadow-xl transition-transform hover:scale-105"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption & Metadata Strip */}
          <div className="border-t border-charcoal-800 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-300">
            <div className="max-w-2xl">
              <p className="font-serif text-sm sm:text-base text-white">
                {activeImage.caption}
              </p>
            </div>
            <div className="text-[11px] font-mono text-charcoal-400 shrink-0">
              <span>Source: {activeImage.source}</span>
              {activeImage.creator && <span> &bull; Photo: {activeImage.creator}</span>}
              <span> &bull; License: {activeImage.license}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
