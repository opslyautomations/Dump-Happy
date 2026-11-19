"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { BeforeAfterPair } from "@/lib/data/gallery";

/**
 * Drag-to-compare slider. A native range input drives it, so it works with
 * keyboard, touch, and screen readers. Both photos (with full alt text) are
 * in the server HTML.
 */
export function BeforeAfter({ pairs }: { pairs: BeforeAfterPair[] }) {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const pair = pairs[active];

  return (
    <div>
      {pairs.length > 1 && (
        <div className="mb-6 flex flex-wrap gap-2" role="tablist" aria-label="Choose a job">
          {pairs.map((p, i) => (
            <button
              key={p.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => {
                setActive(i);
                setPos(50);
              }}
              className={`min-h-11 rounded-full px-5 text-sm font-semibold transition ${
                i === active
                  ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/30"
                  : "bg-white/10 text-white/80 ring-1 ring-white/15 hover:bg-white/15"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      )}

      <div
        className="group relative mx-auto aspect-[4/5] w-full max-w-xl touch-pan-y select-none overflow-hidden rounded-[2rem] bg-brand-night-2 shadow-2xl shadow-black/40 ring-1 ring-white/10"
        style={{ "--pos": `${pos}%` } as CSSProperties}
      >
        <Image
          key={`${pair.key}-after`}
          src={pair.after.src}
          alt={pair.after.alt}
          fill
          sizes="(min-width: 640px) 36rem, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: "inset(0 calc(100% - var(--pos)) 0 0)" }}>
          <Image
            key={`${pair.key}-before`}
            src={pair.before.src}
            alt={pair.before.alt}
            fill
            sizes="(min-width: 640px) 36rem, 100vw"
            className="object-cover"
          />
        </div>

        {/* the job photos carry their own BEFORE / AFTER labels */}
        {/* divider + handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ left: "var(--pos)" }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-ink shadow-xl transition-transform duration-300 group-hover:scale-110">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={`Drag to compare before and after: ${pair.title}`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <p className="mt-4 text-center text-sm text-white/50">Drag the handle to compare</p>
    </div>
  );
}
