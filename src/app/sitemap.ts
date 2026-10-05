import { MetadataRoute } from "next";
import { travelService } from "@/services/travelService";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apnatour.in";

  const staticRoutes = [
    "",
    "/india",
    "/destinations",
    "/places",
    "/food",
    "/experiences",
    "/stories",
    "/itineraries",
    "/search",
    "/about",
    "/contact",
    "/write-for-us",
    "/privacy",
    "/terms",
    "/cookie-policy",
    "/grievance",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic States
  const stateRoutes = travelService.getStates().map((state) => ({
    url: `${baseUrl}/india/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Dynamic Cities
  const cityRoutes = travelService.getCities().map((city) => ({
    url: `${baseUrl}/india/${city.stateSlug}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dynamic Places
  const placeRoutes = travelService.getPlaces().map((place) => ({
    url: `${baseUrl}/india/${place.stateSlug}/${place.citySlug}/${place.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic Food Trails
  const foodRoutes = travelService.getCities().map((city) => ({
    url: `${baseUrl}/food/${city.stateSlug}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // Dynamic Stories
  const storyRoutes = travelService.getStories().map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: new Date(story.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...staticRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...placeRoutes,
    ...foodRoutes,
    ...storyRoutes,
  ];
}
