import Link from "next/link";
import {
  DUMP_STORE_TIERS,
  PRICING_TIERS,
  STORAGE_UNITS,
  formatPrice,
} from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

export default function MovingIntoStorageUnitLosAngelesBody() {
  return (
    <>
      <p>
        The easiest way to move into a storage unit in Los Angeles is to book Dump Happy&apos;s{" "}
        <Link href="/services/dump-and-store">Dump + Store</Link> service. Our crew loads what
        you&apos;re keeping, moves it into your storage unit for one flat moving fee from{" "}
        {formatPrice(DUMP_STORE_TIERS[0].priceFrom)} (admin fee and lock included), and hauls
        away anything you don&apos;t want to keep in the same job.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>. Here&apos;s how it works, what it costs,
        and how to plan the move.
      </p>

      <h2>How does Dump + Store work?</h2>
      <ol>
        <li>
          <strong>Tell us what&apos;s going.</strong> Send a few photos or walk us through it. We
          sort it into two piles with you: what&apos;s being stored and what&apos;s being dumped.
        </li>
        <li>
          <strong>Get one flat price.</strong> The moving fee is set by how much of the truck
          your keepers fill, and you know it before anything is loaded.
        </li>
        <li>
          <strong>We load, haul, and move you in.</strong> The crew carries everything out,
          drives it over, and moves it into the unit.
        </li>
        <li>
          <strong>The junk leaves too.</strong> Anything you don&apos;t want to store goes to
          donation, recycling, or legal disposal instead of into a unit you pay rent on.
        </li>
      </ol>

      <h2>How much does it cost to move into a storage unit?</h2>
      <p>
        With Dump Happy, the moving fee is one flat price by load size. The admin fee and lock
        are included:
      </p>
      <table>
        <thead>
          <tr>
            <th>Load</th>
            <th>Approx. volume</th>
            <th>Moving fee</th>
          </tr>
        </thead>
        <tbody>
          {DUMP_STORE_TIERS.map((t) => (
            <tr key={t.key}>
              <td>{t.name}</td>
              <td>{t.subtitle}</td>
              <td>From {formatPrice(t.priceFrom)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Storage rent is separate and billed monthly. Units run from{" "}
        {formatPrice(STORAGE_UNITS[0].pricePerMonth)}/mo for a {STORAGE_UNITS[0].size} to{" "}
        {formatPrice(STORAGE_UNITS[STORAGE_UNITS.length - 1].pricePerMonth)}/mo for a{" "}
        {STORAGE_UNITS[STORAGE_UNITS.length - 1].size}, and rates are subject to change. Not
        sure which size? Read{" "}
        <Link href="/blog/what-size-storage-unit-do-i-need">what size storage unit you need</Link>.
      </p>

      <h2>Why not just rent a truck and do it yourself?</h2>
      <p>
        A DIY move into storage means renting a truck, finding help, loading it, driving it,
        unloading it, and then making a separate run to get rid of everything that wasn&apos;t
        worth keeping. In LA traffic, with street parking and stairs, that&apos;s easily a full
        weekend. A flat fee also means no hourly clock running while the truck sits on the 405.
      </p>

      <h2>Should I get rid of things before I store them?</h2>
      <p>
        Almost always, yes. Every item you store costs rent every month. A broken dresser or a
        pile of old boxes can push you into a bigger unit for years. Our guide on{" "}
        <Link href="/blog/dump-it-or-store-it">whether to dump it or store it</Link> runs the
        numbers. Anything that&apos;s not worth storing, we haul as{" "}
        <Link href="/services/junk-removal">junk removal</Link>, priced by load from{" "}
        {formatPrice(PRICING_TIERS[0].priceFrom)}.
      </p>

      <h2>When do people use Dump + Store?</h2>
      <ul>
        <li>
          <strong>Moving out with a gap before the next place.</strong> See our{" "}
          <Link href="/blog/move-out-junk-removal-los-angeles">move-out junk removal guide</Link>.
        </li>
        <li>
          <strong>Estates and downsizing.</strong> Family keeps the heirlooms in storage while
          the rest is cleared. See{" "}
          <Link href="/services/estate-cleanout">estate clean-outs</Link>.
        </li>
        <li>
          <strong>Renovations.</strong> Furniture goes to storage while the work happens, and the
          old pieces you&apos;re replacing get hauled away.
        </li>
        <li>
          <strong>Garage takeovers.</strong> Clear the garage, store what matters. See{" "}
          <Link href="/services/garage-cleanout">garage clean-outs</Link>.
        </li>
      </ul>

      <h2>Book your move into storage</h2>
      <p>
        Dump Happy serves the Westside, South Bay, and Central LA, 10am to 8pm, seven days a
        week. Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">request a free quote</Link>, and see every rate on our{" "}
        <Link href="/pricing">pricing page</Link>.
      </p>
    </>
  );
}
