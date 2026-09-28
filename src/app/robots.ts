import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { PROMO } from "@/lib/data/promo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // /specials is only crawlable while a real offer is running.
        disallow: ["/api/", "/thank-you", ...(PROMO.active ? [] : ["/specials"])],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
