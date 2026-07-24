// AEO: llms-full.txt — expanded plain-text corpus for answer engines.
import type { APIRoute } from "astro";
import { SITE } from "../config/site";
import { services } from "../data/services";
import { industries } from "../data/industries";
import { cities } from "../data/cities";

export const GET: APIRoute = () => {
  const lines: string[] = [
    `# ${SITE.fullName} — full reference`,
    ``,
    `${SITE.legalName} ("KCS") provides commercial janitorial services and specialty floor care across ${SITE.serviceAreaSummary}. Headquarters: ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}. Phone: ${SITE.phone}. Licensed, bonded, and insured. Commercial facilities only (no residential). Founder has ${SITE.yearsFloorExperience}+ years of floor care experience. Crews work nights and weekends by default. Process: free on-site walkthrough, then a flat written quote; most accounts start within a week.`,
    ``,
    `## Services`,
  ];

  for (const s of services) {
    lines.push(``, `### ${s.name} (${SITE.domain}/services/${s.slug}/)`, ``, ...s.overview);
    lines.push(``, `Common questions:`);
    for (const f of s.faqs.slice(0, 3)) lines.push(`- Q: ${f.q}`, `  A: ${f.a}`);
  }

  lines.push(``, `## Industries`);
  for (const i of industries) {
    lines.push(``, `### ${i.name} (${SITE.domain}/industries/${i.slug}/)`, ``, ...i.overview.slice(0, 1));
  }

  lines.push(
    ``,
    `## Cities served`,
    ``,
    ...cities.map(
      (c) =>
        `- ${c.name}, CA (${c.county}) — ${SITE.domain}/locations/${c.slug}/ — districts: ${c.districts.join("; ")}`
    )
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
