"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
    honeypot: "", // anti-spam field
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam check
    if (formData.honeypot) return;

    if (!formData.name.trim() || formData.name.length < 2) {
      setStatus("error");
      setErrorMsg("Please provide your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setStatus("error");
      setErrorMsg("Please write a message with at least 10 characters.");
      return;
    }

    setStatus("loading");
    try {
      // Simulate submission
      await new Promise((res) => setTimeout(res, 700));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Unable to send message right now. Please email us directly.");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="font-serif text-2xl font-light text-[#F3EBDD]">
          Message Received
        </h3>
        <p className="text-xs sm:text-sm text-[#B9B4A8] max-w-sm mx-auto leading-relaxed font-sans">
          Thank you, {formData.name}. Our editorial desk will review your note and respond to {formData.email} within 48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact Form">
      {/* Honeypot field (hidden) */}
      <input
        type="text"
        name="website_url"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Your Name <span className="text-[#C85B35]">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
            if (status === "error") setStatus("idle");
          }}
          placeholder="e.g. Vikram Sharma"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Email Address <span className="text-[#C85B35]">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
            if (status === "error") setStatus("idle");
          }}
          placeholder="vikram@example.com"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Subject Category
        </label>
        <select
          id="subject"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C85B35] transition-colors"
        >
          <option value="General Inquiry">General Inquiry</option>
          <option value="Fact Correction">Monument / Ticket Fact Correction</option>
          <option value="Food Recommendation">Regional Dining Recommendation</option>
          <option value="Responsible Partnership">Responsible Travel Partnership</option>
          <option value="Press / Media">Press / Media Inquiry</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Your Note <span className="text-[#C85B35]">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (status === "error") setStatus("idle");
          }}
          placeholder="Please share specific details, locations, or notes..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder:text-[#85867E] focus:outline-none focus:border-[#C85B35] transition-colors"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C85B35] hover:bg-[#D28A32] disabled:opacity-60 text-[#FAF5EB] text-xs font-mono uppercase tracking-wider transition-colors shadow-lg"
      >
        <span>{status === "loading" ? "Submitting..." : "Send Message"}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>

      <p className="text-[11px] text-[#85867E] text-center pt-1 font-sans">
        Your information is handled strictly according to our Privacy Policy under the DPDP Act, 2023.
      </p>
    </form>
  );
}
