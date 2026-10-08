import Link from "next/link";
import { PRICING_TIERS } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

const smallLoad = PRICING_TIERS[0];

export default function MattressRemovalCostLosAngelesBody() {
  return (
    <>
      <p>
        Mattress removal in Los Angeles costs from ${smallLoad.priceFrom} with Dump Happy, and
        that small load usually covers a mattress, box spring, and bed frame together. The price
        includes carrying it out of any room, hauling, and recycling, with a firm quote before we
        lift anything.
      </p>
      <p>
        Call <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>.
      </p>

      <h2>What does a mattress pickup cost with Dump Happy?</h2>
      <p>
        We price by how much space your items take up in the truck, not by the piece. A mattress
        on its own, or a mattress with its box spring and frame, fits in our{" "}
        {smallLoad.name.toLowerCase()} tier, which starts at ${smallLoad.priceFrom}. That price
        covers the crew carrying it out of the bedroom, down any stairs, loading, transport, and
        routing it to a mattress recycler rather than a landfill. You get a firm quote before we
        lift anything, and if the job ends up smaller than quoted, you pay the lower tier.
      </p>
      <ul>
        <li>
          <strong>Small load:</strong> from $289
        </li>
        <li>
          <strong>Quarter load:</strong> from $389
        </li>
        <li>
          <strong>Half load:</strong> from $569
        </li>
        <li>
          <strong>3/4 load:</strong> from $739
        </li>
        <li>
          <strong>Full load (16ft trailer):</strong> from $899
        </li>
      </ul>
      <p>
        The full tier breakdown lives on our <Link href="/pricing">pricing page</Link>, and the
        details of how a pickup works are on the{" "}
        <Link href="/services/mattress-removal">mattress removal service page</Link>.
      </p>

      <h2>What changes the price of mattress removal?</h2>
      <p>
        Because pricing is load-based, the mattress itself is rarely what moves the number. What
        does:
      </p>
      <ul>
        <li>
          <strong>Everything else leaving with it.</strong> A bed frame, headboard, nightstands, or
          a few bags of clutter can ride along in the same load, which is almost always cheaper than
          booking them as separate jobs later.
        </li>
        <li>
          <strong>More than one mattress.</strong> Clearing a whole house, a rental between
          tenants, or a short-term rental with several beds takes more truck space.
        </li>
        <li>
          <strong>Very heavy or oversized items.</strong> A king hybrid or an adjustable base is
          bulkier than a twin memory-foam mattress, and adjustable bases include motors and wiring.
        </li>
      </ul>
      <p>
        What doesn&apos;t change it: stairs, elevators, or a third-floor walk-up. Carrying it out is
        part of the job.
      </p>

      <h2>What&apos;s included in the price?</h2>
      <ul>
        <li>Carrying the mattress out from any room</li>
        <li>Loading and hauling</li>
        <li>Recycling at a California mattress recycler</li>
        <li>Same-day or next-day pickup when the schedule allows</li>
      </ul>
      <p>
        Looking for the cheapest way to handle it? Our guide to{" "}
        <Link href="/blog/free-mattress-pickup-los-angeles">
          what mattress pickup really costs in LA
        </Link>{" "}
        covers how to keep the price down.
      </p>

      <h2>Why can a “cheap” hauler cost you more?</h2>
      <p>
        Mattresses are among the most commonly dumped items in LA, and a lot of that dumping
        traces back to low-ball haulers who skip the recycling and leave the mattress in an alley.
        Under California Penal Code 374.3, illegal dumping carries mandatory fines, and each day
        the item stays counts as a separate violation. When you hire someone, ask where the
        mattress goes. We route ours to a mattress recycler and will tell you so plainly. Our guide
        to{" "}
        <Link href="/blog/how-to-choose-junk-removal-company">choosing a junk removal company</Link>{" "}
        covers the other questions worth asking.
      </p>

      <h2>Get a firm price on your mattress removal</h2>
      <p>
        Whether it&apos;s one mattress or a whole bedroom, a single pickup starting at $
        {smallLoad.priceFrom} takes care of it in one visit. Read{" "}
        <Link href="/blog/how-to-get-rid-of-a-mattress-los-angeles">
          how to get rid of a mattress in Los Angeles
        </Link>
        , then call <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>, and we&apos;ll tell you exactly which tier
        your job falls into.
      </p>
    </>
  );
}
