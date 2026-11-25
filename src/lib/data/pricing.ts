export interface PricingTier {
  key: string;
  name: string;
  subtitle: string;
  cubicYards: number;
  priceFrom: number;
  description: string;
}

// Real pricing from the Dump Happy price sheet ("Dump + Store" menu, Nov 2026)
// — placed verbatim, do not alter or invent figures.

// Junk removal ("Dump Fees" on the price sheet). Every load includes loading,
// haul-away, disposal, and cleanup.
export const PRICING_TIERS: PricingTier[] = [
  {
    key: "quarter",
    name: "Quarter Load",
    subtitle: "≈3.5 cu yd",
    cubicYards: 3.5,
    priceFrom: 454,
    description: "A few bulky items or a small room's worth of furniture and boxes.",
  },
  {
    key: "half",
    name: "Half Load",
    subtitle: "≈7 cu yd",
    cubicYards: 7,
    priceFrom: 624,
    description: "A garage corner or a couple of rooms cleared out.",
  },
  {
    key: "three-quarter",
    name: "Three-Quarter Load",
    subtitle: "≈10.5 cu yd",
    cubicYards: 10.5,
    priceFrom: 794,
    description: "A packed garage or a large multi-room clear-out.",
  },
  {
    key: "full",
    name: "Full Load",
    subtitle: "≈14 cu yd",
    cubicYards: 14,
    priceFrom: 964,
    description: "A full truck — whole-property clean-outs and major jobs. Best value.",
  },
];

// Mattress pickup is priced on its own, below the load tiers.
export const MATTRESS_PICKUP_PRICE = 329;

export const LOAD_INCLUDES = "Every load includes loading, haul-away, disposal, and cleanup.";
export const MULTI_LOAD_NOTE = "Multiple loads? Prices begin to drop after your first load.";

// Dump + Store: we move you into your storage unit for one flat moving fee
// (admin fee and lock included). Storage rent is billed monthly on top.
export const DUMP_STORE_TIERS: PricingTier[] = [
  {
    key: "quarter",
    name: "Quarter Load",
    subtitle: "≈3.5 cu yd",
    cubicYards: 3.5,
    priceFrom: 589,
    description: "A few pieces of furniture and a stack of boxes moved into your unit.",
  },
  {
    key: "half",
    name: "Half Load",
    subtitle: "≈7 cu yd",
    cubicYards: 7,
    priceFrom: 759,
    description: "A couple of rooms of furniture and boxes moved into storage.",
  },
  {
    key: "three-quarter",
    name: "Three-Quarter Load",
    subtitle: "≈10.5 cu yd",
    cubicYards: 10.5,
    priceFrom: 929,
    description: "Several rooms of furniture and boxes moved in one trip.",
  },
  {
    key: "full",
    name: "Full Load",
    subtitle: "≈14 cu yd",
    cubicYards: 14,
    priceFrom: 1099,
    description: "A full truck moved into storage — the most space for the money. Best value.",
  },
];

export const DUMP_STORE_FEE_NOTE = "Admin fee and lock included.";

export interface StorageUnit {
  size: string;
  pricePerMonth: number;
}

// Monthly storage rates — subject to change.
export const STORAGE_UNITS: StorageUnit[] = [
  { size: "10×10", pricePerMonth: 303 },
  { size: "10×15", pricePerMonth: 406 },
  { size: "10×20", pricePerMonth: 500 },
  { size: "10×25", pricePerMonth: 586 },
  { size: "10×29", pricePerMonth: 752 },
];

export const STORAGE_NOTE = "Storage rates are monthly and subject to change.";

export function formatPrice(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}
