import Link from "next/link";
import { PRICING_TIERS } from "@/lib/data/pricing";

const smallLoad = PRICING_TIERS[0];

export default function CouchRemovalLosAngelesBody() {
  return (
    <>
      <p>
        A couch is usually the heaviest, most awkward thing in the living room, and the last thing
        anyone wants to deal with on moving day. Whether it&apos;s a loveseat, a sectional, or a
        sleeper sofa with a steel frame, here are your realistic options for getting it out of your
        home in Los Angeles, and what each one takes.
      </p>

      <h2>Option 1: Sell it or give it away (if it&apos;s in good shape)</h2>
      <p>
        A clean, undamaged couch from a known brand can sell quickly online, and even a
        free listing will often get it picked up within a day or two. Include measurements and
        clear photos, and keep the couch inside or on your own property until someone shows up.
        Don&apos;t put it on the sidewalk with a sign.{" "}
        <Link href="/blog/leaving-furniture-on-curb-free-sign">
          Here&apos;s why a “free” sign doesn&apos;t make curbside furniture legal
        </Link>
        .
      </p>

      <h2>Option 2: Donate it</h2>
      <p>
        Charities and resale stores will take couches in good condition, but upholstered furniture
        gets inspected closely. Stains, tears, pet hair, odors, broken frames, and sagging cushions
        are common reasons for a “no.” Send photos before you haul it over. Our guide to{" "}
        <Link href="/blog/donate-furniture-los-angeles">donating furniture in LA</Link> covers what
        usually gets turned away.
      </p>

      <h2>Option 3: Schedule a city bulky item pickup</h2>
      <p>
        If your home gets trash service from LA Sanitation, you can schedule a free bulky item
        pickup through MyLA311 or 311 at least one business day before your regular trash day. The
        catch: you have to get the couch to the curb yourself, and only set it out for a scheduled
        pickup. In the City of LA, apartment buildings with five or more units still get LA Sanitation bulky pickup (it&apos;s funded through a fee on the LADWP bill), though your property manager may handle the booking or tell you where to set items out.
      </p>

      <h2>Option 4: Have it hauled away</h2>
      <p>
        A junk removal crew makes sense when there are stairs, a tight turn, an elevator, a heavy
        sleeper sofa, or a deadline, or when the couch is just one of several things leaving. With
        Dump Happy, pricing is by load size, and a single couch typically fits in our{" "}
        {smallLoad.name.toLowerCase()} tier starting at ${smallLoad.priceFrom}. Adding a coffee
        table, an armchair, or a few boxes to the same trip is usually cheaper than booking them
        separately. See <Link href="/pricing">pricing</Link> or our{" "}
        <Link href="/services/furniture-removal">furniture removal service</Link>. Usable couches
        get routed to donation, and the rest is recycled or disposed of legally.
      </p>

      <h2>Getting a couch out without damage</h2>
      <p>If you&apos;re moving it yourself, a little prep saves your walls and your back:</p>
      <ul>
        <li>
          <strong>Measure first.</strong> Check the couch&apos;s height, depth, and diagonal against
          every doorway and stairwell turn on the way out.
        </li>
        <li>
          <strong>Take it apart.</strong> Remove cushions and legs. Many sectionals unclip into
          sections, and some recliners have removable backs.
        </li>
        <li>
          <strong>Secure the sleeper.</strong> Tie the fold-out mechanism closed so it doesn&apos;t
          spring open mid-staircase.
        </li>
        <li>
          <strong>Stand it on end</strong> to get through tight doorways, and protect door frames
          with a blanket.
        </li>
        <li>
          <strong>Use two people minimum</strong>, and more for sleeper sofas and large sectionals.
        </li>
      </ul>

      <h3>What about a couch with bed bugs?</h3>
      <p>
        Don&apos;t sell, donate, or curb it. Wrap it fully in plastic, label it, and follow the same
        steps as in our{" "}
        <Link href="/blog/bed-bug-mattress-disposal">bed bug mattress disposal guide</Link>. Tell
        whoever picks it up in advance.
      </p>

      <h2>Which option is right?</h2>
      <p>
        Good condition and no deadline: sell or donate it. Worn out, a city-serviced home, and you
        can carry it: schedule a bulky item pickup. Stairs, heavy pieces, a move-out date, or more
        than one item going: <Link href="/contact">get a quote</Link> and we&apos;ll have it out in
        one visit.
      </p>
    </>
  );
}
