import { ogSize, ogContentType, renderOgImage } from "@/lib/og";
import { getBlogPostBySlug } from "@/lib/data/blog";

export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  return renderOgImage(post ? post.title : "Dump Happy Blog", post?.category);
}
