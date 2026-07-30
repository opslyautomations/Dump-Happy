export interface LocationMeta {
  slug: string;
  name: string;
  tagline: string;
}

export const LOCATIONS: LocationMeta[] = [
  { slug: "santa-monica", name: "Santa Monica", tagline: "Coastal apartment turnovers and downsizing." },
  { slug: "culver-city", name: "Culver City", tagline: "Office clear-outs and condo turnovers." },
  { slug: "beverly-hills", name: "Beverly Hills", tagline: "Discreet estate clean-outs." },
  { slug: "west-hollywood", name: "West Hollywood", tagline: "Dense apartment/condo small-load pickups." },
  { slug: "marina-del-rey", name: "Marina Del Rey", tagline: "HOA-friendly waterfront condo clear-outs." },
  { slug: "venice", name: "Venice", tagline: "Access-challenged canal and walk-street hauling." },
  { slug: "sawtelle", name: "Sawtelle", tagline: "Little Osaka apartment and small-business clear-outs." },
  { slug: "brentwood", name: "Brentwood", tagline: "Large-home and canyon estate clean-outs." },
  { slug: "westchester", name: "Westchester", tagline: "LAX-adjacent garage and estate clean-outs." },
  { slug: "mid-city", name: "Mid-City", tagline: "Older-home and renovation clear-outs (central LA)." },
  { slug: "koreatown", name: "Koreatown", tagline: "High-rise apartment turnovers (central LA)." },
];

export function getLocationBySlug(slug: string): LocationMeta | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
