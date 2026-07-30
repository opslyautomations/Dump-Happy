import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Yard & Green Waste Removal in Los Angeles",
    "Branches, trimmings & storm debris"
  );
}
