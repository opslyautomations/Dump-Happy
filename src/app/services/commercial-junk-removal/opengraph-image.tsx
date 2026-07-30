import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Commercial & Office Junk Removal in Los Angeles",
    "Offices, retail & property managers"
  );
}
