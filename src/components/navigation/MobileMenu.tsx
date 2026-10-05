"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Search, ChevronRight, Compass, MapPin, Utensils, Sparkles, BookOpen, Calendar } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSearch: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenSearch }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#090B0A]/80 backdrop-blur-md lg:hidden animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#141715] shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-white/10 animate-in slide-in-from-right duration-300">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#171A18]">
            <BrandLogo size="sm" />
            <button
              onClick={onClose}
              className="p-2 text-[#85867E] hover:text-[#F3EBDD] rounded-lg hover:bg-[#20231F] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search Action */}
          <div className="p-4 border-b border-white/5">
            <button
              onClick={() => {
                onClose();
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#1C201D] border border-white/10 text-[#85867E] hover:text-[#F3EBDD] text-xs transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-[#C85B35]" />
                <span>Where do you want to wander?</span>
              </div>
              <span className="text-[10px] bg-[#20231F] px-1.5 py-0.5 rounded font-mono text-[#B9B4A8] border border-white/5">
                FIND
              </span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1" aria-label="Mobile Navigation">
            {[
              { label: "Explore India", href: "/india", icon: Compass, sub: "States & Regions" },
              { label: "Destinations", href: "/destinations", icon: MapPin, sub: "Major Cities & Towns" },
              { label: "Places & Heritage", href: "/places", icon: Sparkles, sub: "Forts, Temples & Nature" },
              { label: "Food Discovery", href: "/food", icon: Utensils, sub: "Regional Specialties & Cafes" },
              { label: "Curated Experiences", href: "/experiences", icon: Sparkles, sub: "High Trails & Sacred Rites" },
              { label: "Travel Stories", href: "/stories", icon: BookOpen, sub: "Editorial Field Journal" },
              { label: "Itineraries", href: "/itineraries", icon: Calendar, sub: "Day-by-Day Trip Plans" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-[#1C201D] text-[#F3EBDD] transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-[#C85B35]" />
                  <div>
                    <div className="text-sm font-medium">{item.label}</div>
                    <div className="text-[11px] text-[#85867E]">{item.sub}</div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-[#85867E] group-hover:text-[#F3EBDD] transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom CTA & Secondary links */}
        <div className="p-5 border-t border-white/10 bg-[#171A18] space-y-3">
          <Link
            href="/itineraries"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center px-4 py-3 rounded-xl bg-[#C85B35] hover:bg-[#DA6A42] text-[#FAF5EB] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            Plan Your Journey
          </Link>
          <div className="flex items-center justify-around text-xs text-[#85867E] pt-2">
            <Link href="/about" onClick={onClose} className="hover:text-[#F3EBDD]">
              About
            </Link>
            <span>&bull;</span>
            <Link href="/contact" onClick={onClose} className="hover:text-[#F3EBDD]">
              Contact
            </Link>
            <span>&bull;</span>
            <Link href="/write-for-us" onClick={onClose} className="hover:text-[#F3EBDD]">
              Write for Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
