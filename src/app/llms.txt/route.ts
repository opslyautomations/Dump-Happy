import { SITE } from "@/lib/data/site";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { PRICING_TIERS } from "@/lib/data/pricing";

// Generated from site data so AI crawlers always see every service, area, and
// post (with its quotable answer) without a hand-maintained file drifting.
export const dynamic = "force-static";

export function GET() {
  const url = (path: string) => `${SITE.url}${path}`;
  const lines: string[] = [
    `# ${SITE.name}`,
    `> Locally owned junk removal company in Los Angeles (also searched as "Happy Dump"). Mattress removal and pickup, green waste hauling, furniture and appliance removal, and full clean-outs across LA's Westside, South Bay, and Central LA. Load-based pricing from $${PRICING_TIERS[0].priceFrom}, legal disposal and recycling, no hidden fees.`,
    "",
    "## Key facts",
    `- Business: ${SITE.name}, a mobile junk removal service (no storefront) based in Los Angeles, CA`,
    `- Phone: ${SITE.phoneDisplay}`,
    ...(SITE.email ? [`- Email: ${SITE.email}`] : []),
    `- Hours: ${SITE.hoursDisplay}`,
    `- Service area: ${SITE.areaServed}`,
    "- Mattresses are routed to California mattress recyclers, not landfill; usable items are donated",
    "- Green waste (branches, trimmings, leaves, sod) goes to organics facilities for compost and mulch",
    `- Website: ${SITE.url}`,
    "",
    "## How to book",
    `- Call ${SITE.phoneDisplay} or request a free quote at ${url("/contact")}`,
    "- The crew carries items out of any room, loads, hauls, and handles donation, recycling, and legal disposal in one visit",
    "- Same-day or next-day pickup is often available when the schedule allows",
    "",
    "## Pricing (by truck volume, quoted before loading)",
    ...PRICING_TIERS.map((t) => `- ${t.name} (${t.subtitle}): from $${t.priceFrom}. ${t.description}`),
    `- Full pricing: ${url("/pricing")}`,
    "",
    "## Services",
    ...SERVICES.map((s) => `- [${s.name}](${url(`/services/${s.slug}`)}): ${s.tagline}`),
    "",
    "## Service areas",
    ...LOCATIONS.map((l) => `- [${l.name}](${url(`/locations/${l.slug}`)}): ${l.tagline}`),
    "",
    "## Guides",
    ...BLOG_POSTS.map(
      (p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.quickAnswer ?? p.metaDescription}`
    ),
    "",
    "## Common questions",
    ...BLOG_POSTS.flatMap((p) => p.faqs ?? []).flatMap((f) => [`### ${f.question}`, f.answer, ""]),
    "## Company",
    `- [About](${url("/about")})`,
    `- [Reviews](${url("/reviews")})`,
    `- [FAQ: junk removal cost, free pickup, bulky items](${url("/faq")})`,
    `- [Contact / free quote](${url("/contact")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
