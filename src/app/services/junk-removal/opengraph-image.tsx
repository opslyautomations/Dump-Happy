import { ogSize, ogContentType, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage(
    "Junk Removal in Los Angeles — We Do the Lifting, You Reclaim the Space",
    "Load-based pricing, same-week pickup, legal disposal"
  );
}
