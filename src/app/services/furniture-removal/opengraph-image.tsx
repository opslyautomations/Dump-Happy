import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Furniture Removal in Los Angeles — From One Couch to a Whole House",
    "Donation-first, load-based pricing"
  );
}
