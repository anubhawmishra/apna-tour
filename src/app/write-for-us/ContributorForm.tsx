"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export function ContributorForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    category: "Heritage & Architecture",
    storyIdea: "",
    sampleLink: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!formData.storyIdea.trim() || formData.storyIdea.length < 15) {
      setStatus("error");
      setErrorMsg("Please provide a concise description of your story idea (at least 15 characters).");
      return;
    }

    setStatus("loading");
    try {
      await new Promise((res) => setTimeout(res, 800));
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Error submitting pitch. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="py-12 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
        <h3 className="font-serif text-2xl font-medium text-[#F3EBDD]">
          Pitch Received
        </h3>
        <p className="text-xs sm:text-sm text-[#B9B4A8] max-w-sm mx-auto leading-relaxed">
          Thank you for pitching to APNA TOUR, {formData.name}. Our commissioning editors will review your proposal and get in touch within two weeks if it fits our editorial schedule.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contributor Pitch Form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Your Name <span className="text-[#C85B35]">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Radhika Iyer"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Email Address <span className="text-[#C85B35]">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="radhika@example.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="location" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Your Location in India
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Pune, Maharashtra"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
            Story Category
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
          >
            <option value="Heritage & Architecture" className="bg-[#1C201D] text-[#F3EBDD]">Heritage &amp; Architecture</option>
            <option value="Regional Food & Culinary History" className="bg-[#1C201D] text-[#F3EBDD]">Regional Food &amp; Culinary History</option>
            <option value="Mountain & Forest Trails" className="bg-[#1C201D] text-[#F3EBDD]">Mountain &amp; Forest Trails</option>
            <option value="Living Craft & Textiles" className="bg-[#1C201D] text-[#F3EBDD]">Living Craft &amp; Textiles</option>
            <option value="Spiritual Traditions" className="bg-[#1C201D] text-[#F3EBDD]">Spiritual Traditions</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="storyIdea" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Story Headline &amp; Pitch Summary <span className="text-[#C85B35]">*</span>
        </label>
        <input
          id="storyIdea"
          type="text"
          required
          value={formData.storyIdea}
          onChange={(e) => setFormData({ ...formData, storyIdea: e.target.value })}
          placeholder="e.g. Walking the 18th-century Peth water pipelines of Old Pune"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
        />
      </div>

      <div>
        <label htmlFor="sampleLink" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Link to Previous Published Writing or Portfolio
        </label>
        <input
          id="sampleLink"
          type="url"
          value={formData.sampleLink}
          onChange={(e) => setFormData({ ...formData, sampleLink: e.target.value })}
          placeholder="https://yourportfolio.com or article URL"
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#B9B4A8] mb-1.5">
          Outline &amp; Field Reporting Angle
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Explain why you are uniquely suited to report this story and what on-ground access you have..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141715] border border-white/10 text-xs sm:text-sm text-[#F3EBDD] placeholder-[#85867E] focus:outline-none focus:border-[#C85B35] focus:ring-1 focus:ring-[#C85B35]"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-rose-950/40 border border-rose-800 text-rose-300 text-xs">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#C85B35] hover:bg-[#b04f2e] disabled:opacity-60 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-lg"
      >
        <span>{status === "loading" ? "Submitting Proposal..." : "Submit Pitch"}</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </form>
  );
}
