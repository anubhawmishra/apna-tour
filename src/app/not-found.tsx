import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, MapPin, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-sand-200 border border-editorial flex items-center justify-center mx-auto text-terracotta-600">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-charcoal-400">
            Error 404 &bull; Trail Not Found
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-light text-charcoal-900">
            This lane doesn&apos;t seem to exist.
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed max-w-sm mx-auto">
            Like taking a wrong turn through an ancient peth in Old Pune, the page you are looking for has moved or does not exist.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            Return to Homepage
          </Link>
          <Link
            href="/search"
            className="px-4 py-2.5 rounded-xl bg-white hover:bg-sand-50 border border-editorial text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Search Discovery</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-editorial text-xs text-charcoal-500 space-y-2">
          <span className="font-medium">Or explore our most popular guides:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Pune Heritage", href: "/india/maharashtra/pune" },
              { label: "Jaipur Amber Fort", href: "/india/rajasthan/jaipur" },
              { label: "Fort Kochi Spices", href: "/india/kerala/kochi" },
              { label: "Regional Food", href: "/food" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2.5 py-1 rounded bg-sand-200/80 hover:bg-sand-300 text-charcoal-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
