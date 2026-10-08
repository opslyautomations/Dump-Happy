import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Mattress Removal in Los Angeles",
    "Carried out of any room and recycled — from $289"
  );
}
