export interface Review {
  reviewerName: string;
  city: string;
  rating: number;
  text: string;
}

// NEEDS: real Google Business Profile reviews. Pull from the GBP URL in site.ts
// and tag each review to the city/service it belongs to. Do not fabricate —
// leave a context key's array empty until a real review is added.
export const REVIEWS: Record<string, Review[]> = {};

export function getReviews(key: string): Review[] {
  return REVIEWS[key] ?? [];
}

// If/when real reviews exist, compute this from REVIEWS instead of hardcoding.
export function getAggregateRating(): { ratingValue: number; reviewCount: number } | undefined {
  const all = Object.values(REVIEWS).flat();
  if (all.length === 0) return undefined;
  const ratingValue = all.reduce((sum, r) => sum + r.rating, 0) / all.length;
  return { ratingValue: Math.round(ratingValue * 10) / 10, reviewCount: all.length };
}
