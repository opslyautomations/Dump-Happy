import Link from "next/link";
import { PRICING_TIERS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

export default function DrywallDisposalLosAngelesBody() {
  return (
    <>
      <p>
        The easiest way to dispose of drywall in Los Angeles is to book Dump Happy. We load the
        broken sheets, scraps, and the rest of the remodel debris, and route it to construction
        and demolition (C&amp;D) recycling facilities, from {formatPrice(PRICING_TIERS[0].priceFrom)}{" "}
        a load. Drywall doesn&apos;t belong in your trash cart, and bags of it left at the curb
        count as illegal dumping.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link> for{" "}
        <Link href="/services/construction-debris-removal">construction debris removal</Link>.
      </p>

      <h2>Can drywall go in the trash in LA?</h2>
      <p>
        Not in real quantities. Residential trash carts are for household garbage, and haulers
        can refuse carts loaded with heavy construction debris. A few scraps from a patch job are
        one thing. A bathroom remodel&apos;s worth of drywall is C&amp;D waste and needs to go to
        a facility that takes it.
      </p>

      <h2>Can drywall be recycled?</h2>
      <p>
        Often, yes. Clean gypsum drywall can be recycled, and C&amp;D facilities sort it from
        wood, metal, and other debris. Painted, wet, or mixed debris is sorted at the facility
        too. Larger LA projects can also fall under local C&amp;D recycling requirements. Read{" "}
        <Link href="/blog/construction-debris-recycling-los-angeles">
          construction debris recycling in LA
        </Link>{" "}
        for the rules.
      </p>

      <h2>How do I prep drywall for pickup?</h2>
      <ol>
        <li>
          <strong>Keep it dry if you can.</strong> Wet drywall is heavier and messier to handle.
        </li>
        <li>
          <strong>Pile it in one spot,</strong> like the driveway, garage, or side yard. No need
          to bag it.
        </li>
        <li>
          <strong>Leave the nails and screws.</strong> There&apos;s no need to pull them first.
        </li>
        <li>
          <strong>Keep hazardous materials separate.</strong> Paint cans, solvents, and anything
          that might contain asbestos can&apos;t go with regular debris. See{" "}
          <Link href="/blog/what-junk-haulers-cant-take">what junk haulers can&apos;t take</Link>.
        </li>
      </ol>

      <h2>How much does drywall disposal cost?</h2>
      <p>
        We price by truck space. A small patch-and-repair pile usually fits a quarter load (from{" "}
        {formatPrice(PRICING_TIERS[0].priceFrom)}). A full room or bathroom gut runs higher.
        Because drywall is heavy, very large loads are quoted on volume and weight. You get a
        firm price before loading. See the <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>What else can go in the same load?</h2>
      <p>
        Old cabinets, vanities, flooring, tile, lumber, and fixtures can all ride in the same
        trip. Clearing the garage while the remodel is happening? Add a{" "}
        <Link href="/services/garage-cleanout">garage clean-out</Link>. Need furniture out of the
        way during the work? <Link href="/services/dump-and-store">Dump + Store</Link> moves it
        into a storage unit. Comparing options? Read{" "}
        <Link href="/blog/junk-removal-vs-dumpster-rental">junk removal vs. dumpster rental</Link>.
      </p>

      <h2>Book a drywall pickup</h2>
      <p>
        We&apos;re open 10am to 8pm, seven days a week. Call or text{" "}
        <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">request a free quote</Link>.
      </p>
    </>
  );
}
