"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Destinations", href: "/destinations" },
    { label: "Places", href: "/places" },
    { label: "Food", href: "/food" },
    { label: "Experiences", href: "/experiences" },
    { label: "Stories", href: "/stories" },
    { label: "Itineraries", href: "/itineraries" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#0F1110]/95 backdrop-blur-md border-white/10 shadow-lg shadow-black/20"
            : "bg-[#0F1110]/80 backdrop-blur-md border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-10">
              <BrandLogo size="md" />

              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center space-x-2" aria-label="Main Navigation">
                {/* Explore with MegaMenu Trigger */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                >
                  <Link
                    href="/india"
                    className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                      pathname?.startsWith("/india")
                        ? "text-[#C85B35]"
                        : "text-[#B9B4A8] hover:text-[#F3EBDD]"
                    } editorial-nav-link`}
                  >
                    <span>Explore</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-[#85867E] transition-transform duration-200 ${
                        isMegaMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </Link>
                </div>

                {navLinks.map((link) => {
                  const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-3 py-2 text-xs uppercase tracking-wider font-medium transition-colors ${
                        isActive
                          ? "text-[#C85B35]"
                          : "text-[#B9B4A8] hover:text-[#F3EBDD]"
                      } editorial-nav-link`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Search + Plan a Trip CTA */}
            <div className="flex items-center gap-3">
              {/* Search Trigger Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#1C201D] border border-white/10 text-[#B9B4A8] hover:text-[#F3EBDD] hover:border-[#C85B35]/40 text-xs transition-all duration-200 group shadow-xs cursor-pointer"
                aria-label="Open search (Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-[#85867E] group-hover:text-[#C85B35] transition-colors" />
                <span className="hidden sm:inline font-sans">Where to wander?</span>
                <kbd className="hidden md:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-[#20231F] text-[#85867E] border border-white/5">
                  ⌘K
                </kbd>
              </button>

              {/* Primary CTA */}
              <Link
                href="/itineraries"
                className="hidden sm:inline-flex items-center justify-center px-4.5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#C85B35] hover:bg-[#DA6A42] text-[#FAF5EB] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                Plan Journey
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-lg text-[#B9B4A8] hover:text-[#F3EBDD] hover:bg-[#1C201D] lg:hidden transition-colors cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        <MegaMenu
          isOpen={isMegaMenuOpen}
          onClose={() => setIsMegaMenuOpen(false)}
        />
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
