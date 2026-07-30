import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Appliance Removal in Los Angeles — Hauled Out, Recycled, and Disposed of Legally",
    "EPA 608 & CARB-compliant refrigerant handling"
  );
}
