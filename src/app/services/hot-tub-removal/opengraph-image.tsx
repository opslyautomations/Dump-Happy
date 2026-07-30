import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Hot Tub & Spa Removal in Los Angeles",
    "Drain, disconnect, cut down, haul"
  );
}
