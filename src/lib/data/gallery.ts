export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BeforeAfterPair {
  key: string;
  title: string;
  before: GalleryImage;
  after: GalleryImage;
}

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    key: "yard-cleanout",
    title: "Overgrown Yard & Green Waste Clean-Out",
    before: {
      src: "/IMG_7381.jpg",
      alt: "Overgrown tree branches and yard debris piled against a house before a Dump Happy yard waste clean-out",
      width: 1080,
      height: 1350,
    },
    after: {
      src: "/IMG_7382.jpg",
      alt: "Clear walkway and trash bins after Dump Happy removed the yard waste and green debris",
      width: 1080,
      height: 1350,
    },
  },
  {
    key: "garage-cleanout",
    title: "Cluttered Garage Clean-Out",
    before: {
      src: "/IMG_7383.jpg",
      alt: "Garage packed with boxes, furniture, and clutter before a Dump Happy garage clean-out",
      width: 1080,
      height: 1350,
    },
    after: {
      src: "/IMG_7384.jpg",
      alt: "Empty, swept garage floor after Dump Happy's garage clean-out service",
      width: 1080,
      height: 1350,
    },
  },
];

export const GALLERY_PHOTOS: (GalleryImage & { caption: string })[] = [
  {
    src: "/IMG_7445.jpg",
    alt: "Dump Happy branded truck loaded with mattresses for a mattress removal job in Los Angeles",
    caption: "Mattress removal, loaded and ready",
    width: 4284,
    height: 5712,
  },
  {
    src: "/IMG_7372.jpg",
    alt: "Dump Happy truck and dump trailer parked on a Los Angeles residential street for a junk removal job",
    caption: "On site for a junk removal job",
    width: 3024,
    height: 4032,
  },
  {
    src: "/IMG_7374.jpg",
    alt: "Trailer loaded with furniture and household junk during an apartment clear-out",
    caption: "Apartment clear-out, fully loaded",
    width: 3024,
    height: 4032,
  },
  {
    src: "/IMG_7404-cropped.jpg",
    alt: "Dump Happy crew member loading tree branches and yard waste into a truck bed",
    caption: "Loading yard waste for haul-away",
    width: 1125,
    height: 632,
  },
  {
    src: "/IMG_7361.jpg",
    alt: "A trailer loaded with cardboard, wood, and yard debris sorted for recycling",
    caption: "Sorted and ready for recycling",
    width: 4284,
    height: 5712,
  },
  {
    src: "/IMG_7347.jpg",
    alt: "Dump Happy trailer tipping a load of debris at a certified recycling and disposal facility",
    caption: "Delivered for legal, certified disposal",
    width: 1125,
    height: 1283,
  },
];
