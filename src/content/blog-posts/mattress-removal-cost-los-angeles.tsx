import Link from "next/link";
import { PRICING_TIERS } from "@/lib/data/pricing";
import { PROMO } from "@/lib/data/promo";
import { SITE } from "@/lib/data/site";

const smallLoad = PRICING_TIERS[0];

export default function MattressRemovalCostLosAngelesBody() {
  return (
    <>
      <p>
        Most people only think about mattress removal on the day the new one arrives — and then
        discover the old one is too big for the trash, too heavy to carry alone, and not something
        you can just leave by the curb. So what does it actually cost to get a mattress hauled
        away in Los Angeles, and when is it worth paying at all?
      </p>

      <h2>What a mattress pickup costs with Dump Happy</h2>
      <p>
        We price by how much space your items take up in the truck, not by the piece. A mattress
        on its own — or a mattress with its box spring and frame — fits in our{" "}
        {smallLoad.name.toLowerCase()} tier, which starts at ${smallLoad.priceFrom}. That price
        covers the crew carrying it out of the bedroom, down any stairs, loading, transport, and
        routing it to a mattress recycler rather than a landfill. You get a firm quote before we
        lift anything, and if the job ends up smaller than quoted, you pay the lower tier.
      </p>
      {PROMO.active && (
        <p>
          <strong>Current offer:</strong> {PROMO.title} — {PROMO.percentOff}% off a mattress pickup
          ({PROMO.regularPrice} → {PROMO.salePrice}) when you call{" "}
          <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> and mention code{" "}
          <strong>{PROMO.code}</strong>. {PROMO.finePrint}
        </p>
      )}
      <p>
        The full tier breakdown lives on our <Link href="/pricing">pricing page</Link>, and the
        details of how a pickup works are on the{" "}
        <Link href="/services/mattress-removal">mattress removal service page</Link>.
      </p>

      <h2>What changes the price</h2>
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

      <h2>The free options — and their real cost</h2>
      <p>
        Los Angeles has several legitimate free ways to get rid of a mattress, and for a single
        mattress with no deadline, they&apos;re worth knowing about. We compare them in detail in{" "}
        <Link href="/blog/free-mattress-pickup-los-angeles">our free mattress pickup guide</Link>,
        but in short:
      </p>
      <ul>
        <li>
          <strong>LA Sanitation bulky item pickup</strong> is free for homes the city serves. You
          schedule it through MyLA311 or 311 at least one business day before trash day, then
          carry the mattress to the curb yourself.
        </li>
        <li>
          <strong>Retailer take-back</strong> is required in California: when a retailer delivers
          a new mattress, it has to offer to take your old one at no charge.
        </li>
        <li>
          <strong>Bye Bye Mattress drop-off sites</strong> accept residents&apos; mattresses free,
          if you can transport it yourself.
        </li>
      </ul>
      <p>
        The catch with each is the same: you do the lifting, you work around someone else&apos;s
        schedule, and the free option usually covers only the mattress. If you&apos;re also
        clearing a frame, a dresser, or a garage corner, or you need it gone today, paying for one
        pickup that takes everything often costs less in time than coordinating three free ones.
      </p>

      <h2>Why a “cheap” hauler can cost you more</h2>
      <p>
        Mattresses are among the most commonly dumped items in LA, and a lot of that dumping
        traces back to low-ball haulers who skip the recycling fee and leave the mattress in an
        alley. Under California Penal Code 374.3, illegal dumping carries mandatory fines, and
        each day the item stays counts as a separate violation. When you hire someone, ask where
        the mattress goes. A legitimate hauler routes it to a mattress recycler and can tell you
        so plainly. Our guide to{" "}
        <Link href="/blog/how-to-choose-junk-removal-company">choosing a junk removal company</Link>{" "}
        covers the other questions worth asking.
      </p>

      <h2>The bottom line</h2>
      <p>
        If it&apos;s one mattress, you have a vehicle or a flexible week, and you can carry it,
        a free option is hard to beat. If there&apos;s more than a mattress, stairs are involved,
        or you just want it gone, a single pickup starting at ${smallLoad.priceFrom} takes care of
        the whole bedroom in one visit. <Link href="/contact">Get a free quote</Link> and
        we&apos;ll tell you exactly which tier your job falls into.
      </p>
    </>
  );
}
