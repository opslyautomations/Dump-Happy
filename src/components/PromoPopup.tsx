"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { PROMO } from "@/lib/data/promo";
import { SITE } from "@/lib/data/site";

// Once dismissed (or once the visitor taps to call), we stay quiet for the rest
// of the browsing session rather than re-firing on every route change.
const STORAGE_KEY = "dh-promo-seen";

// Let the page paint and the visitor start reading before interrupting.
const OPEN_DELAY_MS = 7000;
// Exit intent stays disarmed briefly so a cursor already near the top of the
// window on load doesn't trigger it instantly.
const EXIT_INTENT_ARM_MS = 2500;

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function alreadySeen() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Private browsing or blocked storage — the popup just behaves as if this
    // were a fresh session. Not worth failing over.
  }
}

export function PromoPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  // Don't interrupt someone who just submitted a quote request.
  const suppressed = !PROMO.active || pathname === "/thank-you";

  const close = useCallback(() => {
    markSeen();
    setOpen(false);
  }, []);

  // Triggers: a timer on arrival, plus desktop exit intent.
  useEffect(() => {
    if (suppressed || alreadySeen()) return;

    let armed = false;
    const show = () => {
      if (alreadySeen()) return;
      markSeen();
      setOpen(true);
    };

    const openTimer = window.setTimeout(show, OPEN_DELAY_MS);
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, EXIT_INTENT_ARM_MS);

    // Cursor leaving through the top of the viewport reads as "about to close
    // the tab / reach for the address bar". relatedTarget is null only when the
    // pointer actually left the document.
    const onMouseOut = (e: MouseEvent) => {
      if (!armed || e.relatedTarget || e.clientY > 0) return;
      show();
    };

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [suppressed]);

  // Modal behavior: scroll lock, Escape, focus move + trap, focus restore.
  useEffect(() => {
    if (!open) return;

    lastFocusedRef.current = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const node = dialogRef.current;
    node?.querySelector<HTMLElement>(FOCUSABLE)?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !node) return;

      const items = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      lastFocusedRef.current?.focus();
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-4 sm:items-center"
      onClick={close}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-popup-title"
        aria-describedby="promo-popup-desc"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl motion-safe:animate-[promo-in_220ms_ease-out]"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close offer"
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/20 hover:text-white"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="bg-brand-orange px-6 pb-6 pt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            {PROMO.eyebrow}
          </p>
          <h2
            id="promo-popup-title"
            className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl"
          >
            {PROMO.title}
          </h2>
          <p className="mt-3 text-lg font-bold text-white">
            {PROMO.percentOff}% off if you call
          </p>
        </div>

        <div className="px-6 py-6 text-center">
          <div className="flex items-baseline justify-center gap-3">
            <span className="text-xl font-semibold text-brand-gray line-through">
              {PROMO.regularPrice}
            </span>
            <span className="text-4xl font-bold tracking-tight text-brand-ink">{PROMO.salePrice}</span>
          </div>
          <p id="promo-popup-desc" className="mt-3 text-sm leading-relaxed text-brand-gray">
            Mattress removal is normally {PROMO.regularPrice}. Call and mention promo code{" "}
            <strong className="font-bold text-brand-black">{PROMO.code}</strong> to take{" "}
            {PROMO.percentOff}% off — {PROMO.salePrice} out the door, carried out of any room
            and routed to a California mattress recycler.
          </p>

          <a
            href={`tel:${SITE.phoneRaw}`}
            onClick={close}
            className="mt-6 flex min-h-12 w-full items-center justify-center rounded-md bg-brand-orange px-6 text-base font-bold text-white transition hover:bg-brand-orange-dark"
          >
            Call {SITE.phoneDisplay}
          </a>
          <Link
            href={PROMO.servicePath}
            onClick={close}
            className="mt-3 flex min-h-12 w-full items-center justify-center rounded-md border-2 border-brand-black bg-white px-6 text-sm font-bold text-brand-black transition hover:bg-brand-offwhite"
          >
            See Mattress Removal Details
          </Link>

          <p className="mt-4 text-xs text-brand-gray">{PROMO.finePrint}</p>
        </div>
      </div>
    </div>
  );
}
