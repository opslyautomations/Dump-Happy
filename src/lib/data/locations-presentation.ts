import type { LocalServiceCardStyle } from "@/components/page-sections/LocalServiceCard";
import type { HeroBackground } from "@/components/page-sections/Hero";

export interface LocationPresentation {
  hero: HeroBackground;
  formVariant: "card" | "glass" | "accent";
  cardStyle: LocalServiceCardStyle;
}

export const LOCATION_PRESENTATION: Record<string, LocationPresentation> = {
  "santa-monica": { hero: { type: "solid" }, formVariant: "glass", cardStyle: "bordered" },
  "culver-city": { hero: { type: "pattern", tone: "orange" }, formVariant: "accent", cardStyle: "accent" },
  "beverly-hills": { hero: { type: "solid" }, formVariant: "card", cardStyle: "row" },
  "west-hollywood": { hero: { type: "pattern", tone: "charcoal" }, formVariant: "accent", cardStyle: "bordered" },
  "marina-del-rey": { hero: { type: "pattern", tone: "charcoal" }, formVariant: "card", cardStyle: "accent" },
  venice: { hero: { type: "pattern", tone: "orange" }, formVariant: "glass", cardStyle: "row" },
  sawtelle: { hero: { type: "solid" }, formVariant: "accent", cardStyle: "bordered" },
  brentwood: { hero: { type: "solid" }, formVariant: "card", cardStyle: "row" },
  westchester: { hero: { type: "pattern", tone: "orange" }, formVariant: "accent", cardStyle: "bordered" },
  "mid-city": { hero: { type: "pattern", tone: "charcoal" }, formVariant: "glass", cardStyle: "accent" },
  koreatown: { hero: { type: "solid" }, formVariant: "card", cardStyle: "row" },
};

export function getLocationPresentation(slug: string): LocationPresentation {
  return LOCATION_PRESENTATION[slug] ?? { hero: { type: "solid" }, formVariant: "card", cardStyle: "bordered" };
}
