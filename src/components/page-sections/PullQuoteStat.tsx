import type { ReactNode } from "react";

export function PullQuoteStat({
  stat,
  label,
  children,
  bg = "white",
}: {
  stat: string;
  label: string;
  children: ReactNode;
  bg?: "white" | "offwhite";
}) {
  return (
    <section className={bg === "offwhite" ? "bg-brand-offwhite" : ""}>
      <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 px-4 py-14 sm:grid-cols-[auto_1fr] sm:px-6 lg:px-8">
        <div className="shrink-0">
          <span className="block text-5xl font-extrabold text-brand-orange sm:text-6xl">
            {stat}
          </span>
          <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-gray">
            {label}
          </p>
        </div>
        <p className="leading-relaxed text-brand-charcoal">{children}</p>
      </div>
    </section>
  );
}
