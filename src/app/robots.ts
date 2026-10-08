import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { PROMO } from "@/lib/data/promo";

// AI search/answer crawlers, named explicitly so a future blanket rule can't
// silently lock the site out of ChatGPT, Claude, Perplexity, or AI Overviews.
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "DuckAssistBot",
];

export default function robots(): MetadataRoute.Robots {
  // /specials is only crawlable while a real offer is running.
  const disallow = ["/api/", "/thank-you", ...(PROMO.active ? [] : ["/specials"])];
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_CRAWLERS, allow: "/", disallow },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
