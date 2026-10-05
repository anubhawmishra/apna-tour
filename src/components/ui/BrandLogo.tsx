import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({
  className = "",
  variant: _variant = "dark",
  showTagline = false,
  size = "md",
}: BrandLogoProps) {
  const markSize = size === "sm" ? 28 : size === "lg" ? 44 : 34;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 rounded group ${className}`}
      aria-label="APNA TOUR — Homepage"
    >
      {/* Brand Icon: The Indian Gateway Portal & Dawn Sun */}
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {/* Exterior Portal Arch */}
        <path
          d="M8 42V20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20V42"
          stroke="#F3EBDD"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Trefoil Point / Indian Jharokha Keystone */}
        <path
          d="M15 42V23C15 18.0294 19.0294 14 24 14C28.9706 14 33 18.0294 33 23V42"
          stroke="#B9B4A8"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* The Rising Dawn Compass Sun / Saffron Earth Core */}
        <circle
          cx="24"
          cy="24"
          r="4.5"
          fill="#C85B35"
        />
        {/* Subtle Horizontal Foundation Threshold */}
        <line
          x1="5"
          y1="42"
          x2="43"
          y2="42"
          stroke="#F3EBDD"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight">
          <span
            className={`font-serif tracking-normal font-light ${
              size === "sm"
                ? "text-lg"
                : size === "lg"
                ? "text-2xl"
                : "text-xl"
            } text-[#F3EBDD]`}
          >
            APNA
          </span>
          <span
            className={`font-sans tracking-widest uppercase ml-1.5 font-bold ${
              size === "sm"
                ? "text-xs"
                : size === "lg"
                ? "text-sm"
                : "text-xs"
            } text-[#C85B35]`}
          >
            TOUR
          </span>
        </div>
        {showTagline && (
          <span className="text-[10px] tracking-widest uppercase -mt-0.5 text-[#B9B4A8]">
            Discover India
          </span>
        )}
      </div>
    </Link>
  );
}
