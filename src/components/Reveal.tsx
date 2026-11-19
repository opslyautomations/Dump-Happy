import type { CSSProperties, ReactNode } from "react";

export type RevealVariant = "up" | "fade" | "scale" | "blur" | "left" | "right" | "clip";

/**
 * Scroll-reveal wrapper. Content is visible in the HTML by default; the hidden
 * start state only applies once MotionRuntime adds `.reveal-ready` (JS on,
 * motion allowed), so crawlers and no-JS visitors always see everything.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}) {
  return (
    <div
      data-reveal={variant === "up" ? "" : variant}
      className={className}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
