import type { City, RegionSlug } from "../types";
import { cities as contraCostaSolano } from "./contra-costa-solano";
import { cities as eastBaySf } from "./east-bay-sf";
import { cities as sacCentralValley } from "./sac-central-valley";

export const cities: City[] = [
  ...contraCostaSolano,
  ...eastBaySf,
  ...sacCentralValley,
];

export function cityBySlug(slug: string): City {
  const c = cities.find((c) => c.slug === slug);
  if (!c) throw new Error(`Unknown city: ${slug}`);
  return c;
}

export function citiesInRegion(region: RegionSlug): City[] {
  return cities.filter((c) => c.region === region);
}
