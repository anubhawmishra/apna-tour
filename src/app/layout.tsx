import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentBanner } from "@/components/ui/ConsentBanner";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://apnatour.in"),
  title: {
    default: "APNA TOUR — Your Trusted Companion for Discovering India",
    template: "%s | APNA TOUR",
  },
  description:
    "An independent, editorial Indian travel discovery platform. Explore states, storied cities, authentic regional food, hidden architectural gems, and human itineraries.",
  keywords: [
    "India travel",
    "India travel guide",
    "Indian heritage",
    "regional food India",
    "weekend getaways",
    "hidden gems India",
    "itineraries India",
    "Maharashtra",
    "Rajasthan",
    "Kerala",
    "Himachal",
    "Varanasi",
  ],
  authors: [{ name: "APNA TOUR Editorial Team" }],
  creator: "APNA TOUR",
  publisher: "APNA TOUR",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://apnatour.in",
    siteName: "APNA TOUR",
    title: "APNA TOUR — Your Trusted Companion for Discovering India",
    description:
      "Explore India through verified, human-written editorial discovery. Historic places, cultural walks, regional dining trails, and thoughtful journeys.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "APNA TOUR — Discovering India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APNA TOUR — Discovering India Differently",
    description: "An editorial, human-first travel discovery companion for India.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${newsreader.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#111312] text-[#F3EBDD] selection:bg-[#C85B35] selection:text-[#FAF5EB]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
