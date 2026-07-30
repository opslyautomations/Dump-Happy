export interface PricingTier {
  key: string;
  name: string;
  description: string;
}

// NEEDS: price — dollar figures not yet supplied by Jason. Do not invent amounts;
// each tier renders a "[NEEDS: price]" slot until real numbers are provided.
export const PRICING_TIERS: PricingTier[] = [
  {
    key: "single-item",
    name: "Single Item",
    description: "One couch, one fridge, one mattress — a single bulky piece.",
  },
  {
    key: "small",
    name: "Small Load",
    description: "A handful of items — roughly an eighth of our truck.",
  },
  {
    key: "quarter",
    name: "Quarter Load",
    description: "A small room's worth of furniture and boxes.",
  },
  {
    key: "half",
    name: "Half Load",
    description: "A garage corner or a couple of rooms cleared out.",
  },
  {
    key: "three-quarter",
    name: "Three-Quarter Load",
    description: "A packed garage or a large multi-room clear-out.",
  },
  {
    key: "full",
    name: "Full Load",
    description: "A full truck — whole-property clean-outs and major jobs.",
  },
];
