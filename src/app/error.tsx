"use client";

import React, { useEffect } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log cleanly without exposing sensitive system traces
    console.error("APNA TOUR Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-5 bg-white p-8 rounded-2xl border border-editorial shadow-xs">
        <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>

        <div className="space-y-1.5">
          <h2 className="font-serif text-2xl font-medium text-charcoal-900">
            A temporary disruption occurred
          </h2>
          <p className="text-xs text-charcoal-600 leading-relaxed">
            We couldn&apos;t load this travel dispatch right now. Your saved items and browser preferences remain intact.
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="px-4 py-2.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 text-white text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="px-4 py-2.5 rounded-xl bg-sand-100 hover:bg-sand-200 text-charcoal-800 text-xs font-semibold uppercase tracking-wider transition-colors border border-editorial"
          >
            Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
