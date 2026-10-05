"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, Loader2, Sparkles, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

interface TravelEnquiryFormProps {
  initialDestination?: string;
  defaultDestination?: string;
  sourcePage?: string;
  compact?: boolean;
  onSuccess?: () => void;
}

export function TravelEnquiryForm({
  initialDestination = "",
  defaultDestination = "",
  sourcePage = "Web Platform",
  compact = false,
  onSuccess,
}: TravelEnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: initialDestination || defaultDestination || "",
    travelDates: "",
    travellerCount: 2,
    tripType: "Heritage & Cultural Walking",
    budget: "",
    startingCity: "",
    message: "",
    consent: true,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setFieldErrors({ name: "Please enter your full name." });
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFieldErrors({ email: "Please enter a valid email address." });
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setFieldErrors({ phone: "Please enter a valid phone or WhatsApp number." });
      return;
    }
    if (!formData.destination.trim()) {
      setFieldErrors({ destination: "Please specify your destination." });
      return;
    }
    if (!formData.consent) {
      setErrorMessage("Please accept the consent checkbox to submit your travel enquiry.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus("error");
        setErrorMessage(
          data.message ||
            "Unable to submit enquiry right now. Please try again or reach out to us directly."
        );
        if (data.errors) setFieldErrors(data.errors);
        return;
      }

      setStatus("success");
      if (onSuccess) onSuccess();
    } catch {
      setStatus("error");
      setErrorMessage(
        "A network interruption occurred. Please try again or email us directly at " +
          siteConfig.contact.email
      );
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 text-center rounded-2xl bg-[#141715] border border-white/10 space-y-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-600/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
        </div>
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35] font-semibold">
            ENQUIRY DISPATCHED
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EBDD]">
            We&apos;ve Received Your Travel Request
          </h3>
          <p className="text-xs sm:text-sm text-[#B9B4A8] max-w-md mx-auto leading-relaxed pt-1 font-sans">
            Thank you, <strong className="text-[#F3EBDD]">{formData.name}</strong>. Your enquiry for <strong className="text-[#F3EBDD]">{formData.destination}</strong> has been routed directly to our operations desk led by <strong className="text-[#F3EBDD]">{siteConfig.contact.ownerName}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#1C201D] border border-white/10 text-xs text-[#B9B4A8] max-w-sm mx-auto space-y-1">
          <div>A written confirmation has been sent to <strong className="text-[#F3EBDD]">{formData.email}</strong>.</div>
          <div>Need an immediate response? You can also message via WhatsApp at <a href={siteConfig.contact.whatsappUrl} className="text-[#C85B35] font-semibold underline">{siteConfig.contact.displayPhone}</a>.</div>
        </div>

        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              destination: initialDestination,
              travelDates: "",
              travellerCount: 2,
              tripType: "Heritage & Cultural Walking",
              budget: "",
              startingCity: "",
              message: "",
              consent: true,
              honeypot: "",
            });
          }}
          className="text-xs font-mono uppercase tracking-wider text-[#C85B35] hover:text-[#D28A32] underline pt-2"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" aria-label="Travel Enquiry Form">
      {/* Honeypot field (hidden from genuine users) */}
      <input
        type="text"
        name="website_company"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-name" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Your Full Name <span className="text-[#C85B35]">*</span>
          </label>
          <input
            id="enquiry-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" });
            }}
            placeholder="e.g. Ananya Deshmukh"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
          />
          {fieldErrors.name && (
            <p className="text-[11px] text-rose-400 mt-1">{fieldErrors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="enquiry-email" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Email Address <span className="text-[#C85B35]">*</span>
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" });
            }}
            placeholder="ananya@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
          />
          {fieldErrors.email && (
            <p className="text-[11px] text-rose-400 mt-1">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="enquiry-phone" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Mobile / WhatsApp Number <span className="text-[#C85B35]">*</span>
          </label>
          <input
            id="enquiry-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
              if (fieldErrors.phone) setFieldErrors({ ...fieldErrors, phone: "" });
            }}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
          />
          {fieldErrors.phone && (
            <p className="text-[11px] text-rose-400 mt-1">{fieldErrors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="enquiry-destination" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Destination / Region <span className="text-[#C85B35]">*</span>
          </label>
          <input
            id="enquiry-destination"
            type="text"
            required
            value={formData.destination}
            onChange={(e) => {
              setFormData({ ...formData, destination: e.target.value });
              if (fieldErrors.destination) setFieldErrors({ ...fieldErrors, destination: "" });
            }}
            placeholder="e.g. Sinhagad Fort, Pune / Jaipur / Munnar"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="enquiry-dates" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Travel Window
          </label>
          <input
            id="enquiry-dates"
            type="text"
            value={formData.travelDates}
            onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
            placeholder="e.g. Nov 14–18 or Flexible"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
          />
        </div>

        <div>
          <label htmlFor="enquiry-travellers" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Party Size
          </label>
          <select
            id="enquiry-travellers"
            value={formData.travellerCount}
            onChange={(e) => setFormData({ ...formData, travellerCount: parseInt(e.target.value, 10) })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C85B35] transition-colors"
          >
            <option value={1}>1 Solo Traveller</option>
            <option value={2}>2 Travellers (Couple / Duo)</option>
            <option value={3}>3–4 Travellers (Small Group)</option>
            <option value={6}>5–8 Travellers (Family / Friends)</option>
            <option value={10}>9+ Travellers (Group)</option>
          </select>
        </div>

        <div>
          <label htmlFor="enquiry-tripType" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Trip Focus
          </label>
          <select
            id="enquiry-tripType"
            value={formData.tripType}
            onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C85B35] transition-colors"
          >
            <option value="Heritage & Cultural Walking">Heritage &amp; Cultural Walking</option>
            <option value="Fort Trekking & Nature Trails">Fort Trekking &amp; Nature Trails</option>
            <option value="Regional Culinary Discovery">Regional Culinary Discovery</option>
            <option value="Artisan Crafts & Ateliers">Artisan Crafts &amp; Ateliers</option>
            <option value="Slow Overland Journey">Slow Overland Journey</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="enquiry-message" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Travel Requirements &amp; Special Requests <span className="text-[#C85B35]">*</span>
        </label>
        <textarea
          id="enquiry-message"
          rows={compact ? 3 : 4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us what you are looking for: preferred pacing, dietary preferences, mobility requirements, or specific places you want to combine..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
        />
        {fieldErrors.message && (
          <p className="text-[11px] text-rose-400 mt-1">{fieldErrors.message}</p>
        )}
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          id="enquiry-consent"
          type="checkbox"
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-0.5 rounded border-white/20 bg-[#141715] text-[#C85B35] focus:ring-[#C85B35] h-4 w-4"
        />
        <label htmlFor="enquiry-consent" className="text-[11px] text-[#85867E] leading-normal font-sans">
          I consent to APNA TOUR operations team contacting me via email or phone regarding this itinerary. No third-party spam.
        </label>
      </div>

      {status === "error" && (
        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C85B35] hover:bg-[#D28A32] disabled:opacity-60 text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shadow-lg"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Routing to Operations Desk...</span>
          </>
        ) : (
          <>
            <span>Submit Travel Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>

      <div className="pt-2 text-center text-[11px] text-[#85867E] flex items-center justify-center gap-2 font-mono">
        <span>Operations Desk:</span>
        <a href={`mailto:${siteConfig.contact.email}`} className="text-[#C85B35] hover:underline">
          {siteConfig.contact.email}
        </a>
        <span>&bull;</span>
        <a href={`tel:${siteConfig.contact.cleanPhone}`} className="text-[#B9B4A8] hover:underline">
          {siteConfig.contact.displayPhone}
        </a>
      </div>
    </form>
  );
}
