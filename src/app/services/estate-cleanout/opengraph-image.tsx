import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Estate & Property Clean-Out Services in Los Angeles",
    "Compassionate whole-home clean-outs"
  );
}
