import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Mattress Removal in Los Angeles",
    "Recycled through California's Bye Bye Mattress program"
  );
}
