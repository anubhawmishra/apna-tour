export type Region =
  | "NORTH"
  | "SOUTH"
  | "EAST"
  | "WEST"
  | "CENTRAL"
  | "NORTHEAST";

export type Season =
  | "WINTER"
  | "SUMMER"
  | "MONSOON"
  | "POST_MONSOON"
  | "ALL_YEAR";

export type PriceTier = "BUDGET" | "MODERATE" | "PREMIUM" | "LUXURY";

export interface Author {
  id: string;
  name: string;
  slug: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  location: string;
}

export interface StateData {
  id: string;
  name: string;
  slug: string;
  capital: string;
  region: Region;
  tagline: string;
  overview: string;
  heroImage: string;
  bestTimeToVisit: string;
  idealDuration: string;
  peakSeason: Season;
  highlights: string[];
  travelTips: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export interface CityData {
  id: string;
  name: string;
  slug: string;
  stateSlug: string;
  stateName: string;
  tagline: string;
  overview: string;
  heroImage: string;
  bestTime: string;
  idealDays: number;
  knownFor: string[];
  faqs?: Array<{ question: string; answer: string }>;
}

export interface PlaceImage {
  id: string;
  url: string;
  thumbnailUrl?: string;
  altText: string;
  caption: string;
  perspective?: string; // e.g. "Main Façade", "Fort Ramparts", "Historic Gate", "Interior Sanctum", "Summit Landscape"
  source: string; // e.g. "Wikimedia Commons", "Unsplash", "ASI Public Domain"
  sourceUrl?: string;
  license: string; // e.g. "CC BY-SA 4.0", "Unsplash License", "Public Domain"
  creator?: string;
  sortOrder: number;
  isFeatured?: boolean;
}

export interface PlaceHistory {
  origin?: string;
  dynasties?: string;
  keyEvents?: string[];
  narrative: string;
}

export interface PlaceThingToSee {
  title: string;
  description: string;
}

export interface PlacePracticalInfo {
  nearestCity: string;
  terrain?: string;
  parking?: string;
  entryTicket: string;
  openingHours: string;
  bestTime: string;
  duration: string;
  howToReach: string;
  accessibility?: string;
  travelTips: string[];
}

export interface PlaceData {
  id: string;
  name: string;
  slug: string;
  citySlug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  category: "Heritage" | "Nature" | "Spiritual" | "Architecture" | "Culture" | "Scenic View";
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  images?: PlaceImage[];
  timingsVerified: string;
  entryFeeNote: string;
  bestTimeOfDay: string;
  durationHours: number;
  accessibility: string;
  howToReach: string;
  highlights: string[];
  isFeatured?: boolean;
  isHiddenGem?: boolean;

  // Detailed editorial & historical content
  about?: string;
  whySpecial?: string[];
  history?: PlaceHistory;
  thingsToSee?: PlaceThingToSee[];
  thingsToDo?: string[];
  practicalInfo?: PlacePracticalInfo;
}

export interface TravelEnquiryInput {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelDates?: string;
  travellerCount?: number;
  tripType?: string;
  budget?: string;
  startingCity?: string;
  message: string;
  consent: boolean;
  sourcePage?: string;
}

export interface FoodSpotData {
  id: string;
  name: string;
  slug: string;
  citySlug: string;
  cityName: string;
  stateSlug: string;
  stateName: string;
  cuisine: string;
  category: "Heritage Cafe" | "Street Food Legend" | "Regional Thali" | "Iconic Bakery" | "Traditional Sweet House";
  mustTryDishes: string[];
  priceTier: PriceTier;
  heroImage: string;
  description: string;
  neighborhood: string;
  storyNote: string;
  isVerified: boolean;
}

export interface ExperienceData {
  id: string;
  title: string;
  slug: string;
  stateSlug: string;
  stateName: string;
  citySlug?: string;
  cityName?: string;
  theme: "Heritage" | "Nature" | "Adventure" | "Spiritual" | "Culinary" | "Wellness" | "Art & Craft";
  summary: string;
  description: string;
  heroImage: string;
  seasonRecommended: Season;
  difficulty?: "Easy" | "Moderate" | "Challenging";
  duration: string;
  tips: string[];
  isFeatured?: boolean;
}

export interface StoryData {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  excerpt: string;
  body: Array<{
    type: "paragraph" | "heading" | "quote" | "callout";
    content: string;
    caption?: string;
  }>;
  heroImage: string;
  author: Author;
  stateSlug?: string;
  cityName?: string;
  category: string;
  readingTimeMin: number;
  publishedAt: string;
  tags: string[];
  isFeatured?: boolean;
}

export interface ItineraryItemData {
  id: string;
  dayNumber: number;
  timeOfDay: "Morning" | "Afternoon" | "Evening" | "Night";
  placeSlug?: string;
  title: string;
  note: string;
  estimatedDuration: string;
}

export interface ItineraryData {
  id: string;
  title: string;
  slug: string;
  destination: string;
  daysCount: number;
  summary: string;
  heroImage: string;
  idealFor: string;
  bestMonths: string;
  isCurated: boolean;
  items: ItineraryItemData[];
}
