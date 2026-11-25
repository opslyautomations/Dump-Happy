import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Dump + Store in Los Angeles",
    "We move you into your storage unit — one flat moving fee"
  );
}
