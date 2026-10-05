"use client";

import React, { useState, useEffect } from "react";
import { Bookmark } from "lucide-react";

interface SaveButtonProps {
  itemId: string;
  itemType: "place" | "story" | "food" | "itinerary";
  className?: string;
  showLabel?: boolean;
}

export function SaveButton({
  itemId,
  itemType,
  className = "",
  showLabel = false,
}: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = JSON.parse(localStorage.getItem("apna_tour_saved") || "[]");
        setIsSaved(saved.some((item: { id: string; type: string }) => item.id === itemId && item.type === itemType));
      } catch {
        // ignore
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [itemId, itemType]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const saved: Array<{ id: string; type: string; savedAt: string }> = JSON.parse(
        localStorage.getItem("apna_tour_saved") || "[]"
      );
      let updated;
      if (isSaved) {
        updated = saved.filter((i) => !(i.id === itemId && i.type === itemType));
        setIsSaved(false);
      } else {
        updated = [...saved, { id: itemId, type: itemType, savedAt: new Date().toISOString() }];
        setIsSaved(true);
      }
      localStorage.setItem("apna_tour_saved", JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <button
      onClick={toggleSave}
      aria-label={isSaved ? "Remove from saved items" : "Save item for later"}
      className={`inline-flex items-center gap-1.5 p-2 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85B35] ${
        isSaved
          ? "bg-[#C85B35] text-[#FAF5EB] border border-[#C85B35] shadow-md"
          : "bg-[#111312]/80 backdrop-blur-md hover:bg-[#1C201D] text-[#B9B4A8] hover:text-[#F3EBDD] border border-white/10 shadow-sm"
      } ${className}`}
    >
      <Bookmark
        className={`w-4 h-4 transition-transform ${
          isSaved ? "fill-[#FAF5EB] scale-110" : ""
        }`}
      />
      {showLabel && (
        <span className="text-xs font-mono uppercase tracking-wider pr-1">
          {isSaved ? "Saved" : "Save"}
        </span>
      )}
    </button>
  );
}
