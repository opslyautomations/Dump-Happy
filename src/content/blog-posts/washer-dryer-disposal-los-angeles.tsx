import Link from "next/link";
import { PRICING_TIERS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

export default function WasherDryerDisposalLosAngelesBody() {
  return (
    <>
      <p>
        The easiest way to get rid of an old washer and dryer in Los Angeles is to book Dump
        Happy. We disconnect what&apos;s safe to disconnect, carry both machines out of the
        laundry room, garage, or upstairs closet, and send them to metal and appliance
        recyclers, from {formatPrice(PRICING_TIERS[0].priceFrom)}. Working or dead, it
        doesn&apos;t matter.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link> for{" "}
        <Link href="/services/appliance-removal">appliance removal</Link>.
      </p>

      <h2>Can I put a washer or dryer on the curb in LA?</h2>
      <p>
        Not without a scheduled bulky item pickup. An appliance left on the curb without one is
        illegal dumping under California Penal Code 374.3. Even with a city appointment, you have
        to get a 150-plus-pound machine to the curb yourself and wait for collection day. Read{" "}
        <Link href="/blog/bulky-item-pickup-los-angeles">bulky item pickup in LA</Link> for how
        the options compare.
      </p>

      <h2>Why do washers and dryers need special handling?</h2>
      <p>
        California treats washers, dryers, and other major appliances as items that have to be
        processed by appliance recyclers. Certain components have to be removed before the metal
        is crushed and recycled. That&apos;s why many landfills and transfer stations won&apos;t
        take them in a regular load. We route them to the right facility, so you don&apos;t have
        to figure out which one.
      </p>

      <h2>How do I prepare the machines for pickup?</h2>
      <ol>
        <li>
          <strong>Run the washer drain cycle</strong> and leave the door open a day so it&apos;s
          not full of water.
        </li>
        <li>
          <strong>Shut off the water valves</strong> behind the washer.
        </li>
        <li>
          <strong>Tell us if the dryer is gas.</strong> Gas lines should be shut off and capped by
          a qualified person before pickup. We&apos;ll unplug electric units.
        </li>
        <li>
          <strong>Clear a path</strong> from the laundry area to the door.
        </li>
      </ol>

      <h2>How much does washer and dryer removal cost?</h2>
      <p>
        We price by load size, not per appliance. A washer and dryer pair usually fits in a
        quarter load, from {formatPrice(PRICING_TIERS[0].priceFrom)}, with room to add other
        items in the same trip. Clearing a garage or a whole kitchen of appliances moves up the
        tiers. See the <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>What about the old fridge?</h2>
      <p>
        Add it to the same pickup. Fridges and freezers need certified refrigerant recovery,
        which we handle. Read{" "}
        <Link href="/blog/who-hauls-away-old-refrigerators">who hauls away old refrigerators</Link>{" "}
        and the{" "}
        <Link href="/blog/refrigerator-disposal-california">California fridge disposal rules</Link>
        . Clearing the whole garage at once? See{" "}
        <Link href="/services/garage-cleanout">garage clean-outs</Link>.
      </p>

      <h2>Book a washer and dryer pickup</h2>
      <p>
        We&apos;re open 10am to 8pm, seven days a week, across the Westside, South Bay, and
        Central LA. Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">request a free quote</Link>.
      </p>
    </>
  );
}
