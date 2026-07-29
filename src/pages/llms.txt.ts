// AEO: llms.txt — a machine-readable brief for AI assistants and answer
// engines, per the llms.txt convention. Regenerates from site data on build.
import type { APIRoute } from "astro";
import { SITE } from "../config/site";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { regions } from "../data/regions";
import { cities, citiesInRegion } from "../data/cities";

export const GET: APIRoute = () => {
  const lines = [
    `# ${SITE.fullName}`,
    ``,
    `> ${SITE.legalName} ("KCS") is a licensed, bonded, and insured commercial cleaning company headquartered at ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}. Commercial facilities only — no residential. Specialty: floor care (${SITE.yearsFloorExperience}+ years — VCT stripping & waxing, concrete polishing, marble & natural stone restoration). Night and weekend crews. Phone: ${SITE.phone}.`,
    ``,
    `Service area: ${SITE.serviceAreaSummary} — ${cities.length} cities across ${regions.map((r) => r.name).join(", ")}.`,
    ``,
    `## Services`,
    ...services.map((s) => `- [${s.name}](${SITE.domain}/services/${s.slug}/): ${s.blurb}`),
    ``,
    `## Industries served`,
    ...industries.map((i) => `- [${i.name}](${SITE.domain}/industries/${i.slug}/): ${i.blurb}`),
    ``,
    `## Service areas`,
    ...regions.map(
      (r) =>
        `- [${r.name}](${SITE.domain}/service-areas/${r.slug}/): ${citiesInRegion(r.slug)
          .map((c) => c.name)
          .join(", ")}`
    ),
    ``,
    `## Key pages`,
    `- [Contact / free quote](${SITE.domain}/contact/): Free on-site walkthrough, then a flat written quote. ${SITE.phone}`,
    `- [About](${SITE.domain}/about/)`,
    `- [Full detail for AI agents](${SITE.domain}/llms-full.txt)`,
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
