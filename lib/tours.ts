import { img, type Img } from "./images";

// PLACEHOLDER itineraries — routes are realistic, but durations, group sizes and
// inclusions must be confirmed by the client before launch.

export const styles = [
  {
    key: "culture",
    name: "Culture & Heritage",
    short: "Rock fortresses, cave temples and two thousand years of kingdoms.",
    image: img.dambulla,
  },
  {
    key: "wildlife",
    name: "Wildlife & Safari",
    short: "Leopards at dawn, elephants at the water's edge, whales offshore.",
    image: img.leopardWater,
  },
  {
    key: "hills",
    name: "Tea Country & Hiking",
    short: "Slow trains, misty ridgelines and mornings that start at 1,800 metres.",
    image: img.teaMist,
  },
  {
    key: "coast",
    name: "Coast & Surf",
    short: "Two coastlines, two seasons — there's always a beach in its prime.",
    image: img.coastAerial,
  },
  {
    key: "slow",
    name: "Slow & Soulful",
    short: "Fewer moves, longer stays, more time at the table.",
    image: img.riceCurry,
  },
] as const;

export type StyleKey = (typeof styles)[number]["key"];

export type Tour = {
  slug: string;
  name: string;
  strapline: string;
  summary: string;
  days: number;
  styles: StyleKey[];
  route: string[];
  pace: "Easy" | "Moderate" | "Active";
  bestTime: string;
  image: Img;
  gallery: Img[];
  highlights: string[];
  itinerary: { title: string; body: string }[];
  included: string[];
  excluded: string[];
};

