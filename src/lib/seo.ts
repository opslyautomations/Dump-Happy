import type { Metadata } from "next";
import { SITE } from "./data/site";
import { SERVICES } from "./data/services";
import { LOCATIONS } from "./data/locations";
import { PRICING_TIERS, DUMP_STORE_TIERS, MATTRESS_PICKUP_PRICE } from "./data/pricing";
import { getReviews } from "./data/reviews";

// Stable entity IDs. Every JSON-LD block on the site references these, so
// Google and AI answer engines merge them into one knowledge-graph entity
// instead of seeing several unrelated "Dump Happy" fragments.
export const ENTITY_IDS = {
  organization: `${SITE.url}/#organization`,
  business: `${SITE.url}/#localbusiness`,
  website: `${SITE.url}/#website`,
  logo: `${SITE.url}/#logo`,
} as const;

const LOGO_URL = `${SITE.url}/icon.png`;

const KNOWS_ABOUT = [
  "Junk removal",
  "Furniture removal",
  "Mattress removal and recycling",
  "Appliance removal and refrigerant-compliant disposal",
  "Garage clean-outs",
  "Estate clean-outs",
  "Hoarding clean-outs",
  "Construction debris removal",
  "Green waste and yard waste hauling",
  "Hot tub removal",
  "E-waste recycling",
  "Donation and recycling diversion",
];

function areaServedPlaces() {
  return [
    { "@type": "City", name: "Los Angeles", sameAs: "https://en.wikipedia.org/wiki/Los_Angeles" },
    ...LOCATIONS.map((l) => ({ "@type": "Place", name: `${l.name}, CA` })),
  ];
}

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
      : {
          index: true,
          follow: true,
          // Let Google (incl. AI Overviews) show full snippets and large images.
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
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
    "@id": ENTITY_IDS.organization,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    slogan: SITE.tagline,
    url: SITE.url,
    telephone: SITE.phoneRaw,
    ...(SITE.email ? { email: SITE.email } : {}),
    logo: {
      "@type": "ImageObject",
      "@id": ENTITY_IDS.logo,
      url: LOGO_URL,
      contentUrl: LOGO_URL,
      width: 512,
      height: 512,
      caption: SITE.name,
    },
    image: { "@id": ENTITY_IDS.logo },
    founder: { "@type": "Person", name: SITE.owner },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneRaw,
      ...(SITE.email ? { email: SITE.email } : {}),
      contactType: "customer service",
      areaServed: "US-CA",
      availableLanguage: ["English"],
    },
    knowsAbout: KNOWS_ABOUT,
    sameAs: [SITE.gbpUrl],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ENTITY_IDS.website,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    url: SITE.url,
    inLanguage: "en-US",
    publisher: { "@id": ENTITY_IDS.organization },
  };
}

export function localBusinessJsonLd(opts: {
  areaServed?: string | string[];
  aggregateRating?: { ratingValue: number; reviewCount: number };
} = {}) {
  const reviews = opts.aggregateRating ? getReviews("general") : [];
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ENTITY_IDS.business,
    name: SITE.name,
    alternateName: SITE.alternateNames,
    description:
      "Locally owned junk removal company in Los Angeles: mattress removal and pickup, green waste hauling, furniture, appliance, and full clean-outs with load-based pricing from $454.",
    telephone: SITE.phoneRaw,
    ...(SITE.email ? { email: SITE.email } : {}),
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    logo: { "@id": ENTITY_IDS.logo },
    parentOrganization: { "@id": ENTITY_IDS.organization },
    slogan: SITE.tagline,
    priceRange: "$$",
    currenciesAccepted: "USD",
    knowsAbout: KNOWS_ABOUT,
    sameAs: [SITE.gbpUrl],
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
    areaServed: opts.areaServed ?? areaServedPlaces(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Los Angeles",
      addressRegion: "CA",
      addressCountry: "US",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Junk removal services",
      itemListElement: SERVICES.map((svc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: svc.name,
          description: svc.tagline,
          url: `${SITE.url}/services/${svc.slug}`,
        },
      })),
    },
    makesOffer: [
      ...PRICING_TIERS.map((t) => ({
        "@type": "Offer",
        name: `Junk Removal — ${t.name} (${t.subtitle})`,
        description: t.description,
        url: `${SITE.url}/pricing`,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: t.priceFrom,
          priceCurrency: "USD",
        },
      })),
      {
        "@type": "Offer",
        name: "Mattress Pickup",
        description: "Mattress carried out of any room and routed to a California mattress recycler.",
        url: `${SITE.url}/services/mattress-removal`,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: MATTRESS_PICKUP_PRICE,
          priceCurrency: "USD",
        },
      },
      ...DUMP_STORE_TIERS.map((t) => ({
        "@type": "Offer",
        name: `Dump + Store Moving Fee — ${t.name} (${t.subtitle})`,
        description: `${t.description} Admin fee and lock included.`,
        url: `${SITE.url}/services/dump-and-store`,
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: t.priceFrom,
          priceCurrency: "USD",
        },
      })),
    ],
    ...(opts.aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: opts.aggregateRating.ratingValue,
            reviewCount: opts.aggregateRating.reviewCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : {}),
    // Verbatim Google Business Profile reviews (see data/reviews.ts).
    ...(reviews.length
      ? {
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.reviewerName },
            reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
            reviewBody: r.text,
            publisher: { "@type": "Organization", name: "Google" },
          })),
        }
      : {}),
  };
}

export function serviceJsonLd(opts: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
  minPrice?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": ENTITY_IDS.business,
      name: SITE.name,
      telephone: SITE.phoneRaw,
      url: SITE.url,
    },
    brand: { "@id": ENTITY_IDS.organization },
    offers: {
      "@type": "Offer",
      url: `${SITE.url}/pricing`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: opts.minPrice ?? PRICING_TIERS[0].priceFrom,
        priceCurrency: "USD",
      },
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
    isPartOf: { "@id": ENTITY_IDS.website },
    author: { "@type": "Organization", "@id": ENTITY_IDS.organization, name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      "@id": ENTITY_IDS.organization,
      name: SITE.name,
      logo: { "@type": "ImageObject", url: LOGO_URL },
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
