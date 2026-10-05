import {
  Author,
  StateData,
  CityData,
  FoodSpotData,
  ExperienceData,
  StoryData,
  ItineraryData,
} from "@/types";

export const AUTHORS: Record<string, Author> = {
  arundhati: {
    id: "auth-1",
    name: "Arundhati Sengupta",
    slug: "arundhati-sengupta",
    title: "Editorial Director & Heritage Researcher",
    bio: "Writing about architectural history, indigenous craft corridors, and slow overland journeys across peninsular India for over 12 years.",
    location: "Pune / Mumbai",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  },
  raghav: {
    id: "auth-2",
    name: "Raghavendra Nambiar",
    slug: "raghavendra-nambiar",
    title: "Regional Food Historian & Cultural Essayist",
    bio: "Documenting subcontinental micro-cuisines, temple cooking traditions, and vintage tea houses from the Malabar coast to the Gangetic plains.",
    location: "Kochi / Bengaluru",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
  },
  tenzin: {
    id: "auth-3",
    name: "Devika Sharma",
    slug: "devika-sharma",
    title: "Himalayan Field Chronicler",
    bio: "Specializing in high-altitude communities, cedar forest geography, and monastic trails across Himachal Pradesh and Ladakh.",
    location: "Dharamshala",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
};

export const STATES: StateData[] = [
  {
    id: "state-up",
    name: "Uttar Pradesh",
    slug: "uttar-pradesh",
    capital: "Lucknow",
    region: "NORTH",
    tagline: "The sacred Gangetic heartland, ancient spiritual riverfronts, and living philosophical traditions.",
    overview:
      "Uttar Pradesh is the cradle of classical Indian civilization along the sacred plains of the Ganga and Yamuna. From the eternal 3,000-year-old riverfront ghats of Kashi (Varanasi) to the ancient deer park of Sarnath where the Buddha turned the wheel of dharma, Uttar Pradesh offers unmatched depth of spiritual heritage, classical music, and living craftsmanship.",
    heroImage:
      "/images/places/dashashwamedh-ghat/hero.jpg",
    bestTimeToVisit: "October to March. Winter brings crisp mornings, gentle river mist, and ideal temperatures for exploring the ghats and monuments.",
    idealDuration: "5 to 8 days",
    peakSeason: "WINTER",
    highlights: [
      "Subah-e-Banaras dawn wooden boat rides along the 84 sacred ghats of Varanasi",
      "The synchronized evening Ganga Aarti at Dashashwamedh Ghat",
      "Dhamek Stupa and Ashokan pillar capital site at Sarnath",
      "Centuries-old jacquard handloom silk weaving in the gallis of Madanpura",
    ],
    travelTips: [
      "Book early morning dawn boat rides with licensed local boatmen at Assi or Dashashwamedh Ghat.",
      "Wear comfortable walking shoes with traction; the stone ghats and narrow alleys are best explored on foot.",
    ],
    faqs: [
      {
        question: "When is the best time to experience Varanasi's riverfront?",
        answer:
          "Dawn (5:30 AM to 7:30 AM) offers the most serene experience with morning mist, temple bells, and peaceful boat rides before daytime crowds arrive.",
      },
    ],
  },
  {
    id: "state-mh",
    name: "Maharashtra",
    slug: "maharashtra",
    capital: "Mumbai",
    region: "WEST",
    tagline: "Rugged Sahyadri crests, historic hill forts, and coastal Konkan rhythms.",
    overview:
      "Maharashtra stretches from the dramatic basalt cliffs of the Western Ghats down to the tropical Arabian Sea coastline. It is a land shaped by Maratha fortification architecture, historic Peth settlements, vibrant monsoon trekking trails, and an electric culinary tapestry spanning fiery Kolhapuri spices to delicate coastal Malvani seafood.",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1600&q=85",
    bestTimeToVisit: "October to March (for pleasant heritage walks); July to September (for mist-covered Sahyadri monsoon greenery).",
    idealDuration: "7 to 10 days",
    peakSeason: "WINTER",
    highlights: [
      "Centuries-old Sahyadri hill fort trails built by Chhatrapati Shivaji Maharaj",
      "UNESCO World Heritage cave architectures of Ajanta and Ellora",
      "Intricate old town street-grid Peths of Pune",
      "Pristine Konkan coastline fringed with betel nut groves and red laterite soil",
    ],
    travelTips: [
      "Carry sturdy trekking shoes if visiting between July and September; basalt fort steps become slippery with moss.",
      "Intercity train connections (Deccan Queen, Vande Bharat) between Mumbai and Pune offer scenic ghat crossing views.",
      "Sample local thalis in smaller traditional bhojanalayas rather than multi-cuisine highway diners.",
    ],
    faqs: [
      {
        question: "When is the best season to hike Maharashtra's forts?",
        answer:
          "Monsoon months (July through September) bring misty waterfalls and lush plateau meadows, while November to February offers crisp mornings and dry walking paths.",
      },
      {
        question: "How easy is it to navigate public transport between cities?",
        answer:
          "Maharashtra has one of India's densest rail and expressway corridors. Frequent state transport (MSRTC Shivneri buses) and express trains connect Mumbai, Pune, and regional hubs smoothly.",
      },
    ],
  },
  {
    id: "state-rj",
    name: "Rajasthan",
    slug: "rajasthan",
    capital: "Jaipur",
    region: "NORTH",
    tagline: "Living desert citadels, miniature painting ateliers, and timeless stone craft.",
    overview:
      "Rajasthan is not merely a land of palaces; it is an open-air archive of desert hydrology, defensive stone masonry, and centuries-old artisan guilds. From the pink dholpur sandstone facades of Jaipur to the tranquil lake mirrors of Udaipur and the Thar desert sandscapes, Rajasthan rewards slow, attentive exploration.",
    heroImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=85",
    bestTimeToVisit: "October to March. Winter days are clear, temperate, and ideal for palace walks and desert safaris.",
    idealDuration: "8 to 12 days",
    peakSeason: "WINTER",
    highlights: [
      "Precision astronomical geometry at Jantar Mantar",
      "Lake-facing Mewar palaces in Udaipur",
      "Traditional natural dye block-printing workshops in Bagru and Sanganer",
      "Desert fortress ramparts overlooking undulating Thar dunes",
    ],
    travelTips: [
      "Begin visits to major forts like Amber or Mehrangarh at opening hour (8:00 AM) to experience the courtyards in quiet morning light.",
      "Wear breathable cottons even in winter afternoons; midday sun remains bright in the desert belt.",
    ],
    faqs: [
      {
        question: "Is Rajasthan suitable for independent travellers?",
        answer:
          "Extremely so. Auto-rickshaws, licensed heritage guides, and walkable old-city lanes make self-guided exploration straightforward.",
      },
    ],
  },
  {
    id: "state-kl",
    name: "Kerala",
    slug: "kerala",
    capital: "Thiruvananthapuram",
    region: "SOUTH",
    tagline: "Slow backwater waterways, cardamom-scented cloud hills, and colonial port trade.",
    overview:
      "Kerala unfolds between the high tropical rain shadows of the Western Ghats and the Arabian Sea. It is defined by slow-moving emerald backwaters, spice plantations clinging to steep mountain contours, centuries of maritime trade history in Fort Kochi, and a rich performing arts tradition including Kathakali and Theyyam.",
    heroImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
    bestTimeToVisit: "September to March for calm backwaters and pleasant weather; June to August for traditional Ayurvedic monsoons.",
    idealDuration: "6 to 9 days",
    peakSeason: "WINTER",
    highlights: [
      "Heritage spice warehouses, Dutch palaces, and Chinese fishing nets of Fort Kochi",
      "High-altitude orthodox tea gardens in Munnar",
      "Quiet village canoe trails through Vembanad Lake canals",
      "Traditional Sadya feasts served on fresh banana leaves",
    ],
    travelTips: [
      "Choose village country boat or canoe tours over large diesel houseboats for a closer, eco-conscious look at backwater life.",
      "The winding mountain road from Kochi to Munnar takes roughly 4 hours; travel during daylight for breathtaking waterfall viewpoints.",
    ],
  },
  {
    id: "state-hp",
    name: "Himachal Pradesh",
    slug: "himachal-pradesh",
    capital: "Shimla",
    region: "NORTH",
    tagline: "Towering cedar forests, quiet Buddhist gompas, and apple orchard valleys.",
    overview:
      "Tucked beneath the snow-crested Dhauladhar and Pir Panjal ranges, Himachal Pradesh balances colonial pine-fringed hill stations with ancient Tibetan monastic centers and apple-orchard terraces. It is a refuge of clean mountain air, handloom wool traditions, and serene valley trails.",
    heroImage:
      "/images/places/viceregal-lodge/hero.jpg",
    bestTimeToVisit: "March to June for pleasant summer weather; October to February for crisp mountain air and snow.",
    idealDuration: "7 to 10 days",
    peakSeason: "SUMMER",
    highlights: [
      "The Tsuglagkhang Buddhist complex and Dalai Lama Temple in McLeod Ganj",
      "Colonial architectural archives at the Viceregal Lodge in Shimla",
      "Old cedar walking trails through the Kangra Valley",
      "Orchard homestays in quiet upper Himachal hamlets",
    ],
    travelTips: [
      "Allow at least 24 hours to acclimatize if ascending above 2,500 meters.",
      "Avoid driving through high mountain passes during heavy monsoon weeks in late July and August.",
    ],
  },
  {
    id: "state-tn",
    name: "Tamil Nadu",
    slug: "tamil-nadu",
    capital: "Chennai",
    region: "SOUTH",
    tagline: "Millennia of Dravidian temple architecture, jasmine bazaars, and classical arts.",
    overview:
      "Tamil Nadu is one of the world's great living civilization centers. Towering gopurams carved with tens of thousands of mythological figures anchor ancient temple towns like Madurai and Thanjavur, while fragrant jasmine markets, filter coffee counters, and handwoven Kanjeevaram silk looms create an unmatched sensory landscape.",
    heroImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=85",
    bestTimeToVisit: "November to March. Winter temperatures remain pleasant for exploring vast granite courtyards.",
    idealDuration: "7 to 11 days",
    peakSeason: "WINTER",
    highlights: [
      "The awe-inspiring concentric gopurams of Meenakshi Amman Temple in Madurai",
      "UNESCO Great Living Chola Temples of Thanjavur, Gangaikonda Cholapuram, and Darasuram",
      "Chettinad heritage mansions and distinct spice-rich heritage cuisine",
      "Coromandel coastal walks and classical Carnatic music sabhas",
    ],
    travelTips: [
      "Temple sanctums enforce traditional dress codes (dhoti/pant and modest attire; leather accessories usually not permitted).",
      "Wake early (before 6:30 AM) to experience the temple rituals in serene morning coolness.",
    ],
  },
];

export const CITIES: CityData[] = [
  {
    id: "city-pune",
    name: "Pune",
    slug: "pune",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    tagline: "The cultural heart of Maharashtra: shaded cantonment boulevards, Maratha peths, and morning misal rituals.",
    overview:
      "Set against the rugged contours of the Sahyadri mountains, Pune holds a quiet dignity. Once the administrative seat of the Peshwas, it is today a city of bookshops, classic Irani bakeries, sprawling university campuses, and historic residential 'wadas'. Life here starts early with morning climbs up Tekdi and steaming bowls of spicy sprouted-lentil misal.",
    heroImage:
      "/images/places/shaniwar-wada/hero.jpg",
    bestTime: "October to March; July to September for misty weekend ghat drives.",
    idealDays: 2,
    knownFor: ["Maratha Forts", "Old Peth Walks", "Puneri Misal", "Osho Park & Koregaon Park", "Cultural Theatres"],
  },
  {
    id: "city-mumbai",
    name: "Mumbai",
    slug: "mumbai",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    tagline: "A coastal metropolis of Victorian Gothic stone, Art Deco sea fronts, and storied Irani cafes.",
    overview:
      "Built over seven reclaimed islands, Mumbai is India's financial dynamo yet profoundly historic. South Mumbai holds the world's second-largest concentration of Art Deco architecture, alongside majestic Victorian Gothic public buildings, fragrant Sassoon Docks, and coastal promenades where the city gathers at dusk.",
    heroImage:
      "/images/places/colaba-walk/hero.jpg",
    bestTime: "November to February",
    idealDays: 3,
    knownFor: ["Colaba Heritage Walk", "Marine Drive Art Deco", "Irani Cafes", "Kala Ghoda Art Precinct", "Elephanta Caves"],
  },
  {
    id: "city-jaipur",
    name: "Jaipur",
    slug: "jaipur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    tagline: "The planned pink city of Rajput kings, geometric observatories, and artisan bazaars.",
    overview:
      "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur was planned strictly according to Vastu Shastra and ancient grid principles. Behind its salmon-pink stone gates lie specialized craft lanes, monumental hilltop fortresses, and palace courtyards that capture the sunlight with quiet grandeur.",
    heroImage:
      "/images/places/hawa-mahal/hero.jpg",
    bestTime: "October to March",
    idealDays: 3,
    knownFor: ["Amber Fort", "Hawa Mahal", "Jantar Mantar", "Block Printing Ateliers", "Pyaaz Kachori"],
  },
  {
    id: "city-udaipur",
    name: "Udaipur",
    slug: "udaipur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    tagline: "Mirror-calm lakes, white marble courtyards, and sunset ghats of Mewar.",
    overview:
      "Framed by the ancient Aravalli Hills, Udaipur centers on Lake Pichola and its regal island palaces. Built as the historical capital of the kingdom of Mewar, it remains one of India's most romantic and visually harmonious historic cities, where evening flutists play on Ambrai Ghat as the water reflects golden lamp light.",
    heroImage:
      "/images/places/city-palace-udaipur/hero.jpg",
    bestTime: "October to March",
    idealDays: 3,
    knownFor: ["Lake Pichola", "City Palace Complex", "Jagmandir", "Miniature Painting", "Rooftop Mewari Dining"],
  },
  {
    id: "city-kochi",
    name: "Kochi",
    slug: "kochi",
    stateSlug: "kerala",
    stateName: "Kerala",
    tagline: "Colonial spice warehouses, Chinese fishing nets, and the historic Jewish Quarter.",
    overview:
      "Kochi has welcomed Portuguese sailors, Dutch merchants, Arab traders, and Chinese diplomats for over six centuries. In Fort Kochi and Mattancherry, the smell of drying black pepper and cloves still drifts from colonial warehouse lofts, while contemporary art galleries thrive inside restored heritage villas.",
    heroImage:
      "/images/places/fort-kochi-heritage/hero.jpg",
    bestTime: "October to March",
    idealDays: 3,
    knownFor: ["Chinese Fishing Nets", "Jew Town & Paradesi Synagogue", "Mattancherry Palace", "Kochi-Muziris Biennale", "Malabar Seafood"],
  },
  {
    id: "city-munnar",
    name: "Munnar",
    slug: "munnar",
    stateSlug: "kerala",
    stateName: "Kerala",
    tagline: "Rolling tea plantations, misty mountain passes, and endangered Nilgiri tahr sanctuaries.",
    overview:
      "Perched at 1,600 meters in the Kannan Devan Hills of Kerala, Munnar was once the summer retreat of the British administration in South India. Today it is an undulating green carpet of manicured tea estates, eucalyptus forests, cool mountain streams, and crisp morning air.",
    heroImage:
      "/images/places/eravikulam-sanctuary/hero.jpg",
    bestTime: "September to May",
    idealDays: 2,
    knownFor: ["Kolukkumalai Tea Estate", "Eravikulam Sanctuary", "Top Station Pass", "Cardamom Trails", "Handmade Chocolates"],
  },
  {
    id: "city-shimla",
    name: "Shimla",
    slug: "shimla",
    stateSlug: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    tagline: "The storied British summer capital tucked along a pine-crested Himalayan ridge.",
    overview:
      "Built along a crescent-shaped mountain ridge at 2,200 meters, Shimla retains distinctive timber-framed colonial architecture, pedestrian-only heritage mall roads, and sweeping panoramas of snow-dusted Himalayan peaks across the Shivaliks.",
    heroImage:
      "/images/places/viceregal-lodge/hero.jpg",
    bestTime: "March to June; December to February for winter snow.",
    idealDays: 2,
    knownFor: ["The Ridge & Mall Road", "Viceregal Lodge", "Kalka-Shimla Toy Train", "Jakhoo Temple Pine Trail", "Himachali Dham"],
  },
  {
    id: "city-dharamshala",
    name: "Dharamshala",
    slug: "dharamshala",
    stateSlug: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    tagline: "The cedar-scented seat of Tibetan Buddhism in the shadow of the Dhauladhar crags.",
    overview:
      "Divided between Lower Dharamshala and Upper Dharamshala (McLeod Ganj), this mountain enclave is the spiritual home of the Tibetan exile community and His Holiness the Dalai Lama. Prayer flags flutter among high deodar trees, and monastic chanting echoes through quiet pine valleys.",
    heroImage:
      "/images/places/tsuglagkhang-complex/hero.jpg",
    bestTime: "March to June; September to November.",
    idealDays: 3,
    knownFor: ["Tsuglagkhang Complex", "Norbulingka Tibetan Institute", "Bhagsunag Waterfall Walk", "Thangka Painting", "Tibetan Momos & Thukpa"],
  },
  {
    id: "city-madurai",
    name: "Madurai",
    slug: "madurai",
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    tagline: "The 2,500-year-old temple city celebrated for Dravidian stone towers and jasmine blossoms.",
    overview:
      "Madurai is one of the oldest continuously inhabited cities on earth. Arranged in concentric lotus-petal streets around the colossal Meenakshi Amman Temple, it is a city of vivid living culture: priest processions, brass bell makers, fragrant Madurai malli jasmine markets, and legendary late-night street food joints.",
    heroImage:
      "/images/places/meenakshi-temple/hero.jpg",
    bestTime: "October to March",
    idealDays: 2,
    knownFor: ["Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Jasmine Flower Market", "Ghee Podi Idlis", "Jigarthanda"],
  },
  {
    id: "city-varanasi",
    name: "Varanasi",
    slug: "varanasi",
    stateSlug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    tagline: "The eternal spiritual riverfront along the sacred Ganga: dawn boat rites, silk looms, and ancient alleyways.",
    overview:
      "Known traditionally as Kashi ('City of Light'), Varanasi is an unmatched human spectacle. Life and eternity meet along its eighty-four stone ghats. Dawn unfolds with Vedic prayers and wooden oars dipping into the mist, while the deep, maze-like gallis hide family-run brass shops, sweet makers, and centuries-old Banarasi silk looms.",
    heroImage:
      "/images/places/dashashwamedh-ghat/hero.jpg",
    bestTime: "October to March",
    idealDays: 3,
    knownFor: ["Ganga Sunrise Boat Rites", "Ganga Aarti at Dashashwamedh", "Banarasi Silk Weaving", "Kashi Vishwanath Corridor", "Banarasi Paan & Malaiyo"],
  },
];

export { PLACES } from "./placesData";

export const FOOD_SPOTS: FoodSpotData[] = [
  {
    id: "food-kata-kirr",
    name: "Kata Kirr Misal",
    slug: "kata-kirr-misal",
    citySlug: "pune",
    cityName: "Pune",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    cuisine: "Maharashtrian",
    category: "Street Food Legend",
    mustTryDishes: ["Medium/Tikhhat Misal Pav", "Mattha (Spiced Buttermilk)", "Kanda Bhaji"],
    priceTier: "BUDGET",
    heroImage:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    description:
      "A quintessential Pune breakfast institution. Kata Kirr serves its fiery, aromatic rassa (tarri) in distinctive copper pots, poured over sprouted matki, crunchy farsan, and finely diced onions, balanced with cooling earthenware buttermilk.",
    neighborhood: "Erandwane / Karve Road",
    storyNote: "Known for three heat levels: Tikhat (fiery), Medium, and Hirva (mild green chili). Arrive before 10 AM to avoid Sunday queues.",
    isVerified: true,
  },
  {
    id: "food-chitale-bandhu",
    name: "Chitale Bandhu Mithaiwale",
    slug: "chitale-bandhu",
    citySlug: "pune",
    cityName: "Pune",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    cuisine: "Maharashtrian Snacks & Sweets",
    category: "Traditional Sweet House",
    mustTryDishes: ["Puneri Bakarwadi", "Amba Barfi", "Shrikhand", "Poha Chivda"],
    priceTier: "MODERATE",
    heroImage:
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    description:
      "Founded in 1950, Chitale Bandhu is the gold standard for Puneri snacks. Their spiral, spice-packed Bakarwadi—crisp gram flour roll stuffed with coconut, sesame, and poppy seed filling—is an edible legend exported worldwide.",
    neighborhood: "Bajirao Road & Deccan Gymkhana",
    storyNote: "The historic afternoon break ritual (1:00 PM – 4:00 PM) was famously practiced here for decades. The modern stores maintain legendary packaging speed.",
    isVerified: true,
  },
  {
    id: "food-britannia-co",
    name: "Britannia & Co. Restaurant",
    slug: "britannia-co",
    citySlug: "mumbai",
    cityName: "Mumbai",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    cuisine: "Parsi & Irani",
    category: "Heritage Cafe",
    mustTryDishes: ["Berry Pulao", "Mutton Sali Boti", "Caramel Custard", "Raspberry Soda"],
    priceTier: "MODERATE",
    heroImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    description:
      "Opened in 1923 inside a heritage stone building in Ballard Estate, Britannia is Mumbai's most storied Parsi dining hall. Its sour-sweet Berry Pulao, topped with tart barberries sourced from Iran and slow-cooked meat, remains unmatched.",
    neighborhood: "Ballard Estate, South Mumbai",
    storyNote: "Bentwood chairs imported from Poland in the 1920s still furnish the tall-ceilinged dining room under vintage ceiling fans.",
    isVerified: true,
  },
  {
    id: "food-rawat-mishthan",
    name: "Rawat Mishthan Bhandar",
    slug: "rawat-mishthan",
    citySlug: "jaipur",
    cityName: "Jaipur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    cuisine: "Rajasthani Savories & Sweets",
    category: "Street Food Legend",
    mustTryDishes: ["Pyaaz Ki Kachori", "Mawa Kachori", "Mirchi Vada", "Rabdi Ghevar"],
    priceTier: "BUDGET",
    heroImage:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description:
      "For over seventy years, Rawat has been Jaipur's premier stop for blistering-hot Pyaaz Kachoris—flaky, golden pastry parcels filled with caramelized spiced onions and served fresh out of massive iron woks.",
    neighborhood: "Station Road, Sindhi Camp",
    storyNote: "Over 10,000 kachoris are fried daily. Travelers regularly pick up boxes here on their way to Jaipur Junction railway station.",
    isVerified: true,
  },
  {
    id: "food-laxmi-misthan",
    name: "LMB (Laxmi Misthan Bhandar)",
    slug: "lmb-jaipur",
    citySlug: "jaipur",
    cityName: "Jaipur",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    cuisine: "Traditional Rajasthani & Marwari",
    category: "Traditional Sweet House",
    mustTryDishes: ["Honeycomb Paneer Ghevar", "Rajasthani Royal Thali", "Doodh Laddoo"],
    priceTier: "MODERATE",
    heroImage:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    description:
      "Established in 1727 in the Johari Bazaar, LMB is renowned for preserving ancient Marwari confectionery traditions. Their Paneer Ghevar, a porous disc soaked in aromatic saffron syrup, is celebrated across India.",
    neighborhood: "Johari Bazaar, Pink City",
    storyNote: "Located right in the heart of the gemstone and jewelry market. The restaurant inside also serves authentic, unlimited Rajasthani thalis.",
    isVerified: true,
  },
  {
    id: "food-kashi-cafe",
    name: "Kashi Art Cafe",
    slug: "kashi-cafe",
    citySlug: "kochi",
    cityName: "Kochi",
    stateSlug: "kerala",
    stateName: "Kerala",
    cuisine: "Cafe & Contemporary Continental-Kerala",
    category: "Heritage Cafe",
    mustTryDishes: ["Hot Chocolate Cake", "Kerala Roast Coffee", "Poached Eggs on Sourdough", "Fresh Iced Tea"],
    priceTier: "MODERATE",
    heroImage:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
    description:
      "Set in a restored Dutch townhouse with an open-to-sky courtyard dotted with contemporary art installations, Kashi is the cultural living room of Fort Kochi, beloved by artists, writers, and travellers.",
    neighborhood: "Burgher Street, Fort Kochi",
    storyNote: "The cafe acts as an active exhibition gallery rotating works by contemporary South Asian sculptors and painters.",
    isVerified: true,
  },
  {
    id: "food-rapsy-munnar",
    name: "Rapsy Restaurant",
    slug: "rapsy-munnar",
    citySlug: "munnar",
    cityName: "Munnar",
    stateSlug: "kerala",
    stateName: "Kerala",
    cuisine: "Kerala & Malabar",
    category: "Street Food Legend",
    mustTryDishes: ["Kerala Parotta with Beef/Chicken Roast", "Spanish Omelette", "Cardamom Spiced Chai"],
    priceTier: "BUDGET",
    heroImage:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description:
      "A rustic, no-frills travelers' haunt in Munnar's main bazaar. Famous for flaky, hand-tossed Malabar parottas served with rich black-pepper roasted curries and warming ginger cardamom tea after cold mountain hikes.",
    neighborhood: "Main Bazaar, Munnar Town",
    storyNote: "A tiny dining hall that has been a favorite backpacker and tea-planter pitstop since the late 1980s.",
    isVerified: true,
  },
  {
    id: "food-wake-and-bake",
    name: "Wake & Bake Cafe",
    slug: "wake-and-bake",
    citySlug: "shimla",
    cityName: "Shimla",
    stateSlug: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    cuisine: "Mountain Cafe & Bakery",
    category: "Heritage Cafe",
    mustTryDishes: ["Wild Mushroom & Herb Crepe", "Fresh Apple Tart", "Espresso", "Hummus & Pita"],
    priceTier: "MODERATE",
    heroImage:
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80",
    description:
      "Perched on the upper floor of a timber building on Shimla Mall Road, this cozy cafe features yellow pine bench seating, curated indie books, and wide bay windows overlooking the bustling promenade below.",
    neighborhood: "The Mall, Shimla",
    storyNote: "Bakes fresh tarts daily using seasonal apples and pears harvested from nearby Kotgarh orchards.",
    isVerified: true,
  },
  {
    id: "food-murugan-idli",
    name: "Murugan Idli Shop",
    slug: "murugan-idli",
    citySlug: "madurai",
    cityName: "Madurai",
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    cuisine: "Traditional Tamil Vegetarian",
    category: "Regional Thali",
    mustTryDishes: ["Podi Idli with Desi Ghee", "Crispy Medu Vada", "Four-Chutney Platter", "Degree Filter Coffee"],
    priceTier: "BUDGET",
    heroImage:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    description:
      "Born near the Meenakshi Temple in Madurai, Murugan Idli redefined South Indian breakfast standards. Their signature idlis are cloud-soft, doused in roasted gun-powder podi and aromatic hot ghee, served on fresh banana leaves with four distinct chutneys.",
    neighborhood: "West Masi Street, Madurai",
    storyNote: "The four chutneys served here include coconut, spicy tomato, fresh mint, and coriander-garlic.",
    isVerified: true,
  },
  {
    id: "food-blue-lassi-varanasi",
    name: "Blue Lassi Shop",
    slug: "blue-lassi",
    citySlug: "varanasi",
    cityName: "Varanasi",
    stateSlug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    cuisine: "Traditional Banarasi Dairy & Lassi",
    category: "Street Food Legend",
    mustTryDishes: ["Pomegranate & Pistachio Lassi", "Mango Saffron Lassi", "Seasonal Malaiyo (Winter)"],
    priceTier: "BUDGET",
    heroImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    description:
      "Tucked into an alleyway near Manikarnika Ghat since 1925, Blue Lassi churns thick yogurt by hand in wooden vats, serving it in disposable terracotta kulhads heaped with fresh fruits, rabdi, and crushed pistachios.",
    neighborhood: "Bangali Tola / Manikarnika Gali",
    storyNote: "The tiny walls are wallpapered with passport photographs and hand-written notes left by travellers from over seventy nations.",
    isVerified: true,
  },
];

export const EXPERIENCES: ExperienceData[] = [
  {
    id: "exp-varanasi-dawn",
    title: "Dawn Rowing along the Ancient Ghats of Kashi",
    slug: "dawn-rowing-ganga-varanasi",
    stateSlug: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    citySlug: "varanasi",
    cityName: "Varanasi",
    theme: "Spiritual",
    summary: "Drift past eighty-four historic stone ghats at first light as temple bells and Vedic ragas awaken the riverfront.",
    description:
      "Step into a hand-rowed wooden boat at Assi Ghat in the pre-dawn stillness. As the sun rises across the eastern sandbar, watch the stone riverfront turn pink and amber. You drift quietly past bathers performing surya namaskar, smoking dhuni fires of sadhus, and centuries of Maratha and Rajput riverfront palaces.",
    heroImage:
      "/images/places/dashashwamedh-ghat/hero.jpg",
    seasonRecommended: "WINTER",
    difficulty: "Easy",
    duration: "2 hours",
    tips: [
      "Board between 5:15 AM and 5:45 AM depending on sunrise timings.",
      "Opt for a traditional wooden hand-rowed boat rather than a noisy motorized launch for a peaceful journey.",
      "Bring a warm shawl or light jacket for the chilly river breeze in winter.",
    ],
    isFeatured: true,
  },
  {
    id: "exp-jaipur-block-print",
    title: "Living Block-Print & Natural Dye Workshop in Bagru",
    slug: "bagru-block-printing-workshop",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    citySlug: "jaipur",
    cityName: "Jaipur",
    theme: "Art & Craft",
    summary: "Learn mud-resist Dabu printing and hand-carved teak block stamping directly alongside master Chippa artisans.",
    description:
      "Travel 30 km outside Jaipur to the traditional craft village of Bagru. Here, the Chippa community has practiced natural vegetable dyeing and hand-block printing for over 400 years. Spend an immersive half-day carving trial blocks, dipping textiles into fermented indigo vats, and sun-drying fabric across the riverbed.",
    heroImage:
      "/images/places/amber-fort/hero.jpg",
    seasonRecommended: "WINTER",
    difficulty: "Easy",
    duration: "4.5 hours",
    tips: [
      "Wear clothes you don't mind getting natural dye splatters on.",
      "Bring cash if you wish to buy certified GI-tagged textiles directly from artisan cooperatives.",
    ],
    isFeatured: true,
  },
  {
    id: "exp-munnar-tea-plucking",
    title: "High-Elevation Orthodox Tea Trail & Factory Cupping",
    slug: "high-elevation-tea-trail-munnar",
    stateSlug: "kerala",
    stateName: "Kerala",
    citySlug: "munnar",
    cityName: "Munnar",
    theme: "Nature",
    summary: "Walk with tea pluckers through cloud-shrouded mountain contours and experience professional tea cupping.",
    description:
      "Traverse the emerald hills of the Kannan Devan plateau at dawn with a veteran estate planter. Understand the delicate two-leaves-and-a-bud harvest standard, inspect century-old withering troughs in a working factory, and participate in a guided tasting identifying floral notes in high-grown Nilgiri teas.",
    heroImage:
      "/images/places/kolukkumalai-estate/hero.jpg",
    seasonRecommended: "POST_MONSOON",
    difficulty: "Moderate",
    duration: "3 hours",
    tips: [
      "Sturdy walking shoes are essential as dew makes plantation grass slopes slick.",
      "Avoid wearing perfumes, which interfere with the sensory tea cupping experience.",
    ],
  },
  {
    id: "exp-kochi-heritage-architecture",
    title: "Fort Kochi Colonial Mansions & Ancient Spice Warehouses Walk",
    slug: "fort-kochi-colonial-architecture-walk",
    stateSlug: "kerala",
    stateName: "Kerala",
    citySlug: "kochi",
    cityName: "Kochi",
    theme: "Heritage",
    summary: "An unhurried walking tour through Portuguese, Dutch, and British merchant settlements and spice godowns.",
    description:
      "Explore the coastal lanes of Fort Kochi with an architectural historian. Trace 500 years of colonial trade: from the red-tiled rooflines of Bastion Bungalow to the Dutch Club, ancient rain-tree shaded graveyards, and historic warehouses where cardamom and black pepper are weighed on century-old iron balances.",
    heroImage:
      "/images/places/fort-kochi-heritage/hero.jpg",
    seasonRecommended: "WINTER",
    difficulty: "Easy",
    duration: "2.5 hours",
    tips: [
      "Carry an umbrella or wide-brimmed hat for coastal sun.",
      "Best completed between 8:00 AM and 10:30 AM before humidity rises.",
    ],
  },
  {
    id: "exp-sinhagad-monsoon-hike",
    title: "Monsoon Mist Hike to Sinhagad Fort",
    slug: "sinhagad-monsoon-hike",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    citySlug: "pune",
    cityName: "Pune",
    theme: "Adventure",
    summary: "Ascend the ancient basalt ridge path enveloped in Sahyadri clouds and taste hot village pithla-bhakri.",
    description:
      "A beloved weekend tradition for Punekars. Hike up the rocky trail from Atkarwadi base village as monsoon mists drift through the valleys and seasonal streams cascade over volcanic rock. Reach the summit ramparts for hot tea, spiced thecha, and views of rolling Sahyadri greenery.",
    heroImage:
      "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
    seasonRecommended: "MONSOON",
    difficulty: "Moderate",
    duration: "4 hours",
    tips: [
      "Waterproof your phone and camera gear thoroughly.",
      "Trekking poles provide helpful grip on slippery wet rock sections.",
    ],
    isFeatured: true,
  },
  {
    id: "exp-mumbai-art-deco",
    title: "Marine Drive & Oval Maidan Art Deco Promenade",
    slug: "marine-drive-art-deco-walk",
    stateSlug: "maharashtra",
    stateName: "Maharashtra",
    theme: "Heritage",
    citySlug: "mumbai",
    cityName: "Mumbai",
    summary: "Discover the UNESCO-recognized nautical motifs, rounded balconies, and tropical Art Deco heritage of South Mumbai.",
    description:
      "South Mumbai is home to the world's second-largest collection of Art Deco architecture after Miami. Walk from the gothic silhouette of the University of Mumbai across the Oval Maidan to the sweeping curved apartments of Marine Drive, examining ship-porthole windows, ziggurat crests, and sunburst grills built in the 1930s.",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    seasonRecommended: "WINTER",
    difficulty: "Easy",
    duration: "2 hours",
    tips: [
      "Schedule for 4:30 PM to finish at Marine Drive promenade just in time for sunset over Back Bay.",
    ],
  },
  {
    id: "exp-norbulingka-thangka",
    title: "Tibetan Sacred Thangka Painting Masterclass",
    slug: "norbulingka-thangka-masterclass",
    stateSlug: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    citySlug: "dharamshala",
    cityName: "Dharamshala",
    theme: "Art & Craft",
    summary: "Learn the precise geometric proportions and mineral pigment preparation of classical Tibetan Buddhist art.",
    description:
      "Spend a day in the quiet studios of Norbulingka Institute. Under the guidance of master artists trained in Lhasa, practice the sacred grid system (thigse) used to draw the proportions of the Buddha's face, prepare pigments ground from lapis lazuli and malachite, and paint your own meditative canvas.",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    seasonRecommended: "ALL_YEAR",
    difficulty: "Easy",
    duration: "5 hours",
    tips: [
      "Advance registration required through the institute's office.",
      "Materials and mineral pigments are provided by the master studio.",
    ],
  },
  {
    id: "exp-shimla-cedar-trail",
    title: "Century-Old Himalayan Deodar Forest Ridge Walk",
    slug: "shimla-cedar-forest-trail",
    stateSlug: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    citySlug: "shimla",
    cityName: "Shimla",
    theme: "Nature",
    summary: "A quiet, level pine-forest walking trail from Chotta Shimla toward Mashobra away from tourist crowds.",
    description:
      "Escape the crowded Mall Road onto the shaded bridle paths laid out by forestry officers in the 1890s. Walk beneath soaring deodar cedar trees that release a rich resinous scent in the afternoon sun, accompanied by birdsong and distant glimpses of snow-capped peaks.",
    heroImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    seasonRecommended: "SUMMER",
    difficulty: "Easy",
    duration: "3 hours",
    tips: [
      "Carry binoculars; Himalayan monal and flycatchers are frequently sighted.",
      "Pack water and light refreshments as there are no commercial stalls along the forest track.",
    ],
  },
  {
    id: "exp-madurai-night-procession",
    title: "The Midnight Chariot & Bedchamber Procession of Meenakshi",
    slug: "madurai-midnight-procession",
    stateSlug: "tamil-nadu",
    stateName: "Tamil Nadu",
    citySlug: "madurai",
    cityName: "Madurai",
    theme: "Spiritual",
    summary: "Witness the centuries-old nightly ceremony where Lord Sundareswarar is carried to Goddess Meenakshi's sanctum.",
    description:
      "Each night at 9:00 PM, temple priests carry the silver icon of Sundareswarar in an ornate palanquin, accompanied by drums (melam), blowing of conches, brass trumpets, and smoking silver censers, escorting him through the high granite corridors to Meenakshi's shrine for the night.",
    heroImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    seasonRecommended: "WINTER",
    difficulty: "Easy",
    duration: "1.5 hours",
    tips: [
      "Respect traditional dress codes (dhotis/sarees/modest pants).",
      "Mobile phones and photography are strictly prohibited inside sanctum corridors.",
    ],
  },
  {
    id: "exp-udaipur-sunset-lake",
    title: "Lake Pichola Heritage Boat Journey to Jagmandir Island",
    slug: "udaipur-lake-pichola-sunset-boat",
    stateSlug: "rajasthan",
    stateName: "Rajasthan",
    citySlug: "udaipur",
    cityName: "Udaipur",
    theme: "Heritage",
    summary: "Cruise past the white marble facade of the City Palace to the 17th-century island retreat of Jagmandir.",
    description:
      "Board a vintage solar boat from Rameshwar Ghat as the late afternoon sun casts a golden glow over Udaipur's lakeside havelis and bathing ghats. Arrive at Jagmandir Island, built in yellow sandstone and white marble with life-sized carved stone elephants guarding the dock.",
    heroImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    seasonRecommended: "WINTER",
    difficulty: "Easy",
    duration: "1.5 hours",
    tips: [
      "Book the 4:30 PM boat slot to catch both the sunset over the Aravalli peaks and the evening lighting of the City Palace.",
    ],
  },
];

export const STORIES: StoryData[] = [
  {
    id: "story-1",
    title: "The Morning Mist Over Sinhagad: Why Pune Wakes Up Early on Weekends",
    slug: "morning-mist-over-sinhagad-pune",
    subtitle: "A journey up the ancient basalt trail, where wet deodar mist, Maratha history, and hot pithla-bhakri meet at sunrise.",
    excerpt:
      "The city is at its best before the crowds arrive. Start with breakfast, walk through the old lanes, and leave the afternoon for the places that deserve more time.",
    heroImage:
      "https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.arundhati,
    stateSlug: "maharashtra",
    cityName: "Pune",
    category: "Mountain Trails",
    readingTimeMin: 6,
    publishedAt: "2026-09-18",
    tags: ["Pune", "Maharashtra", "Sahyadri", "Monsoon", "Heritage Forts"],
    isFeatured: true,
    body: [
      {
        type: "paragraph",
        content:
          "In Pune, morning is not merely a time of day; it is a philosophy. Long before the city's tech corridors hum or the shops along Laxmi Road shutter up, the parking lot at the foot of Sinhagad Fort is already half-full. It is 5:30 AM. A light drizzle sweeps across the valley from Khadakwasla, carrying the deep, wet smell of Sahyadri red earth.",
      },
      {
        type: "quote",
        content:
          "You do not climb a Maratha fort for leisure; you climb it to understand how topography was turned into sovereign defense.",
      },
      {
        type: "paragraph",
        content:
          "The stone path up Sinhagad is steep, hewn directly from dark Deccan trap basalt. Centuries of footsteps have smoothed the surfaces, and in the monsoon, miniature waterfalls run over the stair treads. Every few hundred meters, hikers pause not out of exhaustion, but because the clouds part just enough to reveal the silvery expanse of the reservoir below.",
      },
      {
        type: "heading",
        content: "The Kitchens at the Top",
      },
      {
        type: "paragraph",
        content:
          "At the summit plateau, near the memorial of Tanaji Malusare, local women fan wood fires in earthen hearths. There is no printed menu here. You sit on wooden benches under tin awnings as brass plates are placed before you: thick bhakris made from freshly ground jowar, steaming yellow pithla laced with garlic and cumin, fiery green-chili thecha, and earthenware bowls of thick, velvety dahi set overnight.",
      },
      {
        type: "paragraph",
        content:
          "By 8:30 AM, as you begin the descent, you meet the casual tourists heading up. But the true Punekar is already on their way down, refreshed by mountain wind, ready for a second cup of tea in the peths below.",
      },
    ],
  },
  {
    id: "story-2",
    title: "Clay Cups and Slow Currents: 24 Hours Along the Ghats of Banaras",
    slug: "clay-cups-slow-currents-varanasi",
    subtitle: "In the world's oldest living city, eternity is not an abstraction—it is the morning mist on water and the sound of oars.",
    excerpt:
      "Varanasi does not allow you to be a detached observer. Within an hour of walking down its stone steps, the smell of woodsmoke, wet marigolds, and river water pulls you completely into its ancient rhythm.",
    heroImage:
      "/images/places/dashashwamedh-ghat/hero.jpg",
    author: AUTHORS.raghav,
    stateSlug: "uttar-pradesh",
    cityName: "Varanasi",
    category: "Cultural Chronicles",
    readingTimeMin: 7,
    publishedAt: "2026-08-29",
    tags: ["Varanasi", "Ganga", "Spiritual", "Heritage", "Slow Travel"],
    isFeatured: true,
    body: [
      {
        type: "paragraph",
        content:
          "The boatman's name is Ramu, and he has worked these oars since he was fourteen. He dips the heavy wooden paddles into the gray-green surface of the Ganga with a rhythm so steady it feels like breathing. Behind us, the high sandstone ramparts of Chet Singh Ghat catch the very first sliver of dawn.",
      },
      {
        type: "quote",
        content:
          "People come to Banaras to find God or to escape time. Most leave having simply learned how to sit still.",
      },
      {
        type: "paragraph",
        content:
          "From the water, Varanasi looks less like a city and more like a cliff carved by human devotion over three millennia. Each ghat tells a different regional story: Scindia Ghat with its submerged Shiva temple tilted by the weight of its own stone; Darbhanga Ghat with its imposing Bihar palace facade; and Manikarnika, where the fires have burned day and night without interruption for centuries.",
      },
      {
        type: "heading",
        content: "The Alleys of Bangali Tola",
      },
      {
        type: "paragraph",
        content:
          "Leaving the riverfront at midday means stepping into the gallis. These lanes are barely two shoulders wide. Cows brush past with serene indifference. Miniature temples tucked into wall niches smell of fresh camphor. In winter, every small corner shop serves Malaiyo—a delicate, cloud-like foam whipped from milk left out in the overnight dew, flavored with saffron, cardamom, and slivered pistachios.",
      },
    ],
  },
  {
    id: "story-3",
    title: "Beyond the Blue: Quiet Alleys, Miniature Painters, and Mewar Courtyards",
    slug: "beyond-the-blue-mewar-udaipur",
    subtitle: "Looking past the familiar lake postcards into the craft guilds and shaded jharokhas of Udaipur.",
    excerpt:
      "Beyond the marble palaces on Lake Pichola lies an older, quieter city of miniature painters who grind lapis into paint and sit in open doorways watching the light change.",
    heroImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.arundhati,
    stateSlug: "rajasthan",
    cityName: "Udaipur",
    category: "Art & Architecture",
    readingTimeMin: 5,
    publishedAt: "2026-08-14",
    tags: ["Udaipur", "Rajasthan", "Mewar", "Craft", "Palaces"],
    body: [
      {
        type: "paragraph",
        content:
          "Udaipur is famously defined by water, but its spirit resides in stone and pigment. In the narrow alleys behind Jagdish Temple, painters still sit on white cotton mattresses on the floor, holding single-squirrel-hair brushes between their fingers.",
      },
      {
        type: "quote",
        content:
          "A miniature painting is not an image to glance across; it is a miniature universe meant to be held close to the eyes.",
      },
      {
        type: "paragraph",
        content:
          "On a small sheet of handmade wasli paper, an artist renders the garden of Maharana Sangram Singh: tiny gold leaf borders, trees with individually stippled emerald leaves, and running water represented by fine silver lines. This patience is what the city preserves against the rush of modern tourism.",
      },
    ],
  },
  {
    id: "story-4",
    title: "The Spice Scent of Mattancherry: Where Three Hundred Years of Trade Echo",
    slug: "spice-scent-of-mattancherry-kochi",
    subtitle: "Walking past Portuguese archways, Jewish tile floors, and black pepper godowns in Kochi.",
    excerpt:
      "In the shaded godowns of Mattancherry, the air is thick with the scent of crushed black pepper and nutmeg—a sensory reminder of why the world sailed here.",
    heroImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.raghav,
    stateSlug: "kerala",
    cityName: "Kochi",
    category: "Trade & Heritage",
    readingTimeMin: 5,
    publishedAt: "2026-07-22",
    tags: ["Kochi", "Kerala", "Spice Coast", "Colonial History"],
    body: [
      {
        type: "paragraph",
        content:
          "Turn into Jew Town on a weekday afternoon, and you will hear the dry, rhythmic scrape of wooden shovels. In the courtyards of the spice merchants, black pepper berries are turned over in the sun. Men with yellow chalk marks on their foreheads haul burlap sacks marked 'Malabar Garbled Black Pepper Grade 1'.",
      },
      {
        type: "paragraph",
        content:
          "Inside the Paradesi Synagogue down the lane, cool porcelain tiles from Canton provide respite from the humid heat. Outside, the bells of St. Francis Church chime in harmony with the distant call to prayer from the harbour mosque. Kochi does not merely remember diversity; it breathes it as daily life.",
      },
    ],
  },
  {
    id: "story-5",
    title: "Under the Deodar Canopies: Slow Mountain Travel in the Kangra Valley",
    slug: "slow-mountain-travel-kangra-valley",
    subtitle: "High pines, Tibetan scripture wheels, and the quiet silence of upper Himachal Pradesh.",
    excerpt:
      "Away from the crowded souvenir stalls of McLeod Ganj, the Kangra cedar forests offer cold mountain streams, winding stone paths, and genuine Himalayan peace.",
    heroImage:
      "/images/places/tsuglagkhang-complex/hero.jpg",
    author: AUTHORS.tenzin,
    stateSlug: "himachal-pradesh",
    cityName: "Dharamshala",
    category: "Himalayan Diaries",
    readingTimeMin: 6,
    publishedAt: "2026-07-05",
    tags: ["Himachal", "Dharamshala", "Himalayas", "Buddhism", "Nature"],
    body: [
      {
        type: "paragraph",
        content:
          "The deodars of the Dhauladhar foothills are giants. Their branches spread like tiered umbrellas, catching the mountain fog as it ascends from the Kangra plains. Walking the forest trail between Forsyth Ganj and McLeod Ganj, the noise of engines vanishes, replaced by the deep rustle of pine needles underfoot.",
      },
      {
        type: "quote",
        content:
          "The mountain does not give up its secrets to those who hurry through it in an afternoon.",
      },
      {
        type: "paragraph",
        content:
          "In the village of Sidhpur, at the Norbulingka Institute, students sit before timber easels learning to grind malachite into paint. The discipline takes years. In an age of automated images, watching someone spend three days grinding stone in cold spring water is a quiet, powerful revelation.",
      },
    ],
  },
  {
    id: "story-6",
    title: "The Geometry of Sandstone: Uncovering Jaipur's Astrological and Astronomical Marvels",
    slug: "geometry-of-sandstone-jaipur-jantar-mantar",
    subtitle: "How Maharaja Sawai Jai Singh turned classical mathematics into massive stone instruments.",
    excerpt:
      "Jantar Mantar is not a monument of nostalgic ornament; it is a colossal scientific apparatus of marble, brass, and sandstone that tells time to within two seconds.",
    heroImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.arundhati,
    stateSlug: "rajasthan",
    cityName: "Jaipur",
    category: "Art & Architecture",
    readingTimeMin: 5,
    publishedAt: "2026-06-18",
    tags: ["Jaipur", "Rajasthan", "Architecture", "Science", "History"],
    body: [
      {
        type: "paragraph",
        content:
          "Stand before the Samrat Yantra in Jaipur at midday. The shadow of its 27-meter-high gnomon creeps across the white marble quadrant visibly, inch by inch, second by second. This is astronomy built at monumental human scale.",
      },
      {
        type: "paragraph",
        content:
          "Sawai Jai Singh understood that small brass instruments warped and shook in the desert wind. His solution was audacious: cast the observatory in solid red sandstone and local lime mortar so it would remain stable for centuries.",
      },
    ],
  },
  {
    id: "story-7",
    title: "The Forgotten Parsi Cafes of South Bombay: Irani Chai, Bentwood Chairs, and Warm Mutton Puffs",
    slug: "forgotten-parsi-cafes-south-bombay",
    subtitle: "A morning walk through Ballard Estate and Fort, celebrating Mumbai's endangered culinary institutions.",
    excerpt:
      "The mirrored walls are speckled with age, the bentwood chairs creak pleasantly, and the tea arrives piping hot in thick ceramic cups with crusty Brun maska.",
    heroImage:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.raghav,
    stateSlug: "maharashtra",
    cityName: "Mumbai",
    category: "Culinary Heritage",
    readingTimeMin: 5,
    publishedAt: "2026-05-30",
    tags: ["Mumbai", "Parsi Culture", "Irani Cafes", "Heritage Dining"],
    body: [
      {
        type: "paragraph",
        content:
          "In the 1950s, Mumbai boasted several hundred Irani cafes. Today, barely thirty remain. Yet to sit inside Britannia & Co. on a weekday morning is to step outside the frantic rush of corporate Mumbai into a gentler, more conversational century.",
      },
      {
        type: "paragraph",
        content:
          "Dip your crusty brun bread into sweet, milky chai. Listen to the ceiling fan hum against high timber rafters. Here, conversation is not bounded by meeting agendas; it meanders as comfortably as the sea breeze outside.",
      },
    ],
  },
  {
    id: "story-8",
    title: "Tea at 7,000 Feet: Why Kolukkumalai Has the World's Most Dramatic Dawn",
    slug: "tea-at-7000-feet-kolukkumalai-munnar",
    subtitle: "Surviving the 4x4 mountain track to watch the sun rise over an unbroken sea of clouds.",
    excerpt:
      "The jeep journey over boulder tracks shakes every bone, but when you step onto the ridge at 5:45 AM and watch the sunrise ignite the mist, you forget everything.",
    heroImage:
      "/images/places/kolukkumalai-estate/hero.jpg",
    author: AUTHORS.raghav,
    stateSlug: "kerala",
    cityName: "Munnar",
    category: "Mountain Trails",
    readingTimeMin: 6,
    publishedAt: "2026-05-12",
    tags: ["Munnar", "Kerala", "Tea", "Sunrise", "Western Ghats"],
    body: [
      {
        type: "paragraph",
        content:
          "The alarms ring at 3:45 AM in the valley. The air at Suryanelli is crisp and smells of wet eucalyptus. You climb into a four-wheel-drive Mahindra jeep that has seen twenty years of mountain service and begin the ascent.",
      },
      {
        type: "paragraph",
        content:
          "At the summit, the world below is submerged in a flat white ocean of cloud. Only the jagged granite teeth of the Western Ghats pierce the mist. Then, the sun breaks over the eastern horizon—a blinding burst of saffron that turns the tea bushes beneath your feet incandescent emerald.",
      },
    ],
  },
  {
    id: "story-9",
    title: "Granite, Jasmine, and Ghee Podi: An Architectural Pilgrim's Journal in Madurai",
    slug: "granite-jasmine-ghee-podi-madurai",
    subtitle: "Exploring 2,500 years of living Dravidian devotion and bustling street culture.",
    excerpt:
      "Madurai does not sleep. At 4:30 AM, temple bells chime, jasmine flowers are weighed on brass scales, and the first idlis steam inside village vessels.",
    heroImage:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.raghav,
    stateSlug: "tamil-nadu",
    cityName: "Madurai",
    category: "Cultural Chronicles",
    readingTimeMin: 6,
    publishedAt: "2026-04-20",
    tags: ["Madurai", "Tamil Nadu", "Temples", "Dravidian Architecture", "Food"],
    body: [
      {
        type: "paragraph",
        content:
          "Step through the East Tower of Meenakshi Amman Temple barefoot onto cold, polished black granite. The ceiling above is a kaleidoscope of painted lotus mandalas. Ahead, the Thousand Pillar Hall stretches into dim, atmospheric perspective.",
      },
      {
        type: "paragraph",
        content:
          "Outside, the street smells intensely of Madurai malli—the celebrated local jasmine with thick petals that retains its fragrance for two full days. At Murugan Idli Shop, breakfast is served on fresh banana leaves with generous ladles of ghee podi. In Madurai, sanctity and gastronomy live hand-in-hand.",
      },
    ],
  },
  {
    id: "story-10",
    title: "The Western Ghats Monsoon Diary: Waterfalls, Kadak Chai, and Red Soil Trails",
    slug: "western-ghats-monsoon-diary",
    subtitle: "Why India's oldest mountain range comes alive when the rains arrive in July.",
    excerpt:
      "When the southwest monsoon slams into the Sahyadris, dry volcanic plateaus transform into dripping moss paradises, roaring waterfalls, and endless tea breaks.",
    heroImage:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    author: AUTHORS.arundhati,
    stateSlug: "maharashtra",
    cityName: "Pune",
    category: "Seasonal Journeys",
    readingTimeMin: 6,
    publishedAt: "2026-04-02",
    tags: ["Monsoon", "Western Ghats", "Maharashtra", "Sahyadri", "Nature"],
    body: [
      {
        type: "paragraph",
        content:
          "The Western Ghats are older than the Himalayas. For nine months of the year, they stand in dry, austere basalt layers under the tropical sun. But when July arrives, the transformation is miraculous.",
      },
      {
        type: "paragraph",
        content:
          "Overnight, hundreds of waterfalls tumble over cliff faces. Roads become shrouded in mist so thick headlights illuminate only twenty paces ahead. Roadside shacks set up giant boiling kettles of ginger-laced chai and roast ears of fresh corn over live coals. There is no joy in Indian travel quite like rain on a Sahyadri mountain pass.",
      },
    ],
  },
];

export const ITINERARIES: ItineraryData[] = [
  {
    id: "itin-pune-48h",
    title: "Pune: 48 Hours of Maratha Heritage, Old Peth Walks & Street Misal",
    slug: "pune-48-hours-heritage-food",
    destination: "Pune, Maharashtra",
    daysCount: 2,
    summary:
      "A thoughtfully paced weekend through Peshwa fortifications, atmospheric residential wadas, early morning Sahyadri hill climbs, and legendary Maharashtrian breakfast haunts.",
    heroImage:
      "/images/places/shaniwar-wada/hero.jpg",
    idealFor: "Culture lovers, weekend wanderers, culinary travelers",
    bestMonths: "October to March (or July-September for monsoon trails)",
    isCurated: true,
    items: [
      {
        id: "pune-d1-m",
        dayNumber: 1,
        timeOfDay: "Morning",
        placeSlug: "shaniwar-wada",
        title: "Peshwa Citadel & Kasba Peth Heritage Walk",
        note: "Start at 8:30 AM at Shaniwar Wada before street crowds swell. Walk through Kasba Peth to visit Kasba Ganpati, Pune's historic Gramdaivat, and stop at Chitale Bandhu for fresh Bakarwadi.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "pune-d1-a",
        dayNumber: 1,
        timeOfDay: "Afternoon",
        placeSlug: "aga-khan-palace",
        title: "Aga Khan Palace & Quiet Gardens",
        note: "Visit the Italianate arches and serene memorial grounds of Aga Khan Palace. Follow with lunch at a traditional bhojanalaya or cafe in Kalyani Nagar.",
        estimatedDuration: "2 hours",
      },
      {
        id: "pune-d1-e",
        dayNumber: 1,
        timeOfDay: "Evening",
        title: "Sunset over Vetal Tekdi & Ferguson College Road",
        note: "Climb Vetal Tekdi for panoramic city sunset views, then stroll down tree-shaded FC Road for filter coffee and local bookstores.",
        estimatedDuration: "2 hours",
      },
      {
        id: "pune-d2-m",
        dayNumber: 2,
        timeOfDay: "Morning",
        placeSlug: "sinhagad-fort",
        title: "Dawn Ascent to Sinhagad Fort & Rustic Breakfast",
        note: "Depart by 6:00 AM for Sinhagad. Ascend the stone path amidst Sahyadri breezes, tour the historic Kalyan Darwaza, and feast on hot pithla-bhakri and earthen curds.",
        estimatedDuration: "4 hours",
      },
      {
        id: "pune-d2-a",
        dayNumber: 2,
        timeOfDay: "Afternoon",
        title: "Raja Dinkar Kelkar Museum",
        note: "Explore Dr. Kelkar's extraordinary private collection of 20,000 historic Indian artifacts, Mughal lamps, and Mastani Mahal wooden carvings.",
        estimatedDuration: "2 hours",
      },
      {
        id: "pune-d2-e",
        dayNumber: 2,
        timeOfDay: "Evening",
        title: "Puneri Misal Tasting & Old City Bazaars",
        note: "Conclude with an authentic bowl of Kata Kirr misal and a slow evening walk through Tulshibaug brassware market.",
        estimatedDuration: "2 hours",
      },
    ],
  },
  {
    id: "itin-jaipur-3d",
    title: "Jaipur: 3 Days of Amber Sandstone, Royal Observatories & Artisan Ateliers",
    slug: "jaipur-3-days-sandstone-ateliers",
    destination: "Jaipur, Rajasthan",
    daysCount: 3,
    summary:
      "A refined 3-day exploration balancing monumental Rajput fortresses with quiet block-printing craft villages and timeless old city street markets.",
    heroImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    idealFor: "Heritage enthusiasts, architecture aficionados, craft collectors",
    bestMonths: "October to March",
    isCurated: true,
    items: [
      {
        id: "jpr-d1-m",
        dayNumber: 1,
        timeOfDay: "Morning",
        placeSlug: "amber-fort",
        title: "Amber Fort & Sheesh Mahal at First Light",
        note: "Arrive at 8:00 AM to explore the mirror-work courtyards without crowds. Continue to the nearby Anokhi Museum of Hand Printing.",
        estimatedDuration: "3.5 hours",
      },
      {
        id: "jpr-d1-a",
        dayNumber: 1,
        timeOfDay: "Afternoon",
        title: "Panna Meena Ka Kund & Stepwell Geometry",
        note: "Examine the symmetrical criss-cross stair patterns of this 16th-century stepwell, then pause for traditional lassi in Amer town.",
        estimatedDuration: "1.5 hours",
      },
      {
        id: "jpr-d1-e",
        dayNumber: 1,
        timeOfDay: "Evening",
        placeSlug: "hawa-mahal",
        title: "Sunset Street Views of Hawa Mahal",
        note: "Watch the golden evening light strike the 953 jharokhas of Hawa Mahal from the opposite street cafes, followed by shopping in Sireh Deori Bazaar.",
        estimatedDuration: "2 hours",
      },
      {
        id: "jpr-d2-m",
        dayNumber: 2,
        timeOfDay: "Morning",
        title: "City Palace & Jantar Mantar Astronomy Tour",
        note: "Visit the astronomical stone instruments of Jantar Mantar with a licensed historian guide, followed by the courtyards of City Palace.",
        estimatedDuration: "3 hours",
      },
      {
        id: "jpr-d2-a",
        dayNumber: 2,
        timeOfDay: "Afternoon",
        title: "Pyaaz Kachori Lunch at Rawat Mishthan",
        note: "Trek to Rawat for famous piping-hot pyaaz kachoris and soothing mawa kachori dessert.",
        estimatedDuration: "1.5 hours",
      },
      {
        id: "jpr-d2-e",
        dayNumber: 2,
        timeOfDay: "Evening",
        title: "Nahargarh Fort Sunset Panorama",
        note: "Drive up the winding ridge to Nahargarh ramparts for the definitive sunset view overlooking the entire pink city grid.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "jpr-d3-m",
        dayNumber: 3,
        timeOfDay: "Morning",
        title: "Artisan Excursion to Bagru Craft Village",
        note: "Spend the morning with Chippa families learning natural indigo dyeing and hand block stamping.",
        estimatedDuration: "4 hours",
      },
      {
        id: "jpr-d3-a",
        dayNumber: 3,
        timeOfDay: "Afternoon",
        title: "Ghevar Tasting at LMB Johari Bazaar",
        note: "Return to the walled city for authentic Honeycomb Ghevar and a leisurely walk through the gemstone craft ateliers.",
        estimatedDuration: "2 hours",
      },
      {
        id: "jpr-d3-e",
        dayNumber: 3,
        timeOfDay: "Evening",
        title: "Quiet Stroll at Albert Hall Museum Gardens",
        note: "Conclude at the Indo-Saracenic Albert Hall illuminated in dramatic night lighting as pigeons flutter over the gardens.",
        estimatedDuration: "1.5 hours",
      },
    ],
  },
  {
    id: "itin-kochi-munnar-4d",
    title: "Kochi to Munnar: 4-Day Journey from Colonial Coastline to Misty Tea Ridges",
    slug: "kochi-to-munnar-4-days",
    destination: "Kerala",
    daysCount: 4,
    summary:
      "From Dutch spice warehouses and Chinese fishing nets on the Arabian Sea to high-altitude orthodox tea gardens and cloud inversions in the Western Ghats.",
    heroImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    idealFor: "Couples, photographers, nature lovers",
    bestMonths: "September to March",
    isCurated: true,
    items: [
      {
        id: "km-d1-m",
        dayNumber: 1,
        timeOfDay: "Morning",
        placeSlug: "fort-kochi-heritage",
        title: "Fort Kochi Walking Trail & St. Francis Church",
        note: "Wander through shady avenues lined with colonial raintrees, visit the Vasco da Gama square, and watch Chinese fishing nets in action.",
        estimatedDuration: "3 hours",
      },
      {
        id: "km-d1-a",
        dayNumber: 1,
        timeOfDay: "Afternoon",
        placeSlug: "jew-town-synagogue",
        title: "Jew Town & Paradesi Synagogue",
        note: "Marvel at 18th-century hand-painted Chinese tiles in the synagogue and browse antique spice lofts along Synagogue Lane.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "km-d1-e",
        dayNumber: 1,
        timeOfDay: "Evening",
        title: "Sunset Kathakali Performance & Malabar Seafood",
        note: "Attend a traditional Kathakali makeup and dance demonstration, followed by coastal fish curry dinner at a restored heritage villa.",
        estimatedDuration: "3 hours",
      },
      {
        id: "km-d2-m",
        dayNumber: 2,
        timeOfDay: "Morning",
        title: "Scenic Overland Drive to Munnar Hills",
        note: "4-hour drive climbing from coastal plains through rubber estates, spice gardens, and Cheeyappara waterfalls to Munnar's high ridges.",
        estimatedDuration: "4.5 hours",
      },
      {
        id: "km-d2-a",
        dayNumber: 2,
        timeOfDay: "Afternoon",
        title: "Cardamom & Pepper Plantation Stroll",
        note: "Check into a plantation homestay and take a guided walk to inspect green cardamom pods, cinnamon bark, and wild vanilla vines.",
        estimatedDuration: "2 hours",
      },
      {
        id: "km-d2-e",
        dayNumber: 2,
        timeOfDay: "Evening",
        title: "Fireplace Tea Tasting & Mountain Quiet",
        note: "Sample locally produced white tea and handmade chocolates in Munnar town under cool mountain breezes.",
        estimatedDuration: "2 hours",
      },
      {
        id: "km-d3-m",
        dayNumber: 3,
        timeOfDay: "Morning",
        placeSlug: "kolukkumalai-estate",
        title: "Sunrise Jeep Excursion to Kolukkumalai",
        note: "Pre-dawn 4x4 ride to the world's highest tea estate. Watch the sun break through an ocean of cloud, followed by a 1930s factory tour.",
        estimatedDuration: "4.5 hours",
      },
      {
        id: "km-d3-a",
        dayNumber: 3,
        timeOfDay: "Afternoon",
        title: "Top Station Viewpoint & Shola Forest Walk",
        note: "Breathtaking views down into the Tamil Nadu plains from Top Station ridge.",
        estimatedDuration: "2 hours",
      },
      {
        id: "km-d3-e",
        dayNumber: 3,
        timeOfDay: "Evening",
        title: "Kerala Parotta Dinner at Rapsy",
        note: "Hearty meal of crispy Malabar parottas and spiced stew in Munnar Bazaar.",
        estimatedDuration: "1.5 hours",
      },
      {
        id: "km-d4-m",
        dayNumber: 4,
        timeOfDay: "Morning",
        placeSlug: "eravikulam-sanctuary",
        title: "Eravikulam National Park Safari",
        note: "Board early park bus to Rajamala to spot wild Nilgiri Tahr mountain goats grazing peacefully against Anamudi peak.",
        estimatedDuration: "3 hours",
      },
      {
        id: "km-d4-a",
        dayNumber: 4,
        timeOfDay: "Afternoon",
        title: "Return Drive or Transfer to Kochi Airport",
        note: "Gentle descent back toward Cochin International Airport (approx 3.5 hours).",
        estimatedDuration: "4 hours",
      },
    ],
  },
  {
    id: "itin-varanasi-3d",
    title: "Varanasi: 3 Days of Ancient Ghats, Vedic Chants & Silk Weavers of Madanpura",
    slug: "varanasi-3-days-sacred-kashi",
    destination: "Varanasi, Uttar Pradesh",
    daysCount: 3,
    summary:
      "An authentic journey through Kashi: dawn boat rites along eighty-four ghats, intimate alleyway food trails, silk looms, and the serene Buddhist stupas of Sarnath.",
    heroImage:
      "/images/places/dashashwamedh-ghat/hero.jpg",
    idealFor: "Spiritual seekers, photographers, history students",
    bestMonths: "October to March",
    isCurated: true,
    items: [
      {
        id: "vns-d1-m",
        dayNumber: 1,
        timeOfDay: "Morning",
        placeSlug: "dashashwamedh-ghat",
        title: "Subah-e-Banaras Dawn Wooden Boat Ride",
        note: "Start at 5:15 AM from Assi Ghat. Drift past all 84 ghats as shehnai music echoes over the water and morning bathers offer prayers.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "vns-d1-a",
        dayNumber: 1,
        timeOfDay: "Afternoon",
        title: "Kashi Vishwanath Corridor & Galli Walk",
        note: "Walk the historic Vishwanath galli, observe traditional brass shrines, and stop for cold creamy lassi at Blue Lassi shop.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "vns-d1-e",
        dayNumber: 1,
        timeOfDay: "Evening",
        placeSlug: "dashashwamedh-ghat",
        title: "Grand Evening Ganga Aarti at Dashashwamedh",
        note: "Experience the synchronized brass lamp aarti ceremony from a river boat or ghat stone steps.",
        estimatedDuration: "2 hours",
      },
      {
        id: "vns-d2-m",
        dayNumber: 2,
        timeOfDay: "Morning",
        placeSlug: "sarnath-enclave",
        title: "Sarnath Deer Park & Dhamek Stupa",
        note: "Travel 10 km to Sarnath where the Buddha first taught. Tour the ancient monastic ruins and the Ashokan Lion Capital in the museum.",
        estimatedDuration: "3.5 hours",
      },
      {
        id: "vns-d2-a",
        dayNumber: 2,
        timeOfDay: "Afternoon",
        title: "Madanpura & Peeli Kothi Silk Looms",
        note: "Visit master weavers in traditional Muslim weaver neighborhoods to witness jacquard loom weaving of authentic Banarasi sarees.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "vns-d2-e",
        dayNumber: 2,
        timeOfDay: "Evening",
        title: "Classical Indian Music Recital",
        note: "Attend an intimate sitar or vocal recital at an ashram near Assi Ghat.",
        estimatedDuration: "2 hours",
      },
      {
        id: "vns-d3-m",
        dayNumber: 3,
        timeOfDay: "Morning",
        title: "North Ghats Walk: Panchganga to Manikarnika",
        note: "Explore the dramatic historic palaces of Scindia, Balaji, and Ramnagar Maharaja along the northern river bend.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "vns-d3-a",
        dayNumber: 3,
        timeOfDay: "Afternoon",
        title: "Banarasi Street Food Trail",
        note: "Feast on Kachori-Jalebi at Ram Bhandar, tamatar chaat at Kashi Chaat Bhandar, and authentic Maghai Banarasi paan.",
        estimatedDuration: "2 hours",
      },
      {
        id: "vns-d3-e",
        dayNumber: 3,
        timeOfDay: "Evening",
        title: "Quiet Contemplation at Assi Ghat",
        note: "Conclude with chai in earthenware kulhads on the wide stone steps of Assi as floating oil lamps drift into the dark river.",
        estimatedDuration: "1.5 hours",
      },
    ],
  },
  {
    id: "itin-dharamshala-4d",
    title: "Dharamshala & Kangra: 4 Days of Tibetan Monasteries, Cedar Trails & Mountain Silence",
    slug: "dharamshala-kangra-4-days",
    destination: "Himachal Pradesh",
    daysCount: 4,
    summary:
      "A serene Himalayan retreat: the Dalai Lama Temple, live thangka painting workshops, century-old pine forest ridge walks, and quiet mountain cafe culture.",
    heroImage:
      "/images/places/tsuglagkhang-complex/hero.jpg",
    idealFor: "Solo travelers, wellness seekers, mountain lovers",
    bestMonths: "March to June & September to November",
    isCurated: true,
    items: [
      {
        id: "dh-d1-m",
        dayNumber: 1,
        timeOfDay: "Morning",
        placeSlug: "tsuglagkhang-complex",
        title: "Dalai Lama Temple & Kora Circuit",
        note: "Walk the sacred Lingkhor (Kora) path around the Tsuglagkhang complex amidst fluttering prayer flags and spinning bronze prayer wheels.",
        estimatedDuration: "2.5 hours",
      },
      {
        id: "dh-d1-a",
        dayNumber: 1,
        timeOfDay: "Afternoon",
        title: "Tibet Museum & McLeod Ganj Cafes",
        note: "Learn about Tibetan diaspora history, then stop for steaming vegetable thukpa and honey-ginger-lemon tea.",
        estimatedDuration: "2 hours",
      },
      {
        id: "dh-d1-e",
        dayNumber: 1,
        timeOfDay: "Evening",
        title: "Monks' Philosophical Debate",
        note: "Sit quietly in the monastery courtyard at 2:00 PM to watch monks debate Buddhist logic with rhythmic hand claps.",
        estimatedDuration: "2 hours",
      },
      {
        id: "dh-d2-m",
        dayNumber: 2,
        timeOfDay: "Morning",
        title: "Dharamkot & Bhagsu Waterfall Trail",
        note: "Morning walk through cedar trees to the upper village of Dharamkot and Bhagsu waterfall.",
        estimatedDuration: "3 hours",
      },
      {
        id: "dh-d2-a",
        dayNumber: 2,
        timeOfDay: "Afternoon",
        title: "Wood-Fired Pizza & Mountain Tea in Upper Bhagsu",
        note: "Enjoy mountain views and fresh herbal teas at an open-air mountain cafe.",
        estimatedDuration: "2 hours",
      },
      {
        id: "dh-d2-e",
        dayNumber: 2,
        timeOfDay: "Evening",
        title: "St. John in the Wilderness Church",
        note: "Visit the 1852 neo-Gothic stone church nestled deep within a thick deodar pine forest.",
        estimatedDuration: "1.5 hours",
      },
      {
        id: "dh-d3-m",
        dayNumber: 3,
        timeOfDay: "Morning",
        placeSlug: "norbulingka-institute",
        title: "Full Morning at Norbulingka Institute",
        note: "Tour the craft studios: mineral pigment Thangka painting, woodcarving, and brass statue ateliers amidst Japanese-style gardens.",
        estimatedDuration: "3.5 hours",
      },
      {
        id: "dh-d3-a",
        dayNumber: 3,
        timeOfDay: "Afternoon",
        title: "Kangra Arts Museum & Lower Dharamshala",
        note: "Examine delicate Kangra miniature paintings and ancient stone sculptures in the district museum.",
        estimatedDuration: "2 hours",
      },
      {
        id: "dh-d3-e",
        dayNumber: 3,
        timeOfDay: "Evening",
        title: "Sunset Over the Kangra Tea Valleys",
        note: "Visit the Dharamshala tea company gardens where gentle slopes face the snow-covered Dhauladhar wall.",
        estimatedDuration: "1.5 hours",
      },
      {
        id: "dh-d4-m",
        dayNumber: 4,
        timeOfDay: "Morning",
        title: "Triund Ridge Day Hike (Optional) or Naddi Viewpoint",
        note: "For active walkers, an early start for the Triund ridge hike offers close-up views of the Dhauladhar snowline.",
        estimatedDuration: "5 hours",
      },
    ],
  },
];
