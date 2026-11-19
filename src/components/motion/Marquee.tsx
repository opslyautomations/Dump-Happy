import type { CSSProperties, ReactNode } from "react";

/**
 * Infinite CSS marquee. Content renders twice for a seamless loop; the copy
 * is aria-hidden so assistive tech and crawlers only see it once. Pauses on
 * hover/focus and stops under reduced motion.
 */
export function Marquee({
  children,
  duration = 40,
  reverse = false,
  className = "",
  gapClass = "gap-10 pr-10",
  align = "items-center",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  gapClass?: string;
  align?: "items-center" | "items-start" | "items-stretch";
}) {
  return (
    <div className={`marquee-host overflow-hidden ${className}`}>
      <div
        className={`marquee ${reverse ? "marquee-reverse" : ""}`}
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
      >
        <div className={`flex shrink-0 ${align} ${gapClass}`}>{children}</div>
        <div className={`flex shrink-0 ${align} ${gapClass}`} aria-hidden="true" inert>
          {children}
        </div>
      </div>
    </div>
  );
}