export const tours: Tour[] = [
  {
    slug: "the-island-mix",
    name: "The Island Mix",
    strapline: "Sri Lanka's greatest hits, played in the right order.",
    summary:
      "Twelve days that move from the ancient north-central plains up into tea country by train, down to the leopards of Yala and out to the ramparts of Galle. The first-timer's route — paced so it never feels like a checklist.",
    days: 12,
    styles: ["culture", "wildlife", "hills"],
    route: ["Negombo", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala", "Galle"],
    pace: "Moderate",
    bestTime: "December to April",
    image: img.nineArch,
    gallery: [img.sigiriyaAerial, img.kandyTemple, img.leopard],
    highlights: [
      "Climb Sigiriya early, before the heat and the crowds",
      "The Kandy–Ella train through tea country",
      "Two game drives in Yala National Park",
      "An evening walk along Galle Fort's walls",
    ],
    itinerary: [
      { title: "Arrive — Negombo", body: "Airport pick-up and a slow first evening by the lagoon." },
      { title: "North to Sigiriya", body: "Drive into the Cultural Triangle; village lunch on the way." },
      { title: "Sigiriya & Pidurangala", body: "Lion Rock at opening time, Pidurangala for sunset." },
      { title: "Dambulla to Kandy", body: "The cave temples, a spice garden, then the hill capital." },
      { title: "Kandy", body: "Temple of the Tooth, the lake and the botanical gardens." },
      { title: "Train to Nuwara Eliya", body: "The famous rail line climbs through the estates." },
      { title: "Ella", body: "Little Adam's Peak and the Nine Arches Bridge." },
      { title: "Down to Yala", body: "Afternoon game drive in leopard country." },
      { title: "Yala", body: "Dawn drive, then rest by the coast." },
      { title: "Galle", body: "West along the south coast to the old fort." },
      { title: "Galle at leisure", body: "Beaches, cafés, a cooking class if you want one." },
      { title: "Depart", body: "Transfer to the airport." },
    ],
    included: ["Private air-conditioned vehicle", "Local tour leader throughout", "11 nights' accommodation", "Daily breakfast", "Park entries and game drives listed", "Reserved train seats"],
    excluded: ["International flights", "Visa", "Lunches and most dinners", "Tips", "Travel insurance"],
  },
  {
    slug: "ancient-cities-loop",
    name: "Ancient Cities Loop",
    strapline: "Six days inside the Cultural Triangle.",
    summary:
      "A tight loop through the island's old capitals — Anuradhapura's great stupas, Polonnaruwa's ruined palaces, Sigiriya and the painted caves of Dambulla — ending in Kandy. Short drives, early starts, long lunches.",
    days: 6,
    styles: ["culture"],
    route: ["Anuradhapura", "Polonnaruwa", "Sigiriya", "Dambulla", "Kandy"],
    pace: "Easy",
    bestTime: "Year-round",
    image: img.sigiriyaAerial,
    gallery: [img.dambulla, img.sigiriyaPath, img.kandyTemple],
    highlights: [
      "Cycle between the ruins of Polonnaruwa",
      "Evening puja at Sri Maha Bodhi",
      "Sigiriya at opening time",
      "A cooking lesson in a village home",
    ],
    itinerary: [
      { title: "Anuradhapura", body: "The sacred city and its great dagobas." },
      { title: "Mihintale to Sigiriya", body: "Where Buddhism arrived, then on to Lion Rock." },
      { title: "Polonnaruwa by bike", body: "The medieval capital, cycled at an easy pace." },
      { title: "Sigiriya", body: "An early climb, then a village cooking lesson." },
      { title: "Dambulla to Kandy", body: "The cave temples, then into the hills." },
      { title: "Kandy", body: "Temple of the Tooth, then onward or depart." },
    ],
    included: ["Private vehicle and driver-guide", "5 nights' accommodation", "Daily breakfast", "Site entries listed", "Bicycle hire in Polonnaruwa"],
    excluded: ["Flights", "Visa", "Most meals", "Tips", "Travel insurance"],
  },
  {
    slug: "tea-country-by-rail",
    name: "Tea Country by Rail",
    strapline: "Slow trains, high trails, cold mornings.",
    summary:
      "The hill country at walking pace. Ride the line from Kandy into the estates, hike Horton Plains to World's End, sleep in an old planter's bungalow and finish with sunrise on Ella Rock.",
    days: 7,
    styles: ["hills"],
    route: ["Kandy", "Hatton", "Nuwara Eliya", "Horton Plains", "Ella"],
    pace: "Active",
    bestTime: "January to April",
    image: img.trainWindow,
    gallery: [img.teaMist, img.waterfall, img.teaHills],
    highlights: [
      "Horton Plains and World's End at first light",
      "A night in a tea-estate bungalow",
      "Tea factory visit with a planter",
      "Ella Rock hike",
    ],
    itinerary: [
      { title: "Kandy", body: "Meet your guide; evening at the lake." },
      { title: "Train to Hatton", body: "Into the estates; walk between tea villages." },
      { title: "Estate day", body: "Pluckers at work, a factory tour and tasting." },
      { title: "Nuwara Eliya", body: "Little England, its markets and Gregory Lake." },
      { title: "Horton Plains", body: "Pre-dawn start for the World's End trail." },
      { title: "Train to Ella", body: "The most photographed stretch of line." },
      { title: "Ella Rock", body: "Sunrise hike, then onward or depart." },
    ],
    included: ["Hiking guide", "Reserved train seats", "6 nights' accommodation", "Breakfast and estate dinners", "Park entries"],
    excluded: ["Flights", "Visa", "Some meals", "Tips", "Travel insurance"],
  },
  {
    slug: "leopards-and-lagoons",
    name: "Leopards & Lagoons",
    strapline: "The wild south, from dawn drives to blue water.",
    summary:
      "Built around the best wildlife windows in the south: elephants at Udawalawe, leopards in Yala, birdlife in Bundala's lagoons and — in season — blue whales off Mirissa.",
    days: 6,
    styles: ["wildlife", "coast"],
    route: ["Udawalawe", "Yala", "Bundala", "Mirissa"],
    pace: "Moderate",
    bestTime: "November to April",
    image: img.leopardWater,
    gallery: [img.elephants, img.tusker, img.stiltFishers],
    highlights: [
      "Three game drives in Yala",
      "The elephant transit home at Udawalawe",
      "Lagoon birding in Bundala",
      "Whale watching off Mirissa (seasonal)",
    ],
    itinerary: [
      { title: "Udawalawe", body: "Afternoon drive among the elephant herds." },
      { title: "To Yala", body: "Elephant transit home, then an evening drive." },
      { title: "Yala full day", body: "Dawn and dusk drives, rest in between." },
      { title: "Bundala", body: "Flamingos, crocodiles and lagoon birds." },
      { title: "Mirissa", body: "Down to the coast; whale trip at dawn in season." },
      { title: "Depart", body: "Transfer to Colombo or extend on the coast." },
    ],
    included: ["Private safari jeeps", "Naturalist guide", "5 nights' accommodation", "Breakfast and dinners on safari", "Park entries"],
    excluded: ["Flights", "Visa", "Whale-watching boat (optional)", "Tips", "Travel insurance"],
  },
  {
    slug: "east-coast-swell",
    name: "East Coast Swell",
    strapline: "When the south goes quiet, the east switches on.",
    summary:
      "The east coast's season runs opposite to the south. Surf lessons and point breaks around Arugam Bay, a jeep into Kumana for birds and elephants, then the calm water and temples of Trincomalee.",
    days: 8,
    styles: ["coast"],
    route: ["Arugam Bay", "Kumana", "Pasikudah", "Trincomalee"],
    pace: "Moderate",
    bestTime: "May to September",
    image: img.surfBeach,
    gallery: [img.boatSea, img.palmBeach, img.kovil],
    highlights: [
      "Three days of surf around Arugam Bay",
      "Kumana National Park by jeep",
      "Snorkelling at Pigeon Island",
      "Koneswaram temple above the sea",
    ],
    itinerary: [
      { title: "Arugam Bay", body: "Settle in; sunset at Elephant Rock." },
      { title: "Surf", body: "Lesson at Whiskey Point or Baby Point." },
      { title: "Surf & lagoon", body: "Morning surf, afternoon lagoon safari." },
      { title: "Kumana", body: "Full day in the park with a naturalist." },
      { title: "North to Pasikudah", body: "Shallow, glassy water for swimming." },
      { title: "Trincomalee", body: "Fort Frederick and Koneswaram." },
      { title: "Pigeon Island", body: "Snorkel the reef in the national park." },
      { title: "Depart", body: "Transfer to the airport or extend." },
    ],
    included: ["Private vehicle", "Two surf lessons with boards", "7 nights' accommodation", "Daily breakfast", "Park and reef entries"],
    excluded: ["Flights", "Visa", "Most meals", "Tips", "Travel insurance"],
  },
  {
    slug: "slow-south",
    name: "Slow South",
    strapline: "Fewer moves, longer stays, more time at the table.",
    summary:
      "Two bases on the south coast and nothing you have to do. Galle Fort's lanes, a cooking morning with a local family, stilt fishermen at Koggala and long, empty beaches around Tangalle.",
    days: 7,
    styles: ["slow", "coast"],
    route: ["Galle", "Koggala", "Tangalle"],
    pace: "Easy",
    bestTime: "December to April",
    image: img.palmBeach,
    gallery: [img.galleTower, img.riceCurry, img.stiltFishers],
    highlights: [
      "Three nights inside or beside Galle Fort",
      "Cooking with a family in their kitchen",
      "Koggala lagoon by boat",
      "Empty beaches around Tangalle",
    ],
    itinerary: [
      { title: "Galle", body: "Arrive and walk the ramparts at sunset." },
      { title: "Galle Fort", body: "Lanes, churches, cafés — at your own pace." },
      { title: "Kitchen morning", body: "Market shop and a cooking lesson at home." },
      { title: "Koggala", body: "Lagoon islands and the stilt fishermen." },
      { title: "Tangalle", body: "East to a quieter coast." },
      { title: "Tangalle", body: "Beach, turtle hatchery or Mulkirigala rock temple." },
      { title: "Depart", body: "Transfer to the airport." },
    ],
    included: ["Private transfers", "6 nights' boutique stays", "Daily breakfast", "Cooking lesson", "Lagoon boat trip"],
    excluded: ["Flights", "Visa", "Most meals", "Tips", "Travel insurance"],
  },
  {
    slug: "northern-lines",
    name: "Northern Lines",
    strapline: "The Sri Lanka most visitors never reach.",
    summary:
      "Jaffna and the islands of the north: kovils and colonial forts, palmyra country, a ferry to Delft and food unlike anywhere else on the island. For travellers who've done the south — or want to start somewhere different.",
    days: 6,
    styles: ["culture", "slow"],
    route: ["Anuradhapura", "Jaffna", "Delft", "Point Pedro"],
    pace: "Easy",
    bestTime: "January to September",
    image: img.northBoats,
    gallery: [img.kovil, img.boatSea, img.riceCurry],
    highlights: [
      "Nallur Kandaswamy Kovil at puja time",
      "Ferry to Delft island",
      "Jaffna Fort and the old town",
      "A Jaffna crab curry lunch",
    ],
    itinerary: [
      { title: "North by road", body: "Via Anuradhapura into the Jaffna peninsula." },
      { title: "Jaffna", body: "Nallur, the fort, the public library and market." },
      { title: "Delft", body: "Ferry to the island's wild ponies and coral walls." },
      { title: "Point Pedro", body: "The northern tip and Keerimalai springs." },
      { title: "Jaffna food", body: "A cooking lesson and an evening of street food." },
      { title: "Depart", body: "Drive or fly south." },
    ],
    included: ["Private vehicle and guide", "5 nights' accommodation", "Daily breakfast", "Ferry tickets", "Cooking lesson"],
    excluded: ["Flights", "Visa", "Most meals", "Tips", "Travel insurance"],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
export const styleName = (key: StyleKey) => styles.find((s) => s.key === key)!.name;

export const regions = [
  {
    slug: "cultural-triangle",
    name: "Cultural Triangle",
    summary: "The plains of the north-central province, where the island's ancient kingdoms built cities, reservoirs and a palace on a rock.",
    places: ["Sigiriya", "Anuradhapura", "Polonnaruwa", "Dambulla"],
    bestTime: "Year-round; driest May–September",
    image: img.sigiriyaPath,
    ratio: "aspect-[3/4]",
  },
  {
    slug: "hill-country",
    name: "Hill Country",
    summary: "Tea estates, cloud forest and the island's most famous railway line, climbing above 1,800 metres.",
    places: ["Kandy", "Nuwara Eliya", "Horton Plains", "Ella"],
    bestTime: "January–April",
    image: img.teaAerial,
    ratio: "aspect-[4/3]",
  },
  {
    slug: "south-coast",
    name: "South Coast",
    summary: "Galle's Dutch fort, surf towns, whale season and the leopard country of Yala just inland.",
    places: ["Galle", "Mirissa", "Tangalle", "Yala"],
    bestTime: "December–April",
    image: img.galleAerial,
    ratio: "aspect-square",
  },
  {
    slug: "east-coast",
    name: "East Coast",
    summary: "Quiet bays and point breaks that come into season just as the south-west monsoon arrives.",
    places: ["Arugam Bay", "Trincomalee", "Pasikudah", "Kumana"],
    bestTime: "May–September",
    image: img.surfBeach,
    ratio: "aspect-[3/4]",
  },
  {
    slug: "the-north",
    name: "The North",
    summary: "Jaffna's Tamil culture, temples and islands — the least visited, most distinct corner of the island.",
    places: ["Jaffna", "Delft", "Point Pedro", "Mannar"],
    bestTime: "January–September",
    image: img.kovil,
    ratio: "aspect-[4/3]",
  },
  {
    slug: "colombo-west",
    name: "Colombo & the West",
    summary: "The capital's food and architecture, and the lagoon town of Negombo minutes from the airport.",
    places: ["Colombo", "Negombo", "Bentota"],
    bestTime: "December–April",
    image: img.coastAerial,
    ratio: "aspect-square",
  },
] as const;
