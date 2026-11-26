import Link from "next/link";
import { DUMP_STORE_TIERS, STORAGE_UNITS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

// Common industry rules of thumb, not guarantees: furniture shape and how
// tightly it's packed change what fits.
const FITS: Record<string, string> = {
  "10×10": "A one-bedroom apartment or a studio's furniture plus boxes",
  "10×15": "A one- to two-bedroom apartment",
  "10×20": "A two-bedroom apartment or small house, about the size of a one-car garage",
  "10×25": "A two- to three-bedroom house",
  "10×29": "A three-bedroom-plus house, including large furniture and appliances",
};

export default function WhatSizeStorageUnitDoINeedBody() {
  return (
    <>
      <p>
        Most people need a 10×10 storage unit for a one-bedroom apartment, a 10×15 for one to two
        bedrooms, and a 10×20 or larger for a house. The fastest way to know for sure is to send
        Dump Happy a few photos. We&apos;ll recommend a unit size and a moving load before you
        book, then move you in with our{" "}
        <Link href="/services/dump-and-store">Dump + Store</Link> service.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>.
      </p>

      <h2>Storage unit sizes and prices</h2>
      <p>
        Here are the unit sizes we move customers into, with current monthly rates (subject to
        change) and a rule-of-thumb guide to what fits:
      </p>
      <table>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Monthly rate</th>
            <th>Typically fits</th>
          </tr>
        </thead>
        <tbody>
          {STORAGE_UNITS.map((u) => (
            <tr key={u.size}>
              <td>{u.size}</td>
              <td>{formatPrice(u.pricePerMonth)}/mo</td>
              <td>{FITS[u.size] ?? "Ask us for a recommendation"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        These are estimates. Sectionals, dining sets, and how tightly things are packed all
        change what fits, which is why a quick photo review beats guessing.
      </p>

      <h2>How do I pick between two sizes?</h2>
      <ul>
        <li>
          <strong>Measure your biggest pieces.</strong> Long sofas, bed frames, and tall shelves
          decide the layout more than boxes do.
        </li>
        <li>
          <strong>Leave an aisle if you&apos;ll need access.</strong> If you plan to pull things
          out during the year, size up slightly so you&apos;re not unpacking the whole unit.
        </li>
        <li>
          <strong>Cut before you size.</strong> Dropping what you don&apos;t need is the cheapest
          way to fit a smaller unit. See{" "}
          <Link href="/blog/dump-it-or-store-it">dump it or store it</Link> for the math.
        </li>
      </ul>

      <h2>How does unit size relate to the moving fee?</h2>
      <p>
        The moving fee is based on how much of our truck your things fill, not the unit size. As
        a rough guide, a quarter load (about 3.5 cubic yards) starts at{" "}
        {formatPrice(DUMP_STORE_TIERS[0].priceFrom)} and a full load (about 14 cubic yards) starts
        at {formatPrice(DUMP_STORE_TIERS[DUMP_STORE_TIERS.length - 1].priceFrom)}, with the admin
        fee and lock included. Every tier is on our <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>What shouldn&apos;t go into storage?</h2>
      <p>
        Broken furniture, worn-out mattresses, and old electronics rarely come back out of
        storage. They just take up rented space. We can haul those the same day as the move.
        Mattresses go to a California mattress recycler (see{" "}
        <Link href="/services/mattress-removal">mattress removal</Link>), and old TVs and
        computers go to certified e-waste recyclers (see{" "}
        <Link href="/blog/how-to-dispose-of-a-tv">how to dispose of a TV</Link>).
      </p>

      <h2>Get a size recommendation</h2>
      <p>
        Send photos to <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">request a quote</Link>. We&apos;ll tell you the unit size, the
        moving load, and the price before you book. Planning the whole move? Read{" "}
        <Link href="/blog/moving-into-storage-unit-los-angeles">
          how to move into a storage unit in LA
        </Link>
        .
      </p>
    </>
  );
}
