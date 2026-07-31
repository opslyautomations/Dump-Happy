import { getReviews } from "@/lib/data/reviews";
import { SITE } from "@/lib/data/site";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-brand-orange" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < rating ? "currentColor" : "none"} stroke="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" strokeWidth="1" strokeLinejoin="round" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewSlot({
  contextKey,
  label,
  limit,
}: {
  contextKey: string;
  label: string;
  limit?: number;
}) {
  const allReviews = getReviews(contextKey);
  const reviews = limit ? allReviews.slice(0, limit) : allReviews;

  if (reviews.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-brand-gray/40 bg-brand-offwhite p-6 text-sm text-brand-gray">
        Real {label} reviews from our Google Business Profile are being added here.{" "}
        <a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-orange hover:underline">
          See our reviews on Google
        </a>{" "}
        or visit our{" "}
        <a href="/reviews" className="font-semibold text-brand-orange hover:underline">
          Reviews page
        </a>
        .
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((r, i) => (
        <figure key={i} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
          <Stars rating={r.rating} />
          <blockquote className="mt-3 text-sm text-brand-charcoal">&ldquo;{r.text}&rdquo;</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-brand-black">
            {r.reviewerName}
            {r.city ? <span className="font-normal text-brand-gray"> · {r.city}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
