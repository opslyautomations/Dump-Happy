import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage("Junk Removal Pricing in LA", "Load-based tiers, no hourly surprises");
}
