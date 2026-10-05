"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please confirm your consent to receive our editorial letters.");
      return;
    }

    setStatus("loading");
    // Simulate server action / API call
    try {
      await new Promise((res) => setTimeout(res, 600));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex items-start gap-3 text-[#F3EBDD] py-2">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <div className="text-sm font-medium text-[#F3EBDD]">You are now subscribed</div>
          <div className="text-xs text-[#85867E] mt-0.5 font-sans">
            Thank you. We send one thoughtful dispatch every alternate Sunday. No spam, ever.
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5" aria-label="Newsletter Signup">
      <div className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
        THE SUNDAY DISPATCH
      </div>
      <p className="text-xs text-[#85867E] leading-relaxed font-sans">
        One slow travel essay, one regional dish history, and three seasonal destination tips delivered every other Sunday.
      </p>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your.email@domain.com"
          required
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#1C201D] border border-white/10 text-[#F3EBDD] placeholder:text-[#85867E] text-xs focus:outline-none focus:border-[#C85B35] transition-colors"
          aria-label="Email address for dispatch"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#C85B35] hover:bg-[#D28A32] disabled:opacity-60 text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shrink-0"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          id="newsletter-consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => {
            setConsent(e.target.checked);
            if (status === "error") setStatus("idle");
          }}
          className="mt-0.5 rounded border-white/20 bg-[#1C201D] text-[#C85B35] focus:ring-[#C85B35] h-3.5 w-3.5"
        />
        <label htmlFor="newsletter-consent" className="text-[11px] text-[#85867E] leading-normal font-sans">
          I consent to receive APNA TOUR dispatches. You can unsubscribe anytime with one click.
        </label>
      </div>

      {status === "error" && (
        <div className="flex items-center gap-1.5 text-xs text-rose-400 pt-1">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </form>
  );
}
