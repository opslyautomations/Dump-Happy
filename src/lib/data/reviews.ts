export interface Review {
  reviewerName: string;
  city?: string;
  rating: number;
  text: string;
}

// Real Google Business Profile reviews, pulled verbatim (typos and all) from
// screenshots of the GBP listing. None of them list a reviewer city, so
// `city` is left unset rather than guessed — do not invent one.
export const REVIEWS: Record<string, Review[]> = {
  general: [
    {
      reviewerName: "Jared Burchard",
      rating: 5,
      text: "Jason was super prompt, very reasonable with pricing, and professional. He offered to help me with my hauling same evening, but I wasn't able to. He was there first thing next morning. My project was to remove large piles of yard debris urgently. Will use his services again anytime. Thanks, Jason.",
    },
    {
      reviewerName: "Jaelin Carter",
      rating: 5,
      text: "I had the pleasure of having Jason come over to our facility to help us get rid of all of our junk. He was professional, polite, and punctual. I recommend Dump Happy services 💯",
    },
    {
      reviewerName: "Rafael Ferguson",
      rating: 5,
      text: "Jason went above and beyond! Amazing first impressions and cleaned out more of our yard than we asked! Excellent service",
    },
    {
      reviewerName: "Leeanna Smith",
      rating: 5,
      text: "Jason is the owner of the company he is so professional accurate and very timely. He was able to fit me in the same day and finish the appointment in a very fast time with the work being most excellent I had to give a tip.",
    },
    {
      reviewerName: "Amy Lee",
      rating: 5,
      text: "I hired dump happy because Jason, the owner called me myself and accidentally gave me a low ball bid but didn't make me feel bad about it when the job was done. He was honest and fast at what he does. He was professional and cleaned the site after he removed everything. Also nothing scared him with the two jobs I sent him to.... One being in south LA. Oh and not sleezy like other companies o chatted with.",
    },
    {
      reviewerName: "Abe Schwartz",
      rating: 5,
      text: "great service! super fast and easy to work with. highly recommend",
    },
    {
      reviewerName: "Gary Hurt",
      rating: 5,
      text: 'If you need anything small or large small amount or large amount removed from your possession I cannot recommend more using Dump Happy. I contacted Jason 9am and he was removing a couch and a chair a few hours later. Everything you want from a small business compared to big removal companies, incredibly affordable, honest, hard working, prompt and kind....showing up with an impeccable work ethic, and a smile. Super easy to get a quote and how can you go wrong with a company motto "We Dump. You relax" I will be using Dump Happy again and again as I declutter and downsize. Give them your business, you will be glad you did!',
    },
  ],
};

export function getReviews(key: string): Review[] {
  return REVIEWS[key] ?? [];
}

export function getAggregateRating(): { ratingValue: number; reviewCount: number } | undefined {
  const all = Object.values(REVIEWS).flat();
  if (all.length === 0) return undefined;
  const ratingValue = all.reduce((sum, r) => sum + r.rating, 0) / all.length;
  return { ratingValue: Math.round(ratingValue * 10) / 10, reviewCount: all.length };
}
