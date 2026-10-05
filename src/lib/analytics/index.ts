// Analytics Abstraction Layer for APNA TOUR
// Privacy-first: respects consent under DPDP Act 2023, never transmits PII.

export type AnalyticsEvent =
  | { name: "search"; properties: { query: string; resultsCount: number } }
  | { name: "destination_view"; properties: { slug: string; region: string } }
  | { name: "place_view"; properties: { slug: string; city: string; category: string } }
  | { name: "story_view"; properties: { slug: string; readingTime: number } }
  | { name: "save_item"; properties: { itemId: string; itemType: string } }
  | { name: "newsletter_signup"; properties: { source: string } }
  | { name: "itinerary_create"; properties: { destination: string; daysCount: number } };

export const analytics = {
  track(event: AnalyticsEvent) {
    // Only track if consent was explicitly granted
    if (typeof window === "undefined") return;

    try {
      const consentStr = localStorage.getItem("apna_tour_consent");
      if (!consentStr) return; // No consent given yet

      const consent = JSON.parse(consentStr);
      if (!consent.analytics) return; // Analytics rejected

      // Provider abstraction
      const provider = process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER || "custom-internal";

      if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics Event - ${provider}]`, event.name, event.properties);
      }

      // If third-party script is configured (e.g. Plausible or Posthog)
      if (typeof (window as unknown as { plausible?: (name: string, opts: object) => void }).plausible === "function") {
        (window as unknown as { plausible: (name: string, opts: object) => void }).plausible(event.name, {
          props: event.properties,
        });
      }
    } catch {
      // Graceful fallback
    }
  },
};
