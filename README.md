# APNA TOUR — Premium Indian Travel Discovery Platform

> *"Your trusted companion for discovering India."*

APNA TOUR is an independently designed, human-first editorial travel discovery platform for the Indian subcontinent. It is architected for real travelers who value architectural context, verified monument facts, regional culinary histories, and thoughtful pacing over recycled top-ten lists or AI-generated travel fluff.

---

## 1. Brand & Dark Editorial Design System

### Personality
- **Editorial & Human:** Natural prose crafted from on-ground field observations and historical scholarship.
- **Cinematic Dark Editorial:** Sophisticated, immersive palette reminiscent of a luxury travel magazine.
- **Trustworthy & Rigorous:** Verified opening timings, ASI ticket guidelines, accessibility notes, and no fabricated user reviews.
- **100% Genuine Local Imagery:** Fully verified, high-resolution photography archives stored locally with Creative Commons & ASI licensing credits—no generic stock cars or foreign landscapes.

### Color Palette (Dark Editorial Direction)
- **Deep Charcoal / Almost Black (Background):** `#111312`
- **Secondary Atmospheric Background:** `#171A18`
- **Card & Surface Background:** `#1C201D` / `#20231F`
- **Deep Forest Green (Accents & Badges):** `#19352B` / `#192D26`
- **Warm Cream Text (Primary Body & Display):** `#F3EBDD`
- **Secondary Reading Text:** `#B9B4A8`
- **Muted Structural Text:** `#85867E`
- **Terracotta Accent (Brand Accent & Badges):** `#C85B35`
- **Warm Saffron (Highlights & Ratings):** `#D28A32`
- **Warm Brass (Heritage Facts & Details):** `#B98945`

### Typography Hierarchy
- **Editorial Display:** *Newsreader* (Serif Display Headlines, Subtitles, Pull Quotes)
- **UI & Body:** *Plus Jakarta Sans* (Clean, legible modern sans-serif for reading & navigation)
- **Metadata & Tags:** System Monospace for hours, dates, and ticket prices.

---

## 2. Business & Owner Contact Information

- **Founder & Operations Lead:** Ashish Nath Tiwari
- **Direct Email:** `ashishnathtiwari12@gmail.com`
- **Direct Phone:** `+91 72776 31873`
- **WhatsApp Support:** Direct WhatsApp routing configured in Header, Contact, and Enquiry forms
- **Grievance Redressal Officer (DPDP Act, 2023):** Ashish Nath Tiwari (`ashishnathtiwari12@gmail.com`)

---

## 2. Tech Stack

- **Framework:** Next.js (App Router, Turbopack, React Server Components by default)
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS (with bespoke editorial theme tokens)
- **Icons:** Lucide React
- **Database / ORM:** Prisma ORM with PostgreSQL-ready schema (17 models)
- **Validation:** Zod for server & form inputs
- **SEO & Meta:** Dynamic Metadata, OpenGraph, Twitter Cards, Schema.org JSON-LD (TouristDestination, TouristAttraction, Article, BreadcrumbList, FAQPage)

---

## 3. Project Architecture

