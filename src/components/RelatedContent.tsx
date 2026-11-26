import Link from "next/link";
import type { BlogPostMeta } from "@/lib/data/blog";
import { getPostsForService, getRelatedPosts } from "@/lib/data/blog";
import { getServiceBySlug } from "@/lib/data/services";
import { getLocationBySlug } from "@/lib/data/locations";
import { Reveal } from "@/components/Reveal";

// Internal-link blocks. Rendered as plain server HTML so crawlers see every link.

function GuideCards({ posts }: { posts: BlogPostMeta[] }) {
  return (
    <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {posts.map((p) => (
        <li key={p.slug}>
          <Link
            href={`/blog/${p.slug}`}
            className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange-dark">
              {p.category}
            </span>
            <span className="mt-2 font-display text-lg font-bold leading-snug text-brand-black group-hover:text-brand-orange-dark">
              {p.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** "Guides" section for a service page: every blog post about that service. */
export function ServiceGuides({ serviceSlug, label }: { serviceSlug: string; label: string }) {
  const posts = getPostsForService(serviceSlug);
  if (!posts.length) return null;
  return (
    <section className="bg-brand-offwhite">
      <Reveal className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-brand-ink">{label} Guides</h2>
        <p className="mt-2 text-brand-charcoal">Answers to the questions we hear most, from the Dump Happy blog.</p>
        <GuideCards posts={posts} />
      </Reveal>
    </section>
  );
}

/** End-of-post block: the services, areas, and other guides this post relates to. */
export function BlogRelated({ post }: { post: BlogPostMeta }) {
  const services = post.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const locations = post.relatedLocations
    .map((l) => getLocationBySlug(l))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));
  const related = getRelatedPosts(post.slug);

  const chip =
    "inline-flex min-h-10 items-center rounded-full border border-black/10 bg-white px-4 text-sm font-semibold text-brand-ink transition hover:border-brand-orange hover:text-brand-orange-dark";

  return (
    <section className="mt-20" aria-label="Related services and guides">
      {(services.length > 0 || locations.length > 0) && (
        <div>
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-black">
            Services in this guide
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={chip}>
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/pricing" className={chip}>
                Pricing
              </Link>
            </li>
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className={chip}>
                  Junk removal in {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {related.length > 0 && (
        <div className="mt-12">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-black">Related guides</h2>
          <GuideCards posts={related} />
        </div>
      )}
    </section>
  );
}
