// Central business config — single source of truth for NAP (Name, Address, Phone).
// Domain is live. Address matches the Google Business Profile exactly
// (2828 — Fidel's corrected number from the kickoff call; GBP is authoritative).
export const SITE = {
  brand: "KCS",
  legalName: "Krystal Clear Service",
  fullName: "KCS — Krystal Clear Service",
  tagline: "Commercial Janitorial & Floor Care Specialists",
  domain: "https://krystalclearservice.com",
  phone: "(925) 301-5566",
  phoneHref: "tel:+19253015566",
  email: "info@krystalclearservice.com", // TODO: confirm with client
  address: {
    street: "2828 Contra Costa Blvd, Suite C",
    city: "Pleasant Hill",
    state: "CA",
    zip: "94523",
  },
  geo: { lat: 37.9668, lng: -122.0693 },
  hours: "Mon–Sat 8:00 AM – 6:00 PM · Night & weekend crews available",
  yearsInBusiness: 5,
  yearsFloorExperience: 14,
  serviceAreaSummary:
    "The East Bay, Tri-Valley, downtown San Francisco, Solano County, Sacramento, and the Central Valley",
  // Not currently displayed anywhere — the list is too short to showcase
  // (the cathedral + its school read as one campus). Re-enable the
  // "Trusted by" panels when there are ~5+ distinct clients to show.
  featuredClients: [
    { name: "Grace Cathedral School for Boys", location: "San Francisco" },
    { name: "Grace Cathedral", location: "San Francisco" },
    { name: "111 Deerwood", location: "San Ramon" },
  ],
} as const;
