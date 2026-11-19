import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/data/blog";
import { BLOG_BODIES } from "@/content/blog-posts";
import { formatDate } from "@/lib/date";
import { buildMetadata, breadcrumbJsonLd, blogPostingJsonLd, faqPageJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/data/site";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABand } from "@/components/CTABand";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { PageIntro } from "@/components/page-sections/PageIntro";

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
            keywords: post.targetKeyword,
            abstract: post.quickAnswer,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path },
          ]),
          ...(post.faqs?.length ? [faqPageJsonLd(post.faqs)] : []),
        ]}
      />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path },
        ]}
      />

      <article>
        <PageIntro
          eyebrow={post.category}
          title={post.title}
          meta={
            <p className="text-white/70">
              <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              {post.dateModified !== post.datePublished && (
                <>
                  {" · Updated "}
                  <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
                </>
              )}
            </p>
          }
        />

        <div className="bg-brand-cream">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            {post.quickAnswer && (
              <aside
                data-quick-answer
                className="relative overflow-hidden rounded-3xl border border-brand-orange/20 bg-white p-7 shadow-lg shadow-brand-orange/5 sm:p-8"
              >
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-brand-sun via-brand-orange to-brand-orange-dark" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">
                  Quick answer
                </p>
                <p className="mt-3 text-lg leading-relaxed text-brand-ink">{post.quickAnswer}</p>
              </aside>
            )}

            <Reveal variant="clip" className="mt-10">
              <Image
                src={`/blog/${post.slug}/opengraph-image`}
                alt={post.imageAlt}
                width={1200}
                height={630}
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="aspect-[1200/630] w-full rounded-3xl object-cover shadow-xl shadow-black/10"
              />
            </Reveal>

            <div className="prose-content mt-12 space-y-5 text-[17px] leading-relaxed text-brand-charcoal [&_a]:font-semibold [&_a]:text-brand-orange-dark [&_a:hover]:underline [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-extrabold [&_h2]:leading-tight [&_h2]:tracking-tight [&_h2]:text-brand-black [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-brand-black [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-brand-orange [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:marker:font-semibold [&_ol]:marker:text-brand-orange-dark [&_table]:block [&_table]:max-w-full [&_table]:overflow-x-auto [&_table]:border-collapse [&_table]:rounded-2xl [&_table]:bg-white [&_table]:text-sm [&_th]:border-b-2 [&_th]:border-black/10 [&_th]:p-3 [&_th]:text-left [&_th]:font-bold [&_th]:text-brand-black [&_td]:border-b [&_td]:border-black/10 [&_td]:p-3 [&_td]:align-top">
              {Body ? <Body /> : <p>Content coming soon.</p>}
            </div>

            {post.faqs?.length ? (
              <section className="mt-20">
                <Reveal>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange-dark">FAQ</p>
                  <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] text-brand-ink sm:text-5xl">Frequently Asked Questions</h2>
                </Reveal>
                <Reveal delay={100} className="mt-8">
                  <FAQAccordion faqs={post.faqs} />
                </Reveal>
              </section>
            ) : null}
          </div>
        </div>
      </article>

      {primaryService && (
        <CTABand
          heading="Ready to get this handled?"
          subtext={`Get a free quote for ${primaryService.replace(/-/g, " ")} today.`}
        />
      )}
      {!primaryService && <CTABand />}

      <div className="bg-brand-cream">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex min-h-11 items-center rounded-full border border-black/10 bg-white px-5 text-sm font-semibold text-brand-ink transition hover:bg-brand-ink hover:text-white"
          >
            ← Back to all articles
          </Link>
        </div>
      </div>
    </>
  );
}
