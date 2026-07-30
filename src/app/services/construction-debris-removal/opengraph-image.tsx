import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Construction & Demolition Debris Removal in Los Angeles",
    "C&D debris routed to certified recyclers"
  );
}
