import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Hoarding Clean-Out Services in Los Angeles",
    "Discreet, judgment-free, at your pace"
  );
}
