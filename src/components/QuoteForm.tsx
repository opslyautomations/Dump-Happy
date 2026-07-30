"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { SERVICES } from "@/lib/data/services";
import { LOCATIONS } from "@/lib/data/locations";

type Status = "idle" | "submitting" | "error";

export function QuoteForm({
  compact = false,
  defaultService,
  defaultCity,
}: {
  compact?: boolean;
  defaultService?: string;
  defaultCity?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please call us instead.");
      }

      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputClass =
    "min-h-12 w-full rounded-md border border-black/15 bg-white px-4 text-sm text-brand-black placeholder:text-brand-gray focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30";
  const labelClass = "text-sm font-semibold text-brand-black";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 rounded-2xl bg-white ${compact ? "p-5" : "p-6 sm:p-8"} shadow-lg`}
    >
      {!compact && (
        <div>
          <h2 className="text-xl font-extrabold text-brand-black">Get a Free Quote</h2>
          <p className="mt-1 text-sm text-brand-gray">
            No obligation. We&apos;ll text or call you back fast.
          </p>
        </div>
      )}

      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input id="name" name="name" required className={`mt-1 ${inputClass}`} placeholder="Jane Smith" />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={`mt-1 ${inputClass}`}
            placeholder="(424) 356-4141"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className={`mt-1 ${inputClass}`} placeholder="jane@email.com" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="service">
            Service
          </label>
          <select id="service" name="service" defaultValue={defaultService ?? ""} className={`mt-1 ${inputClass}`}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City
          </label>
          <select id="city" name="city" defaultValue={defaultCity ?? ""} className={`mt-1 ${inputClass}`}>
            <option value="" disabled>
              Select your city
            </option>
            {LOCATIONS.map((l) => (
              <option key={l.slug} value={l.slug}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          className={`mt-1 ${inputClass} min-h-24 py-3`}
          placeholder="Tell us what needs to go..."
        />
      </div>

      {error && <p className="text-sm font-semibold text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex min-h-12 items-center justify-center rounded-md bg-brand-orange px-6 text-sm font-bold text-white transition hover:bg-brand-orange-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Quote"}
      </button>
    </form>
  );
}
