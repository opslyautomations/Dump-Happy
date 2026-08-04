import { JOB_PHOTOS, type JobPhoto } from "@/lib/data/job-photos";
import type { LocalServiceCardStyle } from "@/components/page-sections/LocalServiceCard";

export type LocationHeroStyle =
  | { kind: "photoBleed"; photo: JobPhoto; focal?: string }
  | { kind: "photoStrip"; photos: JobPhoto[] }
  | { kind: "pattern"; tone?: "orange" | "charcoal" }
  | { kind: "splitImage"; photo: JobPhoto; rotate?: boolean; accent?: boolean }
  | { kind: "beforeAfter"; before: JobPhoto; after: JobPhoto }
  | { kind: "teamTrust"; photo: JobPhoto };

export interface LocationBodyImage {
  photo: JobPhoto;
  side: "left" | "right";
}

export interface LocationPresentation {
  hero: LocationHeroStyle;
  formVariant: "card" | "glass" | "accent";
  cardStyle: LocalServiceCardStyle;
  bodyImage?: LocationBodyImage;
}

export const LOCATION_PRESENTATION: Record<string, LocationPresentation> = {
  "santa-monica": {
    hero: { kind: "photoBleed", photo: JOB_PHOTOS.truck, focal: "center 30%" },
    formVariant: "glass",
    cardStyle: "bordered",
    bodyImage: {
      photo: {
        ...JOB_PHOTOS.furniture,
        alt: "Trailer loaded during a Santa Monica apartment turnover clear-out",
      },
      side: "right",
    },
  },
  "culver-city": {
    hero: { kind: "photoStrip", photos: [JOB_PHOTOS.furniture, JOB_PHOTOS.truck, JOB_PHOTOS.tip] },
    formVariant: "accent",
    cardStyle: "accent",
  },
  "beverly-hills": {
    hero: { kind: "teamTrust", photo: JOB_PHOTOS.team },
    formVariant: "card",
    cardStyle: "row",
  },
  "west-hollywood": {
    hero: {
      kind: "splitImage",
      photo: {
        ...JOB_PHOTOS.furniture,
        alt: "Trailer loaded with furniture during a West Hollywood apartment clear-out",
      },
      rotate: true,
    },
    formVariant: "accent",
    cardStyle: "bordered",
  },
  "marina-del-rey": {
    hero: { kind: "pattern", tone: "charcoal" },
    formVariant: "card",
    cardStyle: "accent",
    bodyImage: {
      photo: {
        ...JOB_PHOTOS.tip,
        alt: "Dump Happy trailer delivering a load for legal, certified disposal near Marina del Rey",
      },
      side: "left",
    },
  },
  venice: {
    hero: {
      kind: "splitImage",
      photo: {
        ...JOB_PHOTOS.branches,
        alt: "Dump Happy crew carrying a load out on foot where a truck can't reach in Venice",
      },
      accent: true,
    },
    formVariant: "glass",
    cardStyle: "row",
  },
  sawtelle: {
    hero: {
      kind: "photoBleed",
      photo: {
        ...JOB_PHOTOS.truck,
        alt: "Dump Happy truck working a tight Sawtelle street with limited parking",
      },
      focal: "center 25%",
    },
    formVariant: "accent",
    cardStyle: "bordered",
  },
  brentwood: {
    hero: {
      kind: "photoBleed",
      photo: {
        ...JOB_PHOTOS.tip,
        alt: "Dump Happy trailer delivering a Brentwood estate clean-out load for certified disposal",
      },
    },
    formVariant: "card",
    cardStyle: "row",
  },
  westchester: {
    hero: { kind: "beforeAfter", before: JOB_PHOTOS.garageBefore, after: JOB_PHOTOS.garageAfter },
    formVariant: "accent",
    cardStyle: "bordered",
  },
  "mid-city": {
    hero: { kind: "photoStrip", photos: [JOB_PHOTOS.debris, JOB_PHOTOS.tip, JOB_PHOTOS.truck] },
    formVariant: "glass",
    cardStyle: "accent",
  },
  koreatown: {
    hero: {
      kind: "photoBleed",
      photo: {
        ...JOB_PHOTOS.truck,
        alt: "Dump Happy truck staged for a Koreatown pickup where street parking is scarce",
      },
      focal: "center 35%",
    },
    formVariant: "card",
    cardStyle: "row",
  },
};

export function getLocationPresentation(slug: string): LocationPresentation {
  return LOCATION_PRESENTATION[slug] ?? { hero: { kind: "pattern" }, formVariant: "card", cardStyle: "bordered" };
}
