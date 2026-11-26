import Link from "next/link";
import { LOAD_INCLUDES, MULTI_LOAD_NOTE, PRICING_TIERS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

export default function DumpFeesLosAngelesBody() {
  return (
    <>
      <p>
        Dump fees are what it costs to get a load of junk legally disposed of. With Dump Happy, the
        dump fee is one price by load size, from {formatPrice(PRICING_TIERS[0].priceFrom)} for a
        quarter load to {formatPrice(PRICING_TIERS[PRICING_TIERS.length - 1].priceFrom)} for a
        full load, and it covers the crew, loading, hauling, disposal, and cleanup. You don&apos;t
        pay a landfill separately.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>.
      </p>

      <h2>What are Dump Happy&apos;s dump fees?</h2>
      <table>
        <thead>
          <tr>
            <th>Load</th>
            <th>Approx. volume</th>
            <th>Dump fee</th>
          </tr>
        </thead>
        <tbody>
          {PRICING_TIERS.map((t) => (
            <tr key={t.key}>
              <td>{t.name}</td>
              <td>{t.subtitle}</td>
              <td>From {formatPrice(t.priceFrom)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        {LOAD_INCLUDES} {MULTI_LOAD_NOTE} See the full <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>What do dump fees cover when you hire a hauler?</h2>
      <ul>
        <li>The crew and the truck</li>
        <li>Carrying items out of any room, including stairs</li>
        <li>Hauling to the right facility: donation, recycler, or transfer station</li>
        <li>Disposal and recycling charges at those facilities</li>
        <li>Sweeping up after the load is out</li>
      </ul>

      <h2>What does it cost to take junk to the dump yourself?</h2>
      <p>
        Self-hauling looks cheaper until you add it up. Transfer stations and landfills charge
        their own gate fees, usually by weight or load, and rates vary by facility. On top of
        that you&apos;re paying for a truck rental, gas, mileage, and your own time loading and
        unloading. Many facilities also turn away mattresses, TVs, appliances with refrigerant,
        and other items that need special handling, so you end up making a second trip.
      </p>
      <p>
        Our guide to the{" "}
        <Link href="/blog/cheapest-way-to-get-rid-of-junk-los-angeles">
          cheapest way to get rid of junk in LA
        </Link>{" "}
        compares the options side by side.
      </p>

      <h2>Which items cost extra to dump?</h2>
      <p>
        Some items can&apos;t go in a regular load at the dump. Fridges need certified refrigerant
        recovery, TVs and computers are e-waste, and mattresses go to state mattress recyclers.
        We handle all of them in the same pickup. See{" "}
        <Link href="/blog/what-junk-haulers-cant-take">what junk haulers can&apos;t take</Link>{" "}
        for the short list of hazardous materials nobody can haul with regular junk.
      </p>

      <h2>How do I keep dump fees down?</h2>
      <ol>
        <li>
          <strong>Do it in one trip.</strong> Combine everything into one load instead of several
          small ones.
        </li>
        <li>
          <strong>Pull out the donations.</strong> Usable furniture often goes to donation
          instead of disposal.
        </li>
        <li>
          <strong>Book multiple loads together.</strong> On bigger jobs, prices drop after your
          first load.
        </li>
      </ol>

      <h2>Get a firm dump fee before we load</h2>
      <p>
        Send a few photos and you&apos;ll get a firm price before anything is lifted. Book{" "}
        <Link href="/services/junk-removal">junk removal</Link>, or read{" "}
        <Link href="/blog/junk-removal-cost-los-angeles">how much junk removal costs in LA</Link>.
        Keeping some things? <Link href="/services/dump-and-store">Dump + Store</Link> hauls the
        junk and moves the rest into storage.
      </p>
    </>
  );
}
