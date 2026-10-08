import Link from "next/link";
import { PRICING_TIERS } from "@/lib/data/pricing";

const smallLoad = PRICING_TIERS[0];

export default function CouchRemovalLosAngelesBody() {
  return (
    <>
      <p>
        The easiest way to get rid of a couch in Los Angeles is to book Dump Happy: we carry it out
        of any room and haul it away, from ${smallLoad.priceFrom}. Loveseat, sectional, or steel-frame
        sleeper sofa, our crew handles the lifting, the stairs, and the disposal.
      </p>
      <p>
        Call (424) 356-4141 or <Link href="/contact">get a free quote</Link>. We&apos;re open 10am
        to 8pm, seven days a week.
      </p>

      <h2>How does couch removal work?</h2>
      <ol>
        <li>
          <strong>Get a quote.</strong> Tell us the couch type and where it is: upstairs, in a
          back bedroom, or in the garage.
        </li>
        <li>
          <strong>We show up and carry it out.</strong> No need to get it to the curb or take it
          apart.
        </li>
        <li>
          <strong>We handle where it goes.</strong> Usable couches get routed to donation, and the
          rest is recycled or disposed of legally.
        </li>
      </ol>
      <p>
        See our <Link href="/services/furniture-removal">furniture removal service</Link> for
        more.
      </p>

      <h2>How much does couch removal cost in Los Angeles?</h2>
      <p>
        Pricing is by load size, and a single couch typically fits in our{" "}
        {smallLoad.name.toLowerCase()} tier, starting at ${smallLoad.priceFrom}. Adding a coffee
        table, an armchair, or a few boxes to the same trip is usually cheaper than booking them
        separately. Labor, hauling, and disposal are included. See{" "}
        <Link href="/pricing">pricing</Link> for every tier.
      </p>

      <h2>Can you take a sectional or sleeper sofa?</h2>
      <p>
        Yes. Sectionals, sleeper sofas, recliners, and oversized couches are exactly what a crew is
        for. Sleeper mechanisms are heavy and can spring open on a staircase, and big sectionals
        need careful angling through doorways. Our crew takes care of all of it, including
        protecting door frames on the way out.
      </p>

      <h2>What if the couch is upstairs or in a tight spot?</h2>
      <p>
        Stairs, elevators, narrow hallways, and tight turns are normal for us. Just mention them
        when you book so we can plan the carry. You don&apos;t have to measure doorways, remove
        legs, or recruit friends.
      </p>

      <h2>Can I leave my old couch on the curb?</h2>
      <p>
        No. A couch on the sidewalk or parkway can count as illegal dumping under California Penal
        Code 374.3, even with a &quot;free&quot; sign on it.{" "}
        <Link href="/blog/leaving-furniture-on-curb-free-sign">
          Here&apos;s why a “free” sign doesn&apos;t make curbside furniture legal
        </Link>
        . A booked pickup avoids the problem entirely.
      </p>

      <h2>Will my couch be donated?</h2>
      <p>
        If it&apos;s clean and intact, it may be. We route usable couches to donation. Upholstery
        with stains, tears, pet damage, or odors usually isn&apos;t donatable, so those go to
        recycling or legal disposal instead. Read more in{" "}
        <Link href="/blog/donate-furniture-los-angeles">our furniture donation pickup guide</Link>.
      </p>

      <h3>What about a couch with bed bugs?</h3>
      <p>
        Wrap it fully in plastic, label it, and tell us when you book. The steps are the same as in
        our <Link href="/blog/bed-bug-mattress-disposal">bed bug mattress disposal guide</Link>.
      </p>

      <h2>What else can go in the same pickup?</h2>
      <ul>
        <li>Coffee tables, end tables, and TV stands</li>
        <li>Armchairs, ottomans, and recliners</li>
        <li>Rugs, lamps, and boxes</li>
        <li>Old TVs, which we send to certified e-waste recyclers</li>
      </ul>
      <p>
        Clearing more than the living room? See{" "}
        <Link href="/blog/furniture-disposal-los-angeles">furniture disposal in Los Angeles</Link>.
      </p>

      <h2>Book couch removal in LA</h2>
      <p>
        Call (424) 356-4141 or <Link href="/contact">get a free quote</Link>. We serve the
        Westside, South Bay, and Central LA, with same-day or next-day pickup when the schedule
        allows.
      </p>
    </>
  );
}
