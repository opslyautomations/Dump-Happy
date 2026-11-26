import Link from "next/link";
import { MATTRESS_PICKUP_PRICE, PRICING_TIERS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

export default function MoveOutJunkRemovalLosAngelesBody() {
  return (
    <>
      <p>
        For move-out junk removal in Los Angeles, book Dump Happy a few days before your
        move-out date. Our crew carries out everything you&apos;re leaving behind, from furniture
        and mattresses to boxes and appliances, and hauls it away in one visit, from{" "}
        {formatPrice(PRICING_TIERS[0].priceFrom)}. Moving some of it into storage instead? Our{" "}
        <Link href="/services/dump-and-store">Dump + Store</Link> service does both.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>.
      </p>

      <h2>When should I book move-out junk removal?</h2>
      <p>
        Book two to five days before you hand back the keys. That leaves time to do a final walk
        and clean after the junk is gone. Same-day and next-day pickups are often available when
        the schedule allows, so a last-minute booking is still worth a call. End-of-month
        weekends fill up first in LA.
      </p>

      <h2>Move-out junk removal checklist</h2>
      <ol>
        <li>
          <strong>Walk every room, closet, balcony, and parking spot.</strong> Storage cages and
          garage spots are where forgotten stuff hides.
        </li>
        <li>
          <strong>Split it three ways:</strong> moving with you, going to storage, and leaving.
        </li>
        <li>
          <strong>Set aside hazardous items</strong> like paint, chemicals, and batteries. Those
          go to a household hazardous waste drop-off. See{" "}
          <Link href="/blog/what-junk-haulers-cant-take">what junk haulers can&apos;t take</Link>.
        </li>
        <li>
          <strong>Send photos for a firm quote,</strong> and tell us about elevators, stairs,
          and parking.
        </li>
        <li>
          <strong>Let us carry it out.</strong> Nothing goes on the curb, which avoids illegal
          dumping fines. See{" "}
          <Link href="/blog/leaving-furniture-on-curb-free-sign">
            why leaving furniture on the curb is illegal
          </Link>
          .
        </li>
      </ol>

      <h2>What does move-out junk removal cost?</h2>
      <p>
        You pay for how much of the truck your items fill, not by the hour:
      </p>
      <ul>
        {PRICING_TIERS.map((t) => (
          <li key={t.key}>
            <strong>{t.name}</strong> ({t.subtitle}): from {formatPrice(t.priceFrom)}
          </li>
        ))}
        <li>
          <strong>Mattress pickup:</strong> from {formatPrice(MATTRESS_PICKUP_PRICE)}
        </li>
      </ul>
      <p>
        A studio clear-out with a couch, a bed, and some boxes is often a quarter or half load.
        Full apartments run higher. See the <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>Can you work around my building&apos;s rules?</h2>
      <p>
        Yes. Tell us about elevator reservations, loading zones, and move-out hours when you
        book. Apartment buildings in{" "}
        <Link href="/locations/koreatown">Koreatown</Link>,{" "}
        <Link href="/locations/west-hollywood">West Hollywood</Link>, and{" "}
        <Link href="/locations/santa-monica">Santa Monica</Link> are a big part of our work. Read
        our{" "}
        <Link href="/blog/junk-removal-santa-monica-apartment-moveout">
          Santa Monica apartment move-out guide
        </Link>{" "}
        and our guide to{" "}
        <Link href="/blog/apartment-junk-removal-koreatown-weho">
          apartment junk removal in Koreatown and WeHo
        </Link>
        .
      </p>

      <h2>What if the old furniture is still good?</h2>
      <p>
        We route usable pieces to donation. You don&apos;t have to find a charity or schedule a
        separate pickup. See{" "}
        <Link href="/services/furniture-removal">furniture removal</Link> and{" "}
        <Link href="/blog/donate-furniture-los-angeles">donating furniture in LA</Link>.
      </p>

      <h2>Book your move-out pickup</h2>
      <p>
        We&apos;re open 10am to 8pm, seven days a week. Call or text{" "}
        <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">request a free quote</Link>. If you&apos;re moving into storage, read{" "}
        <Link href="/blog/moving-into-storage-unit-los-angeles">
          how to move into a storage unit in LA
        </Link>
        .
      </p>
    </>
  );
}
