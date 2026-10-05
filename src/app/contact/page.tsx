import React from "react";
import type { Metadata } from "next";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ContactForm } from "./ContactForm";
import { TravelEnquiryForm } from "@/components/forms/TravelEnquiryForm";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  MapPin,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact APNA TOUR — Travel Planning, Advisory & Operations Desk",
  description:
    "Direct contact for APNA TOUR travel operations, founder desk (Ashish Nath Tiwari), and trip planning inquiries across India.",
};

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      <Breadcrumb items={[{ label: "Contact Us" }]} />

      {/* Page Header */}
      <div className="border-b border-white/10 pb-8 space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#C85B35] font-mono block">
          OPERATIONS &amp; TRAVEL ADVISORY DESK
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F3EBDD] leading-tight">
          Connect with APNA TOUR
        </h1>
        <p className="text-base sm:text-lg text-[#B9B4A8] max-w-3xl leading-relaxed font-sans">
          Whether you are planning a journey across Rajasthan, seeking private heritage guides in Maharashtra,
          or requesting verified monument timings, our team led by founder Ashish Nath Tiwari is here to assist.
        </p>
      </div>

      {/* Founder & Direct Business Contact Highlight Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#141715] border border-white/10 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#C85B35] block mb-1">
              FOUNDER &amp; OPERATIONS LEAD
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#F3EBDD]">
              {siteConfig.contact.ownerName}
            </h2>
            <p className="text-xs font-mono text-[#85867E] mt-0.5">
              {siteConfig.contact.role} &bull; APNA TOUR Travel Discovery Platform
            </p>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#192D26] hover:bg-[#1E362E] text-emerald-300 border border-emerald-800/40 text-xs font-mono uppercase tracking-wider transition-colors shadow-sm shrink-0"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Direct WhatsApp</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm">
          {/* Direct Email */}
          <div className="space-y-1">
            <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#C85B35]" />
              Direct Owner Email
            </span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-mono text-sm text-[#F3EBDD] hover:text-[#C85B35] block transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Direct Phone */}
          <div className="space-y-1">
            <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              Phone &amp; Mobile Desk
            </span>
            <a
              href={`tel:${siteConfig.contact.cleanPhone}`}
              className="font-mono text-sm text-[#F3EBDD] hover:text-emerald-400 block transition-colors"
            >
              {siteConfig.contact.displayPhone}
            </a>
          </div>

          {/* Operating Hours */}
          <div className="space-y-1">
            <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B98945]" />
              Desk Hours (IST)
            </span>
            <p className="font-sans text-sm text-[#F3EBDD]">
              {siteConfig.contact.hours}
            </p>
          </div>

          {/* Operations Hub */}
          <div className="space-y-1">
            <span className="text-[#85867E] uppercase font-mono text-[10px] tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C85B35]" />
              Operations Bases
            </span>
            <p className="font-sans text-sm text-[#F3EBDD]">
              {siteConfig.contact.location}
            </p>
          </div>
        </div>
      </div>

      {/* Main Two-Column Section: Travel Trip Enquiry + General Editorial Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Dedicated Travel & Trip Planning Form */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#C85B35]">
              <Compass className="w-4 h-4 text-[#C85B35]" />
              <span>Trip Enquiry &amp; Custom Itinerary Request</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F3EBDD]">
              Plan Your Journey with Our Desk
            </h2>
            <p className="text-xs sm:text-sm text-[#B9B4A8] leading-relaxed font-sans">
              Submit your destinations, travel window, and interests. Enquiries are routed directly to
              Ashish Nath Tiwari for personalized itinerary recommendations and verified logistics.
            </p>
          </div>

          <div className="bg-[#141715] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl">
            <TravelEnquiryForm sourcePage="/contact" />
          </div>
        </div>

        {/* Right Column: General Contact Form & Additional Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#85867E] block">
              EDITORIAL &amp; GENERAL FEEDBACK
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F3EBDD]">
              General Inquiries &amp; Corrections
            </h3>
            <p className="text-xs text-[#B9B4A8] leading-relaxed font-sans">
              For field updates, ASI timing corrections, press questions, or partnership notes, use the quick form below.
            </p>
            <div className="bg-[#141715] p-6 rounded-2xl border border-white/10 shadow-2xl">
              <ContactForm />
            </div>
          </div>

          {/* Privacy & Trust Box */}
          <div className="p-6 rounded-2xl bg-[#1C201D] border border-white/10 space-y-3 text-xs">
            <div className="flex items-center gap-2 text-[#F3EBDD] font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Data Protection &amp; DPDP Act 2023 Compliance</span>
            </div>
            <p className="text-[#85867E] leading-relaxed font-sans">
              Your contact details are processed strictly for answering your specific travel enquiry.
              We do not sell, rent, or distribute personal information to third-party telemarketers.
            </p>
            <div className="pt-2 text-[11px] font-mono text-[#85867E]">
              Grievance Officer: {siteConfig.legal.grievanceOfficerName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
