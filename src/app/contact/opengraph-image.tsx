import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage("Get a Free Junk Removal Quote", "Call, text, or request a quote online");
}
