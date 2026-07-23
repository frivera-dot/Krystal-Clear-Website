import type { Region } from "./types";

export const regions: Region[] = [
  {
    name: "Contra Costa County",
    slug: "contra-costa",
    blurb:
      "Our home turf. From our Pleasant Hill headquarters we serve office parks, medical plazas, schools, and retail centers across central and east Contra Costa County — often with same-week walkthroughs and rapid response times.",
  },
  {
    name: "Tri-Valley",
    slug: "tri-valley",
    blurb:
      "Bishop Ranch, Hacienda Business Park, and the corporate campuses of San Ramon, Pleasanton, Dublin, Danville, and Livermore. Class-A office standards, delivered by night crews that leave no trace but clean.",
  },
  {
    name: "East Bay",
    slug: "east-bay",
    blurb:
      "Oakland, Berkeley, and the I-880 corridor down to Fremont — a dense mix of offices, biotech, warehouses, schools, and civic buildings where dependable janitorial service is the difference between tenants staying and leaving.",
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    blurb:
      "We serve the downtown core — Financial District, SoMa, Union Square, and Nob Hill — where we already maintain private schools and landmark facilities. High-rise office suites, schools, and churches are our specialty here.",
  },
  {
    name: "Solano County",
    slug: "solano-county",
    blurb:
      "Vallejo, Fairfield, Vacaville, and the I-80 corridor. Growing business parks, medical offices, and logistics facilities that deserve big-city cleaning standards without big-city vendor attitudes.",
  },
  {
    name: "Sacramento Area",
    slug: "sacramento-area",
    blurb:
      "Downtown Sacramento to Roseville, Rocklin, and Folsom. We bring our floor-care specialty to the Capitol region's offices, schools, and medical facilities — with local crews and Bay Area quality standards.",
  },
  {
    name: "Central Valley",
    slug: "central-valley",
    blurb:
      "Stockton, Tracy, Manteca, Lodi, and Modesto. Distribution centers, offices, schools, and retail along the I-5 and Highway 99 corridors — cleaned on schedules that work around your operation, not against it.",
  },
];

export function regionBySlug(slug: string): Region {
  const r = regions.find((r) => r.slug === slug);
  if (!r) throw new Error(`Unknown region: ${slug}`);
  return r;
}
