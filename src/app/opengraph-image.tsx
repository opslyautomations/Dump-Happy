import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Dump Happy — Junk & Debris Removal in Los Angeles";

export default async function Image() {
  return renderOgImage("Junk Removal in Los Angeles, CA", "Fast, upfront, load-based pricing");
}
