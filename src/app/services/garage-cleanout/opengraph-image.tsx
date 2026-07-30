import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Garage Clean-Out in Los Angeles — Park in It Again",
    "Load-based pricing, legal hazardous-waste sorting"
  );
}