```
APNA TOUR/
├── prisma/
│   └── schema.prisma         # 17 models with relations, enums & indexes
├── public/                   # Static assets & favicon
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Global typography, Header, Footer & DPDP Banner
│   │   ├── page.tsx          # Editorial Homepage with 9 curated sections
│   │   ├── globals.css       # Design tokens & refined scrollbars
│   │   ├── not-found.tsx     # Helpful 404 trail search
│   │   ├── error.tsx         # Error boundary
│   │   ├── loading.tsx       # Subtle skeleton loader
│   │   ├── sitemap.ts        # Dynamic XML sitemap
│   │   ├── robots.ts         # Robots.txt handler
│   │   ├── india/            # States & Regional Exploration
│   │   │   ├── page.tsx      # All States index & interactive map
│   │   │   └── [state]/      # State detail
│   │   │       ├── page.tsx  # Overview, cities, places, food, FAQs
│   │   │       └── [city]/   # City detail
│   │   │           ├── page.tsx # City overview, places, eats, stays
│   │   │           └── [place]/page.tsx # Verified facts, entry, how to reach
│   │   ├── destinations/     # City & State directory
│   │   ├── places/           # Categorized monuments & sanctuaries
│   │   ├── food/             # Regional cuisine discovery
│   │   │   ├── page.tsx      # Pan-India food trails
│   │   │   └── [state]/[city]/page.tsx # City-specific dining trails
│   │   ├── experiences/      # Curated cultural & outdoor activities
│   │   ├── stories/          # Editorial field journal
│   │   │   ├── page.tsx      # Stories archive
│   │   │   └── [slug]/page.tsx # Long-form reader with pull quotes
│   │   ├── itineraries/      # Interactive trip planner & 5 curated routes
│   │   ├── search/           # Multi-category discovery engine
│   │   ├── about/            # Manifesto & resident researchers
│   │   ├── contact/          # Contact form with anti-spam
│   │   ├── write-for-us/     # Contributor pitching guidelines
│   │   ├── privacy/          # DPDP Act 2023 compliant privacy policy
│   │   ├── terms/            # Terms of service
│   │   ├── cookie-policy/    # Storage transparency notice
│   │   └── grievance/        # Statutory Grievance Redressal Officer notice
│   ├── components/
│   │   ├── ui/               # BrandLogo, Breadcrumb, SaveButton, ShareModal, ConsentBanner, InteractiveIndiaMap
│   │   ├── navigation/       # Header, Desktop MegaMenu, MobileMenu, SearchModal
│   │   ├── hero/             # EditorialHero with asymmetric composition
│   │   ├── destinations/     # DestinationCard
│   │   ├── places/           # PlaceCard with verified tags
│   │   ├── food/             # FoodCard
│   │   ├── experiences/      # ExperienceCard
│   │   ├── stories/          # StoryCard
│   │   ├── itinerary/        # InteractiveItineraryBuilder
│   │   ├── forms/            # NewsletterSignup
│   │   └── layout/           # Editorial Footer
│   ├── data/
│   │   └── travelData.ts     # Verified dataset (5 states, 10 cities, 21 places, 10 food spots, 10 experiences, 10 stories, 5 itineraries)
│   ├── services/
│   │   └── travelService.ts  # Universal query & search service layer
│   ├── lib/
│   │   ├── db/prisma.ts      # Singleton Prisma client
│   │   └── analytics/        # Privacy-first analytics abstraction
│   └── types/
│       └── index.ts          # Strictly typed subcontinental domain models
├── .env.example              # Environment variables template
├── next.config.ts            # Security headers & Unsplash optimization
├── tsconfig.json             # TypeScript configuration
└── package.json
```

---

## 4. Key Platform Features

1. **Brand Identity:** Original hand-crafted vector brand mark combining the Indian portal/jharokha arch with a dawn compass point.
2. **Interactive Spatial India Map:** Provider-independent region explorer (West, North, South, Central, East, Northeast) with instant city detail cards.
3. **Interactive Trip Planner:** Day-by-day Morning/Afternoon/Evening block scheduler with local persistence and custom activity additions.
4. **Universal Discovery Search:** Instant modal search (`⌘K` / `Ctrl+K`) and dedicated `/search` page filtering across places, food, cities, and stories.
5. **Verified Monument Facts:** Opening hours, ASI ticket fees for Indian vs international visitors, accessibility notes, and best daylight hours.
6. **Regional Food Trails:** Detailed profiles of iconic breakfast spots, Irani cafes, and sweet houses with must-try dishes and price indicators.
7. **Long-Form Reading Experience:** Editorial journal with author bylines, pull quotes, reading times, and Article schema markup.
8. **DPDP Act, 2023 Compliance:** Transparent consent management with necessary/analytics/preferences categories, statutory Grievance Redressal notice, and zero dark patterns.

---

## 5. Local Setup & Development

### Prerequisites
- Node.js `20.x` or `24.x`
- npm `10+` or `11+`

### Installation
```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local

# 3. Generate Prisma client
npx prisma generate

# 4. Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6. Production Build & Deployment

```bash
# Build production bundle
npm run build

# Start production server
npm start
```

The application is pre-configured for one-click deployment on **Vercel** or any Node.js hosting platform with complete Server Component optimizations and static page generation.
