import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";
import { siteConfig } from "@/config/site";
import { Mail, Phone, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#090B0A] text-[#B9B4A8] border-t border-white/10 transition-colors">
      {/* Top Section: Editorial Quote & Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] uppercase font-mono tracking-widest text-[#C85B35]">
                INDEPENDENT INDIAN TRAVEL ARCHIVE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light text-[#F3EBDD] leading-tight">
                &ldquo;India is not a monument to be rushed through. It is a slow, living conversation.&rdquo;
              </h3>
              <p className="text-xs sm:text-sm text-[#85867E] max-w-xl leading-relaxed font-sans">
                APNA TOUR documents the subcontinent with human patience: verified entry timings, regional food histories, architectural context, and quiet trails away from crowded circuits.
              </p>
            </div>
            <div className="lg:col-span-5 bg-[#141715] p-7 rounded-2xl border border-white/10 shadow-xl">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </div>

      {/* Main Link Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Col 1: Explore India */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
              Explore India
            </h4>
            <ul className="space-y-2.5 text-xs text-[#85867E]">
              <li>
                <Link href="/india" className="hover:text-[#F3EBDD] transition-colors">
                  All States
                </Link>
              </li>
              <li>
                <Link href="/india/maharashtra" className="hover:text-[#F3EBDD] transition-colors">
                  Maharashtra
                </Link>
              </li>
              <li>
                <Link href="/india/rajasthan" className="hover:text-[#F3EBDD] transition-colors">
                  Rajasthan
                </Link>
              </li>
              <li>
                <Link href="/india/kerala" className="hover:text-[#F3EBDD] transition-colors">
                  Kerala
                </Link>
              </li>
              <li>
                <Link href="/india/himachal-pradesh" className="hover:text-[#F3EBDD] transition-colors">
                  Himachal Pradesh
                </Link>
              </li>
              <li>
                <Link href="/india/tamil-nadu" className="hover:text-[#F3EBDD] transition-colors">
                  Tamil Nadu
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Destinations */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
              Destinations
            </h4>
            <ul className="space-y-2.5 text-xs text-[#85867E]">
              <li>
                <Link href="/destinations" className="hover:text-[#F3EBDD] transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link href="/india/maharashtra/pune" className="hover:text-[#F3EBDD] transition-colors">
                  Pune Peths &amp; Forts
                </Link>
              </li>
              <li>
                <Link href="/india/maharashtra/mumbai" className="hover:text-[#F3EBDD] transition-colors">
                  Mumbai Art Deco
                </Link>
              </li>
              <li>
                <Link href="/india/rajasthan/jaipur" className="hover:text-[#F3EBDD] transition-colors">
                  Jaipur Pink City
                </Link>
              </li>
              <li>
                <Link href="/india/rajasthan/udaipur" className="hover:text-[#F3EBDD] transition-colors">
                  Udaipur Mewar Ghats
                </Link>
              </li>
              <li>
                <Link href="/india/kerala/kochi" className="hover:text-[#F3EBDD] transition-colors">
                  Fort Kochi Spice Wharfs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Food Trails */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
              Food &amp; Culture
            </h4>
            <ul className="space-y-2.5 text-xs text-[#85867E]">
              <li>
                <Link href="/food" className="hover:text-[#F3EBDD] transition-colors">
                  Regional Food Trails
                </Link>
              </li>
              <li>
                <Link href="/food/maharashtra/pune" className="hover:text-[#F3EBDD] transition-colors">
                  Puneri Misal &amp; Bakeries
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-[#F3EBDD] transition-colors">
                  South Bombay Irani Cafes
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-[#F3EBDD] transition-colors">
                  Jaipur Pyaaz Kachoris
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-[#F3EBDD] transition-colors">
                  Madurai Ghee Podi Idli
                </Link>
              </li>
              <li>
                <Link href="/food" className="hover:text-[#F3EBDD] transition-colors">
                  Banaras Claypot Lassi
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Experiences & Itineraries */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
              Planning
            </h4>
            <ul className="space-y-2.5 text-xs text-[#85867E]">
              <li>
                <Link href="/itineraries" className="hover:text-[#F3EBDD] transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="hover:text-[#F3EBDD] transition-colors">
                  Curated Experiences
                </Link>
              </li>
              <li>
                <Link href="/places" className="hover:text-[#F3EBDD] transition-colors">
                  Verified Places Directory
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-[#F3EBDD] transition-colors">
                  Search Atlas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Editorial Journal */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
              Field Journal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#85867E]">
              <li>
                <Link href="/stories" className="hover:text-[#F3EBDD] transition-colors">
                  All Essays
                </Link>
              </li>
              <li>
                <Link href="/stories/morning-mist-over-sinhagad-pune" className="hover:text-[#F3EBDD] transition-colors">
                  Sinhagad Monsoon Diary
                </Link>
              </li>
              <li>
                <Link href="/stories/clay-cups-slow-currents-varanasi" className="hover:text-[#F3EBDD] transition-colors">
                  Ghats of Banaras
                </Link>
              </li>
              <li>
                <Link href="/stories/tea-at-7000-feet-kolukkumalai-munnar" className="hover:text-[#F3EBDD] transition-colors">
                  Kolukkumalai Dawn Tea
                </Link>
              </li>
              <li>
                <Link href="/write-for-us" className="hover:text-[#F3EBDD] transition-colors">
                  Write for APNA TOUR
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Company & Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#F3EBDD]">
              Company &amp; Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-[#85867E]">
              <li>
                <Link href="/about" className="hover:text-[#F3EBDD] transition-colors">
                  About APNA TOUR
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F3EBDD] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#F3EBDD] transition-colors">
                  Privacy Policy (DPDP)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#F3EBDD] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-[#F3EBDD] transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="hover:text-[#F3EBDD] transition-colors">
                  Grievance Redressal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Business Owner & Direct Travel Advisory Desk */}
      <div className="border-t border-white/5 bg-[#070908] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-6 sm:p-7 rounded-2xl bg-[#141715] border border-white/10">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#C85B35] font-semibold block">
                Travel Advisory &amp; Operations Desk
              </span>
              <p className="font-serif text-lg text-[#F3EBDD] font-normal">
                Direct Contact: {siteConfig.contact.ownerName} ({siteConfig.contact.role})
              </p>
              <p className="text-xs text-[#85867E] font-sans">
                Operating Hours: {siteConfig.contact.hours} &bull; {siteConfig.contact.location}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C201D] hover:bg-[#20231F] text-[#F3EBDD] border border-white/10 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C85B35]" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.cleanPhone}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1C201D] hover:bg-[#20231F] text-[#F3EBDD] border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{siteConfig.contact.displayPhone}</span>
              </a>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#192D26] hover:bg-[#1E362E] text-emerald-300 border border-emerald-800/40 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Compliance */}
      <div className="border-t border-white/5 bg-[#050605] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#85867E]">
          <div className="flex items-center gap-4">
            <BrandLogo variant="light" size="sm" />
            <span>&copy; {new Date().getFullYear()} APNA TOUR. Designed and published in India.</span>
          </div>
          <div className="text-center md:text-right text-[11px] font-mono text-[#85867E]">
            <span>Independent travel research &bull; Verified entry hours without sponsored rankings.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
