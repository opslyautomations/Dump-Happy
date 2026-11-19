import type { CSSProperties } from "react";

/**
 * The Dump Happy smile swoosh, drawn as strokes so it can draw itself.
 *   mode="reveal"  draws once when scrolled into view (IntersectionObserver)
 *   mode="scroll"  draws in lock-step with scroll (CSS view timeline)
 *   mode="static"  always fully drawn
 */
export function Smile({
  className = "",
  mode = "reveal",
  delay = 0,
  strokeWidth = 14,
  eyes = true,
}: {
  className?: string;
  mode?: "reveal" | "scroll" | "static";
  delay?: number;
  strokeWidth?: number;
  eyes?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 320 170"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`${mode === "scroll" ? "smile-scroll" : ""} ${className}`}
      {...(mode === "reveal" ? { "data-reveal": "draw" } : {})}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {eyes && (
        <>
          <path className="smile-path" pathLength={1} d="M104 22 C 100 40, 100 56, 104 70" stroke="currentColor" strokeWidth={strokeWidth + 6} strokeLinecap="round" />
          <path className="smile-path" pathLength={1} d="M176 18 C 172 36, 172 52, 176 66" stroke="currentColor" strokeWidth={strokeWidth + 6} strokeLinecap="round" />
        </>
      )}
      <path
        className="smile-path"
        pathLength={1}
        d="M22 92 C 60 160, 200 176, 288 70"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        className="smile-path"
        pathLength={1}
        d="M252 66 L 292 62 L 290 102"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
