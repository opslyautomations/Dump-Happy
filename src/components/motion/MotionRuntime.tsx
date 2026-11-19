"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One tiny client island that powers every motion hook on the site via data
 * attributes, so the pages themselves stay server-rendered:
 *
 *   [data-reveal]     fades/clips in when scrolled into view
 *   [data-count]      counts up to its (server-rendered) number on reveal
 *   [data-spotlight]  cursor-following glow (fine pointers only)
 *   [data-magnetic]   element leans toward the cursor (fine pointers only)
 *
 * plus Lenis inertial smooth scrolling. Everything is skipped under
 * prefers-reduced-motion, and nothing here hides content from crawlers —
 * the hidden state only applies after `.reveal-ready` is set by JS.
 */
export function MotionRuntime() {
  const pathname = usePathname();

  // Smooth scroll + pointer effects: set up once for the whole session.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let lenis: Lenis | null = null;
    if (!reduce) {
      lenis = new Lenis({ autoRaf: true, lerp: 0.12, anchors: { offset: -96 } });
    }

    if (reduce || !finePointer) {
      return () => lenis?.destroy();
    }

    let magnet: HTMLElement | null = null;
    const release = () => {
      if (magnet) magnet.style.transform = "";
      magnet = null;
    };

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const spot = target.closest<HTMLElement>("[data-spotlight]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const m = target.closest<HTMLElement>("[data-magnetic]");
      if (m !== magnet) release();
      if (m) {
        magnet = m;
        const r = m.getBoundingClientRect();
        const strength = Number(m.dataset.magnetic) || 0.3;
        const dx = (e.clientX - (r.left + r.width / 2)) * strength;
        const dy = (e.clientY - (r.top + r.height / 2)) * strength;
        m.style.transform = `translate(${dx}px, ${dy}px)`;
      }
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", release);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", release);
      lenis?.destroy();
    };
  }, []);

  // Reveal + count-up: re-scan on every route change so client navigations animate.
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("reveal-ready");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)"),
    );
    const countEls = reduce
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>("[data-count]:not([data-counted])"));

    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealIO.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    revealEls.forEach((el) => revealIO.observe(el));

    const frames = new Set<number>();
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          countIO.unobserve(el);
          el.dataset.counted = "";
          const to = Number(el.dataset.count);
          const decimals = Number(el.dataset.decimals ?? 0);
          const start = performance.now();
          const duration = 1600;
          const step = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
            el.textContent = (to * (t === 1 ? 1 : eased)).toLocaleString("en-US", {
              minimumFractionDigits: decimals,
              maximumFractionDigits: decimals,
            });
            if (t < 1) frames.add(requestAnimationFrame(step));
          };
          frames.add(requestAnimationFrame(step));
        }
      },
      { threshold: 0.6 },
    );
    countEls.forEach((el) => countIO.observe(el));

    return () => {
      revealIO.disconnect();
      countIO.disconnect();
      frames.forEach(cancelAnimationFrame);
    };
  }, [pathname]);

  return null;
}
