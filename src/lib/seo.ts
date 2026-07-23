import type { City, Service } from "../data/types";

/** Interpolate {city} {county} {district} {landmark} {region} tokens into copy templates. */
export function interpolate(template: string, city: City, regionName: string): string {
  // Rotate through districts/landmarks deterministically per city so pages differ.
  const seed = city.slug.length + city.name.charCodeAt(0);
  const district = city.districts[seed % city.districts.length] ?? city.districts[0];
  const landmark = city.landmarks[(seed + 1) % city.landmarks.length] ?? city.landmarks[0];
  return template
    .replaceAll("{city}", city.name)
    .replaceAll("{county}", city.county)
    .replaceAll("{district}", district)
    .replaceAll("{landmark}", landmark)
    .replaceAll("{region}", regionName);
}

export function serviceCityTitle(service: Service, city: City): string {
  return `${service.shortName} in ${city.name}, CA`;
}

export function serviceCityMeta(service: Service, city: City): string {
  return `${service.shortName} for offices, schools & commercial facilities in ${city.name}, CA. Licensed, bonded & insured. Free walkthrough — call (925) 301-5566.`;
}
