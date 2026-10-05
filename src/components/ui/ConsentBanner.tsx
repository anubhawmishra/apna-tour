"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShieldCheck, Settings2 } from "lucide-react";

export function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem("apna_tour_consent");
      if (!saved) {
        setIsVisible(true);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem("apna_tour_consent", JSON.stringify({
      ...prefs,
      timestamp: new Date().toISOString(),
    }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const all = { necessary: true, analytics: true, marketing: true };
    setPreferences(all);
    saveConsent(all);
  };

  const handleRejectOptional = () => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    setPreferences(minimal);
    saveConsent(minimal);
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and Cookie Consent"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-[#111312]/95 text-[#F3EBDD] backdrop-blur-md border-t border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        {/* Left Information */}
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#F3EBDD]">
              Privacy &amp; Consent Notice (DPDP Act, 2023)
            </span>
          </div>
          <p className="text-xs text-[#B9B4A8] leading-relaxed">
            We use strictly necessary cookies to keep APNA TOUR fast and functional. With your explicit consent, we also measure reader engagement to improve our editorial guides. You are never tracked across third-party ad networks, and your choices are respected. Read our{" "}
            <Link href="/privacy" className="underline text-[#F3EBDD] hover:text-[#C85B35]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/cookie-policy" className="underline text-[#F3EBDD] hover:text-[#C85B35]">
              Cookie Policy
            </Link>
            .
          </p>
        </div>

        {/* Right Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => setShowPreferences(!showPreferences)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#1C201D] hover:bg-[#20231F] text-xs font-medium text-[#B9B4A8] hover:text-[#F3EBDD] border border-white/10 transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
            Preferences
          </button>
          <button
            onClick={handleRejectOptional}
            className="px-3.5 py-2 rounded-lg bg-[#1C201D] hover:bg-[#20231F] text-xs font-medium text-[#B9B4A8] hover:text-[#F3EBDD] border border-white/10 transition-colors"
          >
            Reject Optional
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-lg bg-[#C85B35] hover:bg-[#b04f2e] text-white text-xs font-semibold tracking-wide transition-colors shadow-xs"
          >
            Accept All
          </button>
        </div>
      </div>

      {/* Expanded Preferences Modal / Section */}
      {showPreferences && (
        <div className="max-w-7xl mx-auto mt-6 pt-5 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          {/* Necessary */}
          <div className="p-3 rounded-lg bg-[#1C201D] border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-[#F3EBDD]">Strictly Necessary</span>
              <span className="text-[10px] uppercase font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded">
                Always Active
              </span>
            </div>
            <p className="text-[#85867E] text-[11px] leading-relaxed">
              Essential for security, session state, and navigation memory. Cannot be switched off.
            </p>
          </div>

          {/* Analytics */}
          <div className="p-3 rounded-lg bg-[#1C201D] border border-white/10">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-[#F3EBDD]">Aggregated Analytics</span>
              <input
                type="checkbox"
                checked={preferences.analytics}
                onChange={(e) =>
                  setPreferences({ ...preferences, analytics: e.target.checked })
                }
                className="rounded border-white/20 text-[#C85B35] focus:ring-[#C85B35] h-4 w-4 bg-[#141715]"
              />
            </div>
            <p className="text-[#85867E] text-[11px] leading-relaxed">
              Helps us understand which state guides and travel stories readers find most helpful. Anonymized.
            </p>
          </div>

          {/* Marketing */}
          <div className="p-3 rounded-lg bg-[#1C201D] border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-[#F3EBDD]">Personalization</span>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) =>
                    setPreferences({ ...preferences, marketing: e.target.checked })
                  }
                  className="rounded border-white/20 text-[#C85B35] focus:ring-[#C85B35] h-4 w-4 bg-[#141715]"
                />
              </div>
              <p className="text-[#85867E] text-[11px] leading-relaxed">
                Remembers saved itineraries and region preferences across visits.
              </p>
            </div>
            <div className="pt-3 text-right">
              <button
                onClick={handleSaveCustom}
                className="px-3 py-1.5 rounded bg-[#C85B35] hover:bg-[#b04f2e] text-white text-[11px] font-medium"
              >
                Save My Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
