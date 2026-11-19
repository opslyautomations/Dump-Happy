import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

// If `stat` starts with a plain number (e.g. "$10,000" or "90%"), that number
// counts up on reveal; the server HTML always carries the final value.
function AnimatedStat({ stat }: { stat: string }) {
  const m = stat.match(/^(\D*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!m) return <>{stat}</>;
  const [, prefix, num, suffix] = m;
  const value = Number(num.replace(/,/g, ""));
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return (
    <>
      {prefix}
      <span data-count={value} data-decimals={decimals} className="tabular-nums">
        {num}
      </span>
      {suffix}
    </>
  );
}

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
      <Reveal className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-6 px-4 py-16 sm:grid-cols-[auto_1fr] sm:gap-10 sm:px-6 lg:px-8">
        <div className="shrink-0">
          <span className="text-sunset font-display block text-6xl font-extrabold tracking-tight sm:text-7xl">
            <AnimatedStat stat={stat} />
          </span>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-brand-gray">{label}</p>
        </div>
        <p className="text-lg leading-relaxed text-brand-charcoal">{children}</p>
      </Reveal>
    </section>
  );
}
