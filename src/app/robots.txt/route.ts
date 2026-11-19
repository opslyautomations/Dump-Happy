import { SITE } from "@/lib/data/site";
import { PROMO } from "@/lib/data/promo";

// Served as a route handler (not MetadataRoute.Robots) so we can emit the
// Content-Signal line and keep crawler groups commented by purpose.
export const dynamic = "force-static";

// AI crawlers are named explicitly so a future blanket rule can't silently
// lock the site out of ChatGPT, Claude, Perplexity, Gemini/AI Overviews,
// Copilot, Siri/Apple Intelligence, or Meta AI. Grouped by what they do.
const AI_SEARCH = [
  "OAI-SearchBot", // ChatGPT search index
  "Claude-SearchBot", // Claude search index
  "PerplexityBot", // Perplexity index
  "Applebot", // Siri / Spotlight / Apple Intelligence answers
  "Bingbot", // Bing + Microsoft Copilot
  "DuckAssistBot", // DuckDuckGo AI answers
  "meta-webindexer", // Meta AI search
  "Amazonbot", // Alexa / Rufus answers
];

const AI_USER_FETCH = [
  "ChatGPT-User", // fetches a page when a ChatGPT user asks about it
  "Claude-User",
  "Perplexity-User",
  "MistralAI-User",
  "meta-externalfetcher",
];

const AI_TRAINING = [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended", // Gemini grounding/training control token
  "Applebot-Extended",
  "meta-externalagent",
  "CCBot", // Common Crawl, which many open models are built from
];

export function GET() {
  // /specials is only crawlable while a real offer is running.
  const disallow = ["/api/", "/thank-you", ...(PROMO.active ? [] : ["/specials"])];
  const rules = (agents: string[]) => [
    ...agents.map((a) => `User-Agent: ${a}`),
    "Allow: /",
    ...disallow.map((d) => `Disallow: ${d}`),
  ];

  const body = [
    "# Dump Happy — junk removal in Los Angeles",
    "# Content-Signal (contentsignals.org): search = index & link to us;",
    "# ai-input = use our pages to answer questions in AI search;",
    "# ai-train = include in model training. All allowed.",
    "",
    "User-Agent: *",
    "Content-Signal: search=yes, ai-input=yes, ai-train=yes",
    "Allow: /",
    ...disallow.map((d) => `Disallow: ${d}`),
    "",
    "# AI search / answer engines",
    ...rules(AI_SEARCH),
    "",
    "# AI assistants fetching a page on a user's behalf",
    ...rules(AI_USER_FETCH),
    "",
    "# AI model training",
    ...rules(AI_TRAINING),
    "",
    `Sitemap: ${SITE.url}/sitemap.xml`,
    "",
    `# Plain-text guides for AI assistants: ${SITE.url}/llms.txt and ${SITE.url}/llms-full.txt`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
