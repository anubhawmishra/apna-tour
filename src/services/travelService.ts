import {
  STATES,
  CITIES,
  PLACES,
  FOOD_SPOTS,
  EXPERIENCES,
  STORIES,
  ITINERARIES,
  AUTHORS,
} from "@/data/travelData";
import {
  StateData,
  CityData,
  PlaceData,
  FoodSpotData,
  ExperienceData,
  StoryData,
  ItineraryData,
  Author,
  Region,
} from "@/types";

export const travelService = {
  // States
  getStates(): StateData[] {
    return STATES;
  },
  getStateBySlug(slug: string): StateData | undefined {
    return STATES.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
  },
  getStatesByRegion(region: Region): StateData[] {
    return STATES.filter((s) => s.region === region);
  },

  // Cities
  getCities(): CityData[] {
    return CITIES;
  },
  getCityBySlug(stateSlug: string, citySlug: string): CityData | undefined {
    return CITIES.find(
      (c) =>
        c.stateSlug.toLowerCase() === stateSlug.toLowerCase() &&
        c.slug.toLowerCase() === citySlug.toLowerCase()
    );
  },
  getCitiesByState(stateSlug: string): CityData[] {
    return CITIES.filter(
      (c) => c.stateSlug.toLowerCase() === stateSlug.toLowerCase()
    );
  },

  // Places
  getPlaces(): PlaceData[] {
    return PLACES;
  },
  getFeaturedPlaces(): PlaceData[] {
    return PLACES.filter((p) => p.isFeatured);
  },
  getHiddenGems(): PlaceData[] {
    return PLACES.filter((p) => p.isHiddenGem);
  },
  getPlaceBySlug(
    stateSlug: string,
    citySlug: string,
    placeSlug: string
  ): PlaceData | undefined {
    return PLACES.find(
      (p) =>
        p.stateSlug.toLowerCase() === stateSlug.toLowerCase() &&
        p.citySlug.toLowerCase() === citySlug.toLowerCase() &&
        p.slug.toLowerCase() === placeSlug.toLowerCase()
    );
  },
  getPlacesByCity(citySlug: string): PlaceData[] {
    return PLACES.filter(
      (p) => p.citySlug.toLowerCase() === citySlug.toLowerCase()
    );
  },
  getPlacesByState(stateSlug: string): PlaceData[] {
    return PLACES.filter(
      (p) => p.stateSlug.toLowerCase() === stateSlug.toLowerCase()
    );
  },
  getPlacesByCategory(category: string): PlaceData[] {
    return PLACES.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  },

  // Food
  getFoodSpots(): FoodSpotData[] {
    return FOOD_SPOTS;
  },
  getFoodSpotsByCity(citySlug: string): FoodSpotData[] {
    return FOOD_SPOTS.filter(
      (f) => f.citySlug.toLowerCase() === citySlug.toLowerCase()
    );
  },
  getFoodSpotsByState(stateSlug: string): FoodSpotData[] {
    return FOOD_SPOTS.filter(
      (f) => f.stateSlug.toLowerCase() === stateSlug.toLowerCase()
    );
  },

  // Experiences
  getExperiences(): ExperienceData[] {
    return EXPERIENCES;
  },
  getFeaturedExperiences(): ExperienceData[] {
    return EXPERIENCES.filter((e) => e.isFeatured);
  },
  getExperienceBySlug(slug: string): ExperienceData | undefined {
    return EXPERIENCES.find((e) => e.slug.toLowerCase() === slug.toLowerCase());
  },
  getExperiencesByState(stateSlug: string): ExperienceData[] {
    return EXPERIENCES.filter(
      (e) => e.stateSlug.toLowerCase() === stateSlug.toLowerCase()
    );
  },
  getExperiencesByCity(citySlug: string): ExperienceData[] {
    return EXPERIENCES.filter(
      (e) => e.citySlug?.toLowerCase() === citySlug.toLowerCase()
    );
  },

  // Stories
  getStories(): StoryData[] {
    return STORIES;
  },
  getFeaturedStories(): StoryData[] {
    return STORIES.filter((s) => s.isFeatured);
  },
  getStoryBySlug(slug: string): StoryData | undefined {
    return STORIES.find((s) => s.slug.toLowerCase() === slug.toLowerCase());
  },
  getStoriesByState(stateSlug: string): StoryData[] {
    return STORIES.filter(
      (s) => s.stateSlug?.toLowerCase() === stateSlug.toLowerCase()
    );
  },

  // Itineraries
  getItineraries(): ItineraryData[] {
    return ITINERARIES;
  },
  getCuratedItineraries(): ItineraryData[] {
    return ITINERARIES.filter((i) => i.isCurated);
  },
  getItineraryBySlug(slug: string): ItineraryData | undefined {
    return ITINERARIES.find((i) => i.slug.toLowerCase() === slug.toLowerCase());
  },

  // Authors
  getAuthorBySlug(slug: string): Author | undefined {
    return Object.values(AUTHORS).find((a) => a.slug === slug);
  },

  // Universal Search
  search(query: string) {
    const q = query.trim().toLowerCase();
    if (!q) return { places: [], cities: [], states: [], food: [], experiences: [], stories: [] };

    const matches = (text: string) => text.toLowerCase().includes(q);

    const states = STATES.filter(
      (s) => matches(s.name) || matches(s.tagline) || matches(s.capital)
    );

    const cities = CITIES.filter(
      (c) =>
        matches(c.name) ||
        matches(c.stateName) ||
        matches(c.tagline) ||
        c.knownFor.some((k) => matches(k))
    );

    const places = PLACES.filter(
      (p) =>
        matches(p.name) ||
        matches(p.cityName) ||
        matches(p.stateName) ||
        matches(p.tagline) ||
        matches(p.category) ||
        p.highlights.some((h) => matches(h))
    );

    const food = FOOD_SPOTS.filter(
      (f) =>
        matches(f.name) ||
        matches(f.cuisine) ||
        matches(f.category) ||
        matches(f.cityName) ||
        f.mustTryDishes.some((d) => matches(d))
    );

    const experiences = EXPERIENCES.filter(
      (e) =>
        matches(e.title) ||
        matches(e.theme) ||
        matches(e.stateName) ||
        matches(e.summary)
    );

    const stories = STORIES.filter(
      (s) =>
        matches(s.title) ||
        matches(s.subtitle) ||
        matches(s.category) ||
        s.tags.some((t) => matches(t))
    );

    return { states, cities, places, food, experiences, stories };
  },
};
