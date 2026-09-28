import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";
import { BLOG_POSTS } from "@/lib/data/blog";
import { PROMO } from "@/lib/data/promo";
import { LOCATION_PHOTOS } from "@/lib/data/location-photos";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/reviews`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/gallery`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.url}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/locations`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.6 },
    ...(PROMO.active
      ? ([{ url: `${SITE.url}/specials`, changeFrequency: "weekly", priority: 0.7 }] as const)
      : []),
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const locationRoutes: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${SITE.url}/locations/${l.slug}`,
    changeFrequency: "monthly",
    priority: 0.9,
    ...(LOCATION_PHOTOS[l.slug] ? { images: [`${SITE.url}${LOCATION_PHOTOS[l.slug].src}`] } : {}),
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.dateModified,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
