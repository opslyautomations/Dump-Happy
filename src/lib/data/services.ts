export type ServiceTier = 1 | 2;

export interface ServiceMeta {
  slug: string;
  name: string;
  tagline: string;
  tier: ServiceTier;
}

export const SERVICES: ServiceMeta[] = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    tagline: "Full-service household and property junk hauling.",
    tier: 1,
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    tagline: "Couches and bulky pieces from any room.",
    tier: 1,
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
  },
  {
    slug: "garage-cleanout",
    name: "Garage Clean-Out",
    tagline: "Reclaim your garage in one visit.",
    tier: 1,
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
  },
];

export function getServiceBySlug(slug: string): ServiceMeta | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
