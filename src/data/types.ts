export type RegionSlug =
  | "contra-costa"
  | "tri-valley"
  | "east-bay"
  | "san-francisco"
  | "solano-county"
  | "sacramento-area"
  | "central-valley";

export interface Region {
  name: string;
  slug: RegionSlug;
  blurb: string; // 40–70 words on the commercial landscape of the region
}

export interface City {
  name: string;
  slug: string;
  county: string;
  region: RegionSlug;
  zip: string; // representative zip code
  /** 90–130 words, unique per city, references real local geography and business landscape */
  intro: string;
  /** 50–80 words on the commercial property mix of this city */
  businessLandscape: string;
  /** 3–6 real business districts / commercial corridors */
  districts: string[];
  /** 3–5 notable commercial landmarks or major employers */
  landmarks: string[];
  /** 4–6 client types dominant here */
  clientTypes: string[];
  /** 3–5 slugs of nearby covered cities */
  nearby: string[];
  lat: number;
  lng: number;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  name: string;
  slug: string;
  shortName: string;
  /** true = gets a page in every city (the 5 money services) */
  isCore: boolean;
  blurb: string; // ~25 words for cards
  metaTitle: string; // <60 chars, no city
  metaDescription: string; // <155 chars
  heroHeadline: string;
  heroSub: string;
  overview: string[]; // 2–3 paragraphs
  features: ServiceFeature[]; // 6
  process: ProcessStep[]; // 4–5
  faqs: FAQ[]; // 5–6
  /**
   * Only for core services: 3 paragraph templates for city pages.
   * Tokens: {city}, {county}, {district}, {landmark}, {region}
   */
  cityParagraphs?: string[];
}

export interface Industry {
  name: string;
  slug: string;
  blurb: string; // ~25 words
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  overview: string[]; // 2–3 paragraphs
  painPoints: ServiceFeature[]; // 4–6 industry-specific cleaning challenges we solve
  services: string[]; // slugs of most-relevant services
  faqs: FAQ[]; // 4–5
}
