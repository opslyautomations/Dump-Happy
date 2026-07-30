import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/blog";
import { formatDate } from "@/lib/date";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Dump Happy Junk Removal Guides",
  description:
    "Guides on junk removal cost, California disposal laws, and Los Angeles clean-out advice from Dump Happy — your local junk removal experts.",
  path: "/blog",
});

const posts = [...BLOG_POSTS].sort(
  (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
);

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-brand-black sm:text-4xl">
          Dump Happy Blog
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-brand-gray">
          Guides on junk removal cost, California disposal laws, and
          Los-Angeles-specific clean-out advice.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition hover:border-brand-orange hover:shadow-md"
            >
              <Image
                src={`/blog/${post.slug}/opengraph-image`}
                alt={post.imageAlt}
                width={1200}
                height={630}
                loading="lazy"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
                className="aspect-[1200/630] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-5">
                <span className="text-xs font-bold uppercase tracking-wide text-brand-orange">
                  {post.category}
                </span>
                <h2 className="mt-2 text-lg font-bold text-brand-black group-hover:text-brand-orange">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-brand-gray">{post.summary}</p>
                <time dateTime={post.datePublished} className="mt-4 text-xs text-brand-gray">
                  {formatDate(post.datePublished)}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
