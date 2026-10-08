import type { Metadata } from "next";
import { SITE } from "./data/site";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogType?: "website" | "article";
}

export function buildMetadata({
  title,
  description,
  path,
  noindex = false,
  ogType = "website",
}: BuildMetadataArgs): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    // Titles that already carry the brand skip the layout's "%s | Dump Happy"
    // template, which would otherwise double it.
    title: title.includes(SITE.name) ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: ogType,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.alternateNames,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    ...(SITE.email ? { email: SITE.email } : {}),
    logo: `${SITE.url}/opengraph-image`,
    sameAs: [SITE.gbpUrl],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    alternateName: SITE.alternateNames,
    url: SITE.url,
  };
}

export function localBusinessJsonLd(opts: {
  areaServed?: string | string[];
  aggregateRating?: { ratingValue: number; reviewCount: number };
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    alternateName: SITE.alternateNames,
    description:
      "Locally owned junk removal company in Los Angeles: mattress removal and pickup, green waste hauling, furniture, appliance, and full clean-outs with load-based pricing from $289.",
    telephone: SITE.phoneRaw,
    ...(SITE.email ? { email: SITE.email } : {}),
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    areaServed: opts.areaServed,
    address: {
      "@type": "PostalAddress",
      addressRegion: "CA",
      addressCountry: "US",
    },
    ...(opts.aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: opts.aggregateRating.ratingValue,
            reviewCount: opts.aggregateRating.reviewCount,
          },
        }
      : {}),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "LocalBusiness",
      name: SITE.name,
      telephone: SITE.phoneRaw,
      url: SITE.url,
    },
    areaServed: opts.areaServed ?? SITE.areaServed,
    url: `${SITE.url}${opts.path}`,
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function blogPostingJsonLd(opts: {
  title: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified: string;
  keywords?: string;
  abstract?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    ...(opts.abstract ? { abstract: opts.abstract } : {}),
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    inLanguage: "en-US",
    url: `${SITE.url}${opts.path}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}${opts.path}` },
    // The summary box carries the quotable answer for AI assistants and voice.
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-quick-answer]"] },
    image: opts.image,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/opengraph-image` },
    },
  };
}

export function imageObjectJsonLd(photo: {
  src: string;
  alt: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  lat: number;
  lon: number;
  credit: { author: string; license: string; licenseUrl: string | null; sourceUrl: string };
}) {
  const creditText = `Photo: ${photo.credit.author} / ${photo.credit.license} via Wikimedia Commons`;
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: `${SITE.url}${photo.src}`,
    url: `${SITE.url}${photo.src}`,
    name: photo.title,
    caption: photo.caption,
    description: photo.alt,
    width: photo.width,
    height: photo.height,
    encodingFormat: "image/jpeg",
    creator: { "@type": "Person", name: photo.credit.author },
    creditText,
    copyrightNotice: creditText,
    license: photo.credit.licenseUrl ?? photo.credit.sourceUrl,
    acquireLicensePage: photo.credit.sourceUrl,
    contentLocation: {
      "@type": "Place",
      name: photo.caption,
      geo: { "@type": "GeoCoordinates", latitude: photo.lat, longitude: photo.lon },
    },
  };
}
