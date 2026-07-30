export const SITE = {
  name: "Dump Happy",
  tagline: "Fast. Reliable. Happy Dumping!",
  domain: "dumphappy.com",
  url: "https://dumphappy.com",
  phoneDisplay: "(424) 356-4141",
  phoneRaw: "+14243564141",
  // NEEDS: business email — not supplied yet. Do not invent a placeholder;
  // `email` stays null until Jason confirms a real address. UI/schema code
  // must check for null and omit the email rather than fabricate one.
  email: null as string | null,
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
