export type Place = {
  id: string;
  title: string;
  region: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
};

export const imlandFacts = [
  { label: "Population", value: 3_420_000, suffix: "" },
  { label: "Capital", value: "Nordhavn Prime", suffix: "" },
  { label: "Main Language", value: "Imlish + Norsk", suffix: "" },
  { label: "Innovation Index", value: 98, suffix: "/100" },
  { label: "Happiness Level", value: 96, suffix: "/100" }
] as const;

export const founders = [
  {
    name: "Astra Nyholm",
    role: "Vision Architect",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Kian Solberg",
    role: "Systems Founder",
    avatar:
      "https://images.unsplash.com/photo-1520975693411-b47f963fa5c7?auto=format&fit=crop&w=800&q=80",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  },
  {
    name: "Elin Varg",
    role: "Culture & Design Minister",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    socials: {
      x: "#",
      github: "#",
      linkedin: "#"
    }
  }
] as const;

export const foods = [
  {
    title: "Aurora Salmon",
    description: "Cold-smoked fjord salmon, citrus ice, and cyan salt crystals.",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Nordic Cloud Soup",
    description: "Velvety root broth with herb vapor and microgreens snowfall.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Frostberry Tart",
    description: "Arctic berries, vanilla glass glaze, and warm spice glow.",
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1600&q=80"
  }
] as const;

export const tourismPlaces: Place[] = [
  {
    id: "fjord-arc",
    title: "Fjord Arc",
    region: "West Coast",
    rating: 4.9,
    description: "A luminous canyon of water and ice — a natural amphitheater for auroras.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80",
    tags: ["Aurora", "Fjords", "Cruise"]
  },
  {
    id: "nordhavn",
    title: "Nordhavn Prime",
    region: "Capital District",
    rating: 4.8,
    description: "A glass skyline above silent streets — where minimalism meets neural cities.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80",
    tags: ["City", "Future", "Luxury"]
  },
  {
    id: "snowline",
    title: "Snowline Sanctuaries",
    region: "Highlands",
    rating: 4.7,
    description: "Cabins in pure silence. Warm light. The soft sound of snowfall outside.",
    image:
      "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=2000&q=80",
    tags: ["Cabins", "Wellness", "Ski"]
  }
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=2000&q=80"
];

export const timeline = [
  {
    year: "2046",
    title: "Founding Signal",
    description: "ImLand is declared — a northborn nation built on calm tech and quiet luxury."
  },
  {
    year: "2051",
    title: "Aurora Grid",
    description: "100% clean energy with aurora-inspired photonics and oceanic turbines."
  },
  {
    year: "2058",
    title: "Design Constitution",
    description: "A national pledge: minimalism, accessibility, and beauty in every public system."
  },
  {
    year: "2062",
    title: "Festival of Light",
    description: "Annual winter celebration: music, drones, ice sculptures, and neon folklore."
  }
];

