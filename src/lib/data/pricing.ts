export interface PricingTier {
  key: string;
  name: string;
  subtitle: string;
  priceFrom: number;
  description: string;
}

// Real load-tier pricing from dumphappy.com/pricing — placed verbatim, do not
// alter or invent figures.
export const PRICING_TIERS: PricingTier[] = [
  {
    key: "small",
    name: "Small Load",
    subtitle: "Pickup Truck",
    priceFrom: 289,
    description: "A handful of items — roughly an eighth of our truck.",
  },
  {
    key: "quarter",
    name: "Quarter Load",
    subtitle: "16ft Trailer",
    priceFrom: 389,
    description: "A small room's worth of furniture and boxes.",
  },
  {
    key: "half",
    name: "Half Load",
    subtitle: "16ft Trailer",
    priceFrom: 569,
    description: "A garage corner or a couple of rooms cleared out.",
  },
  {
    key: "three-quarter",
    name: "3 Quarter Load",
    subtitle: "16ft Trailer",
    priceFrom: 739,
    description: "A packed garage or a large multi-room clear-out.",
  },
  {
    key: "full",
    name: "Full Load",
    subtitle: "16ft Trailer",
    priceFrom: 899,
    description: "A full truck — whole-property clean-outs and major jobs.",
  },
];
