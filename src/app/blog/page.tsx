import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data/blog";
import { formatDate } from "@/lib/date";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";
import { ArrowRightIcon } from "@/components/Icons";

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

      <PageIntro eyebrow="Guides & advice" title="Dump Happy Blog">
        <p>
          Guides on junk removal cost, California disposal laws, and
          Los-Angeles-specific clean-out advice.
        </p>
      </PageIntro>

      <section className="bg-brand-cream">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  data-spotlight
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={`/blog/${post.slug}/opengraph-image`}
                      alt={post.imageAlt}
                      width={1200}
                      height={630}
                      loading="lazy"
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
                      className="aspect-[1200/630] w-full object-cover transition duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                      {post.category}
                    </span>
                    <h2 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-brand-black transition-colors group-hover:text-brand-orange-dark">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-slate">{post.metaDescription}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <time dateTime={post.datePublished} className="text-xs text-brand-slate">
                        {formatDate(post.datePublished)}
                      </time>
                      <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-brand-ink transition duration-500 group-hover:rotate-[-45deg] group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-white">
                        <ArrowRightIcon size={15} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
