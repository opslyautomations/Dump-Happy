import type { ReactNode } from "react";

export function Callout({
  title,
  children,
  variant = "warning",
}: {
  title: string;
  children: ReactNode;
  variant?: "warning" | "info";
}) {
  const warning = variant === "warning";
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-7 sm:p-8 ${
        warning ? "grain bg-brand-night text-white" : "border border-black/5 bg-brand-offwhite"
      }`}
    >
      {warning && (
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/40 blur-3xl" />
      )}
      <h3 className={`relative z-[2] flex items-center gap-3 text-xl font-bold ${warning ? "text-white" : "text-brand-black"}`}>
        {warning && (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2 1 18h18L10 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M10 8v4M10 15h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
        )}
        {title}
      </h3>
      <div
        className={`relative z-[2] mt-4 text-[15px] leading-relaxed ${
          warning ? "text-white/75 [&_a]:text-brand-orange-light [&_strong]:text-white" : "text-brand-charcoal"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
