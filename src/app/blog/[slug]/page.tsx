import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blog";
import { BLOG_BODIES } from "@/content/blog-posts";
import { formatDate } from "@/lib/date";
import { buildMetadata, breadcrumbJsonLd, blogPostingJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/data/site";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    ogType: "article",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const Body = BLOG_BODIES[post.slug];
  const path = `/blog/${post.slug}`;
  const primaryService = post.relatedServices[0];

  return (
    <>
      <JsonLd
        data={[
          blogPostingJsonLd({
            title: post.title,
            description: post.metaDescription,
            path,
            image: `${SITE.url}/blog/${post.slug}/opengraph-image`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <span className="text-xs font-bold uppercase tracking-wide text-brand-orange">
          {post.category}
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-brand-black sm:text-4xl">
          {post.title}
        </h1>
        <time dateTime={post.datePublished} className="mt-3 block text-sm text-brand-gray">
          {formatDate(post.datePublished)}
        </time>

        <Image
          src={`/blog/${post.slug}/opengraph-image`}
          alt={post.imageAlt}
          width={1200}
          height={630}
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="mt-8 aspect-[1200/630] w-full rounded-xl object-cover"
        />

        <div className="prose-content mt-10 space-y-5 leading-relaxed text-brand-charcoal [&_a]:font-semibold [&_a]:text-brand-orange [&_a:hover]:underline [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-brand-black [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand-black [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
          {Body ? <Body /> : <p>Content coming soon.</p>}
        </div>
      </article>

      {primaryService && (
        <CTABand
          heading="Ready to get this handled?"
          subtext={`Get a free quote for ${primaryService.replace(/-/g, " ")} today.`}
        />
      )}
      {!primaryService && <CTABand />}

      <div className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 lg:px-8">
        <Link href="/blog" className="text-sm font-semibold text-brand-orange hover:underline">
          ← Back to all articles
        </Link>
      </div>
    </>
  );
}
