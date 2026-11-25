import { ogSize, ogContentType, renderOgImage } from "@/lib/og";
import { SERVICES } from "@/lib/data/services";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage("Our Junk Removal Services", `${SERVICES.length} services across Los Angeles`);
}
