import type { FaqItem } from "@/lib/seo";

export function FAQAccordion({ faqs }: { faqs: FaqItem[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-xl border border-black/10 bg-white">
      {faqs.map((faq, i) => (
        <details key={i} className="group p-5 open:bg-brand-offwhite/60" {...(i === 0 ? { open: true } : {})}>
          <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-black marker:content-none">
            {faq.question}
            <span className="shrink-0 text-xl text-brand-orange group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-brand-gray">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
