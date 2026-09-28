export const SITE = {
  name: "Dump Happy",
  tagline: "Fast. Reliable. Happy Dumping!",
  domain: "dumphappy.com",
  // Must match the primary domain in Vercel (apex redirects to www) so canonicals don't point at a redirect.
  url: "https://www.dumphappy.com",
  phoneDisplay: "(424) 356-4141",
  phoneRaw: "+14243564141",
  email: "support@dumphappy.com" as string | null,
  hoursDisplay: "10am – 8pm, 7 days a week",
  hoursShort: "Open daily 10am–8pm",
  // schema.org openingHoursSpecification (24h clock)
  hours: { opens: "10:00", closes: "20:00" },
  owner: "Jason",
  gbpUrl: "https://share.google/Yp8URbBxAymgKWgo1",
  addressNote: "Mobile business — no storefront (service-area business)",
  areaServed: "Los Angeles, Westside, South Bay, and Central LA",
} as const;

export const NAV_COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;
