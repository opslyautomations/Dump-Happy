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
  const styles =
    variant === "warning"
      ? "border-brand-orange/40 bg-brand-orange/5"
      : "border-black/10 bg-brand-offwhite";
  return (
    <div className={`rounded-xl border-l-4 ${styles} p-6`}>
      <h3 className="flex items-center gap-2 text-lg font-bold text-brand-black">
        {variant === "warning" && (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 text-brand-orange" aria-hidden="true">
            <path d="M10 2 1 18h18L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M10 8v4M10 15h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
        {title}
      </h3>
      <div className="mt-3 text-sm leading-relaxed text-brand-charcoal">{children}</div>
    </div>
  );
}
