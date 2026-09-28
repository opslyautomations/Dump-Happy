export type ServiceTier = 1 | 2;

export interface ServiceMeta {
  slug: string;
  name: string;
  tagline: string;
  tier: ServiceTier;
  // Real job photo for image cards; services without one render a text card.
  image?: { src: string; alt: string };
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    tagline: "Full-service household and property junk hauling.",
    tier: 1,
    image: { src: "/IMG_7372.jpg", alt: "Dump Happy truck and dump trailer parked on a Los Angeles street for a junk removal job" },
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    tagline: "Couches and bulky pieces from any room.",
    tier: 1,
    image: { src: "/IMG_7374.jpg", alt: "Trailer loaded with furniture and household junk during an apartment clear-out" },
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    tagline: "Fridges, washers, dryers — legal, refrigerant-compliant disposal.",
    tier: 1,
  },
  {
    slug: "mattress-removal",
    name: "Mattress Removal",
    tagline: "Recycled through California's mattress program.",
    tier: 1,
    image: { src: "/IMG_7445.jpg", alt: "Dump Happy truck loaded with mattresses headed for recycling" },
  },
  {
    slug: "garage-cleanout",
    name: "Garage Clean-Out",
    tagline: "Reclaim your garage in one visit.",
    tier: 1,
    image: { src: "/IMG_7384.jpg", alt: "Empty, swept garage floor after a Dump Happy garage clean-out" },
  },
  {
    slug: "estate-cleanout",
    name: "Estate/Property Clean-Out",
    tagline: "Compassionate whole-home clear-outs.",
    tier: 2,
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    tagline: "C&D debris to certified recyclers.",
    tier: 2,
    image: { src: "/IMG_7361.jpg", alt: "Trailer of cardboard, wood, and debris sorted for recycling" },
  },
  {
    slug: "hoarding-cleanout",
    name: "Hoarding Clean-Out",
    tagline: "Discreet, compassionate clutter removal.",
    tier: 2,
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    tagline: "Drain, disconnect, cut down, and haul.",
    tier: 2,
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Junk Removal",
    tagline: "Office and retail clear-outs; e-waste to certified recyclers.",
    tier: 2,
  },
  {
    slug: "yard-waste-removal",
    name: "Yard/Green Waste Removal",
    tagline: "Trimmings and storm debris to organics facilities.",
    tier: 2,
    image: { src: "/IMG_7404-cropped.jpg", alt: "Dump Happy crew member loading tree branches and yard waste into a truck" },
  },
];

export function getServiceBySlug(slug: string): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
