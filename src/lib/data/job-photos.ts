export interface JobPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Re-derived from gallery.ts. Default alt strings describe the literal photo;
// override alt per usage when a photo is recontextualized onto a different page.
export const JOB_PHOTOS = {
  truck: {
    src: "/IMG_7372.jpg",
    alt: "Dump Happy truck and dump trailer parked on a Los Angeles residential street for a junk removal job",
    width: 3024,
    height: 4032,
  },
  furniture: {
    src: "/IMG_7374.jpg",
    alt: "Trailer loaded with furniture and household junk during an apartment clear-out",
    width: 3024,
    height: 4032,
  },
  mattress: {
    src: "/IMG_7445.jpg",
    alt: "Dump Happy branded truck loaded with mattresses for a mattress removal job in Los Angeles",
    width: 4284,
    height: 5712,
  },
  debris: {
    src: "/IMG_7361.jpg",
    alt: "A trailer loaded with cardboard, wood, and yard debris sorted for recycling",
    width: 4284,
    height: 5712,
  },
  tip: {
    src: "/IMG_7347.jpg",
    alt: "Dump Happy trailer tipping a load of debris at a certified recycling and disposal facility",
    width: 1125,
    height: 1283,
  },
  branches: {
    src: "/IMG_7404-cropped.jpg",
    alt: "Dump Happy crew member loading tree branches and yard waste into a truck bed",
    width: 1125,
    height: 632,
  },
  yardBefore: {
    src: "/IMG_7381.jpg",
    alt: "Overgrown tree branches and yard debris piled against a house before a Dump Happy yard waste clean-out",
    width: 1080,
    height: 1350,
  },
  yardAfter: {
    src: "/IMG_7382.jpg",
    alt: "Clear walkway and trash bins after Dump Happy removed the yard waste and green debris",
    width: 1080,
    height: 1350,
  },
  garageBefore: {
    src: "/IMG_7383.jpg",
    alt: "Garage packed with boxes, furniture, and clutter before a Dump Happy garage clean-out",
    width: 1080,
    height: 1350,
  },
  garageAfter: {
    src: "/IMG_7384.jpg",
    alt: "Empty, swept garage floor after Dump Happy's garage clean-out service",
    width: 1080,
    height: 1350,
  },
  team: {
    src: "/team-photo.webp",
    alt: "The Dump Happy team",
    width: 1476,
    height: 1969,
  },
} as const satisfies Record<string, JobPhoto>;

export type JobPhotoKey = keyof typeof JOB_PHOTOS;
