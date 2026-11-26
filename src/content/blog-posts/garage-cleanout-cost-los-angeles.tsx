import Link from "next/link";
import { MULTI_LOAD_NOTE, PRICING_TIERS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

const GARAGE_JOBS: Record<string, string> = {
  quarter: "One corner: old furniture, a few boxes, a dead appliance",
  half: "One wall or half a single-car garage",
  "three-quarter": "A full single-car garage or a packed half of a two-car",
  full: "A stuffed two-car garage, wall to wall",
};

export default function GarageCleanoutCostLosAngelesBody() {
  return (
    <>
      <p>
        A garage clean-out in Los Angeles costs {formatPrice(PRICING_TIERS[0].priceFrom)} to{" "}
        {formatPrice(PRICING_TIERS[PRICING_TIERS.length - 1].priceFrom)} per load with Dump Happy,
        depending on how much of the truck it fills. A one-corner clear-out is usually a quarter
        load, and a packed two-car garage often runs a full load or more. Sorting, loading,
        hauling, disposal, and sweep-up are all included.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link> for a{" "}
        <Link href="/services/garage-cleanout">garage clean-out</Link>.
      </p>

      <h2>Garage clean-out prices by load</h2>
      <table>
        <thead>
          <tr>
            <th>Load</th>
            <th>Price</th>
            <th>Typical garage job</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_TIERS.map((t) => (
            <tr key={t.key}>
              <td>
                {t.name} ({t.subtitle})
              </td>
              <td>From {formatPrice(t.priceFrom)}</td>
              <td>{GARAGE_JOBS[t.key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        {MULTI_LOAD_NOTE} For big jobs, that adds up. Every tier is on the{" "}
        <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>What changes the price of a garage clean-out?</h2>
      <ul>
        <li>
          <strong>Volume.</strong> This is the biggest factor. You pay for truck space, not hours.
        </li>
        <li>
          <strong>Heavy materials.</strong> Concrete, tile, dirt, and roofing are dense and
          priced differently. See{" "}
          <Link href="/services/construction-debris-removal">construction debris removal</Link>.
        </li>
        <li>
          <strong>Access.</strong> A detached garage down a long driveway or an alley with no
          parking takes more work.
        </li>
        <li>
          <strong>Hazardous waste.</strong> Paint, oil, and chemicals can&apos;t go in the truck
          and need a household hazardous waste drop-off. We help you set them aside.
        </li>
      </ul>

      <h2>How do I keep the cost down?</h2>
      <ol>
        <li>
          <strong>Decide what stays first.</strong> We sort with you, but knowing your keepers
          saves time. Our{" "}
          <Link href="/blog/how-to-prep-garage-cleanout">garage clean-out prep guide</Link> walks
          through it.
        </li>
        <li>
          <strong>Do it in one visit.</strong> One bigger load costs less than several small
          ones.
        </li>
        <li>
          <strong>Let usable items go to donation.</strong> We route them for you.
        </li>
        <li>
          <strong>Store only what you&apos;ll use.</strong> If some of it&apos;s going to a
          storage unit, <Link href="/services/dump-and-store">Dump + Store</Link> hauls the junk
          and moves the keepers in one job.
        </li>
      </ol>

      <h2>What about old appliances in the garage?</h2>
      <p>
        Garage fridges, freezers, washers, and dryers go in the same trip. Refrigerant units go to
        certified recovery. See{" "}
        <Link href="/services/appliance-removal">appliance removal</Link> and{" "}
        <Link href="/blog/washer-dryer-disposal-los-angeles">washer and dryer disposal</Link>.
      </p>

      <h2>Get a firm garage clean-out price</h2>
      <p>
        Send a few photos of the garage and you&apos;ll get a firm price before anything is
        lifted. We serve LA&apos;s Westside, South Bay, and Central LA, including{" "}
        <Link href="/locations/westchester">Westchester</Link> (see our{" "}
        <Link href="/blog/garage-cleanout-westchester-lax">Westchester garage guide</Link>). Call
        or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a>.
      </p>
    </>
  );
}
