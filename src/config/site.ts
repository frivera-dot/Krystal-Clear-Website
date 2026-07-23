// Central business config — single source of truth for NAP (Name, Address, Phone).
// TODO: confirm final domain with client (the "no s" domain from the meeting).
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
    street: "2855 Contra Costa Blvd, Suite C",
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
  featuredClients: [
    { name: "Grace Cathedral School for Boys", location: "San Francisco" },
    { name: "Grace Cathedral", location: "San Francisco" },
    { name: "111 Deerwood", location: "San Ramon" },
  ],
} as const;
