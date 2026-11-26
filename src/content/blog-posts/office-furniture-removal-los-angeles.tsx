import Link from "next/link";
import { MULTI_LOAD_NOTE, PRICING_TIERS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

export default function OfficeFurnitureRemovalLosAngelesBody() {
  return (
    <>
      <p>
        For office furniture removal in Los Angeles, book Dump Happy. We clear desks, chairs,
        cubicle panels, filing cabinets, conference tables, and old electronics. Usable pieces go
        to donation, metal goes to recycling, and computers go to certified e-waste recyclers,
        from {formatPrice(PRICING_TIERS[0].priceFrom)} a load. We work around building hours and
        loading docks.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link> for{" "}
        <Link href="/services/commercial-junk-removal">commercial junk removal</Link>.
      </p>

      <h2>What office furniture can you remove?</h2>
      <ul>
        <li>Desks, workstations, and cubicle systems (we break them down)</li>
        <li>Office chairs, couches, and break-room furniture</li>
        <li>Filing cabinets and metal shelving</li>
        <li>Conference tables and reception furniture</li>
        <li>Computers, monitors, printers, and other e-waste</li>
        <li>Break-room fridges and appliances</li>
      </ul>

      <h2>How does an office clear-out work?</h2>
      <ol>
        <li>
          <strong>Walkthrough or photos.</strong> We see the space and agree on what goes.
        </li>
        <li>
          <strong>Firm quote by volume.</strong> {MULTI_LOAD_NOTE}
        </li>
        <li>
          <strong>Scheduled around your building.</strong> Tell us about freight elevators,
          loading docks, certificates of insurance, and after-hours rules.
        </li>
        <li>
          <strong>We break down, load, and sweep.</strong> The space is left broom-clean.
        </li>
      </ol>

      <h2>What happens to old office computers?</h2>
      <p>
        Computers and monitors are covered e-waste in California and can&apos;t go in a dumpster.
        We route them to certified e-waste recyclers. Wipe or remove hard drives before pickup.
        Read{" "}
        <Link href="/blog/office-cleanout-ewaste-california">office clean-outs and e-waste rules</Link>
        .
      </p>

      <h2>How much does office furniture removal cost?</h2>
      <p>
        It&apos;s priced by truck space: from {formatPrice(PRICING_TIERS[0].priceFrom)} for a
        quarter load to {formatPrice(PRICING_TIERS[PRICING_TIERS.length - 1].priceFrom)} for a
        full load, with loading, haul-away, disposal, and cleanup included. A few desks and
        chairs is a small job. A whole floor of cubicles runs several loads, and prices drop
        after the first one. See the <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>Can you store some of it instead?</h2>
      <p>
        Yes. Moving offices or downsizing for a while? With{" "}
        <Link href="/services/dump-and-store">Dump + Store</Link> we haul what&apos;s going and
        move the furniture you&apos;re keeping into a storage unit for one flat moving fee.
        Clearing furniture from a home office instead? See{" "}
        <Link href="/services/furniture-removal">furniture removal</Link>.
      </p>

      <h2>Book your office clear-out</h2>
      <p>
        We serve offices across LA&apos;s Westside, South Bay, and Central LA, including{" "}
        <Link href="/locations/culver-city">Culver City</Link> and{" "}
        <Link href="/locations/santa-monica">Santa Monica</Link>. Call or text{" "}
        <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">request a free quote</Link>.
      </p>
    </>
  );
}
