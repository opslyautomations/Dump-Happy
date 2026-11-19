import { getReviews, type Review } from "@/lib/data/reviews";
import { SITE } from "@/lib/data/site";
import { Marquee } from "@/components/motion/Marquee";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-orange" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r, className = "" }: { r: Review; className?: string }) {
  return (
    <figure
      data-spotlight
      className={`flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${className}`}
    >
      <div className="relative flex items-center justify-between">
        <Stars rating={r.rating} />
        <span aria-hidden="true" className="font-display text-5xl leading-none text-brand-orange/20">
          &rdquo;
        </span>
      </div>
      <blockquote className="relative mt-3 flex-1 leading-relaxed text-brand-charcoal">&ldquo;{r.text}&rdquo;</blockquote>
      <figcaption className="relative mt-6 flex items-center gap-3 text-sm font-semibold text-brand-black">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-night font-display text-white">
          {r.reviewerName.charAt(0)}
        </span>
        <span>
          {r.reviewerName}
          <span className="block text-xs font-normal text-brand-gray">
            {r.city ? `${r.city} · ` : ""}Google review
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export function ReviewSlot({
  contextKey,
  label,
  limit,
  variant = "grid",
}: {
  contextKey: string;
  label: string;
  limit?: number;
  // "marquee" = two auto-scrolling rows (pauses on hover); "grid" = static cards
  variant?: "grid" | "marquee";
}) {
  const allReviews = getReviews(contextKey);
  const reviews = limit ? allReviews.slice(0, limit) : allReviews;

  if (reviews.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-brand-gray/40 bg-brand-offwhite p-6 text-sm text-brand-gray">
        Real {label} reviews from our Google Business Profile are being added here.{" "}
        <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange-dark hover:underline">
          See our reviews on Google
        </a>{" "}
        or visit our{" "}
        <a href="/reviews" className="font-semibold text-brand-orange-dark hover:underline">
          Reviews page
        </a>
        .
      </div>
    );
  }

  if (variant === "marquee") {
    const half = Math.ceil(reviews.length / 2);
    const rows = [reviews.slice(0, half), reviews.slice(half)].filter((r) => r.length);
    return (
      <div className="flex flex-col gap-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {rows.map((row, i) => (
          <Marquee key={i} duration={55 + i * 10} reverse={i % 2 === 1} gapClass="gap-5 pr-5" align="items-stretch">
            {row.map((r) => (
              <ReviewCard key={r.reviewerName} r={r} className="w-[22rem] shrink-0 sm:w-[26rem]" />
            ))}
          </Marquee>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => (
        <ReviewCard key={i} r={r} />
      ))}
    </div>
  );
}
