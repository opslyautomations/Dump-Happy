import type { FaqItem } from "@/lib/seo";

// Native <details>: every answer is in the HTML (crawlable, works without JS).
// Height animates where the browser supports interpolate-size (globals.css).
export function FAQAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => (
        <details
          key={i}
          className="group rounded-2xl border border-black/5 bg-white px-6 py-1 shadow-sm transition-colors duration-300 open:border-brand-orange/20 open:shadow-lg open:shadow-brand-orange/5"
          {...(i === 0 ? { open: true } : {})}
        >
          <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-black marker:content-none [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              aria-hidden="true"
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-pale text-brand-orange-dark transition duration-500 group-open:rotate-[135deg] group-open:bg-brand-orange group-open:text-white"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="pb-5 pr-12 text-[15px] leading-relaxed text-brand-slate">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
