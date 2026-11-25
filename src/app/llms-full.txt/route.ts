import { SITE } from "@/lib/data/site";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { LOCATIONS_CONTENT } from "@/lib/data/locations-content";
import { BLOG_POSTS } from "@/lib/data/blog";
import {
  PRICING_TIERS,
  DUMP_STORE_TIERS,
  STORAGE_UNITS,
  MATTRESS_PICKUP_PRICE,
  LOAD_INCLUDES,
  MULTI_LOAD_NOTE,
} from "@/lib/data/pricing";
import { getAggregateRating, getReviews } from "@/lib/data/reviews";

// Full-text companion to /llms.txt: everything an AI assistant needs to
// answer "who should I call / what does it cost / do they serve my area"
// from a single fetch. Generated from site data so it never drifts.
export const dynamic = "force-static";

export function GET() {
  const url = (path: string) => `${SITE.url}${path}`;
  const rating = getAggregateRating();
  const lines: string[] = [
    `# ${SITE.name} — full reference`,
    `> ${SITE.name} (also searched as "Happy Dump") is a locally owned junk removal company in Los Angeles, CA, run by owner ${SITE.owner}. It hauls furniture, mattresses, appliances, yard/green waste, construction debris, and full-property clean-outs across LA's Westside, South Bay, and Central LA with load-based pricing from $${PRICING_TIERS[0].priceFrom}.`,
    "",
    `Short index: ${url("/llms.txt")}`,
    "",
    "## Contact and booking",
    `- Phone (call or text): ${SITE.phoneDisplay}`,
    ...(SITE.email ? [`- Email: ${SITE.email}`] : []),
    `- Hours: ${SITE.hoursDisplay}`,
    `- Free quote: ${url("/contact")}`,
    `- ${SITE.addressNote}`,
    `- Google Business Profile: ${SITE.gbpUrl}`,
    ...(rating
      ? [`- Google rating: ${rating.ratingValue.toFixed(1)} out of 5 from ${rating.reviewCount} reviews`]
      : []),
    "",
    "## Pricing (by truck volume; labor, hauling, and disposal included; firm quote before loading)",
    ...PRICING_TIERS.map((t) => `- ${t.name} — ${t.subtitle}: from $${t.priceFrom}. ${t.description}`),
    `- Details: ${url("/pricing")}`,
    `- Mattress pickup: from $${MATTRESS_PICKUP_PRICE}`,
    `- ${LOAD_INCLUDES} ${MULTI_LOAD_NOTE}`,
    "",
    "## Dump + Store (we move you into your storage unit; one flat moving fee, admin fee and lock included)",
    ...DUMP_STORE_TIERS.map((t) => `- Moving fee, ${t.name} (${t.subtitle}): from $${t.priceFrom.toLocaleString("en-US")}`),
    `- Storage units (monthly, subject to change): ${STORAGE_UNITS.map((u) => `${u.size} $${u.pricePerMonth}/mo`).join(", ")}`,
    `- Details: ${url("/services/dump-and-store")}`,
    "",
    "## Services",
    ...SERVICES.map((s) => `- ${s.name}: ${s.tagline} ${url(`/services/${s.slug}`)}`),
    "",
    "## Service areas",
    "",
  ];

  for (const loc of LOCATIONS) {
    const c = LOCATIONS_CONTENT[loc.slug];
    lines.push(`### ${loc.name}`, `URL: ${url(`/locations/${loc.slug}`)}`);
    if (c) {
      lines.push(
        c.localLead,
        "",
        `${c.localAngleHeading}: ${c.localAngle}`,
        "",
        `Neighborhoods: ${c.neighborhoods}`,
        "",
        c.coverage,
        "",
      );
      for (const f of c.faqs) lines.push(`Q: ${f.question}`, `A: ${f.answer}`, "");
    } else {
      lines.push(loc.tagline, "");
    }
  }

  lines.push("## Guides", "");
  for (const p of BLOG_POSTS) {
    lines.push(`### ${p.title}`, `URL: ${url(`/blog/${p.slug}`)}`, `Updated: ${p.dateModified}`);
    lines.push(p.quickAnswer ?? p.metaDescription, "");
    for (const f of p.faqs ?? []) lines.push(`Q: ${f.question}`, `A: ${f.answer}`, "");
  }

  const reviews = getReviews("general");
  if (reviews.length) {
    lines.push("## Customer reviews (verbatim from Google)", "");
    for (const r of reviews) lines.push(`- ${r.rating}/5 — ${r.reviewerName}: "${r.text}"`);
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
