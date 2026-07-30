import { ogSize, ogContentType, renderOgImage } from "@/lib/og";
import { getLocationContent } from "@/lib/data/locations-content";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = getLocationContent(slug);
  return renderOgImage(
    content ? content.h1 : "Junk Removal in Los Angeles, CA",
    "Load-based pricing, legal disposal"
  );
}
