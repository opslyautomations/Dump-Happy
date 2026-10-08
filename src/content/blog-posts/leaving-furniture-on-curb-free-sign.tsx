import Link from "next/link";

const PC_374_3 =
  "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=374.3";

export default function LeavingFurnitureOnCurbFreeSignBody() {
  return (
    <>
      <p>
        Leaving furniture on the curb with a &quot;free&quot; sign in LA can still count as illegal
        dumping under California Penal Code 374.3, with fines starting at $250 per violation. The
        legal, no-hassle alternative is to book Dump Happy: we carry it out, donate what&apos;s
        usable, and dispose of the rest legally, starting at $289.
      </p>
      <p>
        Call (424) 356-4141 or <Link href="/contact">get a free quote</Link>. We&apos;re open 10am
        to 8pm, seven days a week.
      </p>

      <h2>Is leaving furniture on the curb with a free sign legal?</h2>
      <p>
        Usually not. It&apos;s an LA tradition: a dresser on the parkway with a piece of cardboard
        taped to it that says FREE. Sometimes it&apos;s gone in an hour. Sometimes it sits in the
        rain for a week. A lot of people assume the sign makes it a giveaway instead of dumping.
        Legally, it usually doesn&apos;t.
      </p>

      <h2>What does Penal Code 374.3 actually say?</h2>
      <p>
        California&apos;s illegal dumping statute,{" "}
        <a href={PC_374_3} target="_blank" rel="noopener noreferrer">
          Penal Code 374.3
        </a>
        , makes it unlawful to dump waste matter “in or upon a public or private highway or road,
        including any portion of the right-of-way thereof.” The right-of-way isn&apos;t just the
        street. In most of LA it includes the sidewalk and the parkway strip between the sidewalk
        and the curb, which is exactly where curbside furniture ends up.
      </p>
      <p>
        The statute doesn&apos;t have an exception for good intentions or a handwritten sign. The
        question is whether what you left is, in practice, waste, and furniture that nobody takes
        becomes exactly that the moment you walk away from it.
      </p>

      <h2>What are the fines for leaving furniture on the curb?</h2>
      <p>For household items, the penalties are set right in the statute:</p>
      <ul>
        <li>
          <strong>First conviction:</strong> a mandatory fine of $250 to $1,000
        </li>
        <li>
          <strong>Second conviction:</strong> $500 to $1,500
        </li>
        <li>
          <strong>Third or later:</strong> $750 to $3,000
        </li>
      </ul>
      <p>
        Two details make this more expensive than it sounds. First,{" "}
        <strong>each day the item remains is a separate violation</strong>, so a couch that sits
        out for a week isn&apos;t one problem. Second, courts can order you to pay for the cleanup
        and to spend at least 12 hours picking up litter. For larger amounts, such as anything a
        business generates or one cubic yard or more, the violation becomes a misdemeanor with
        fines up to $10,000 and possible jail time. We cover the bigger picture in{" "}
        <Link href="/blog/illegal-dumping-los-angeles">our illegal dumping overview</Link>.
      </p>

      <h2>Is your own property a different situation?</h2>
      <p>
        Yes. The statute specifically says it doesn&apos;t restrict a private owner&apos;s use of
        their own property, unless the pile creates a health, safety, or fire hazard or a public
        nuisance. So there&apos;s a real difference between:
      </p>
      <ul>
        <li>
          A bookshelf in <strong>your driveway or front yard</strong> for a few hours, which you
          bring back inside if nobody takes it, and
        </li>
        <li>
          The same bookshelf on the <strong>sidewalk or parkway</strong>, left overnight with no
          plan for what happens if it doesn&apos;t get claimed.
        </li>
      </ul>
      <p>
        Renters should be careful here too. The front yard of an apartment building belongs to the
        owner, not the tenant, so it isn&apos;t yours to use as a staging spot.
      </p>

      <h2>What&apos;s the legal way to get rid of furniture you don&apos;t want?</h2>
      <p>
        Book a pickup with Dump Happy. It takes the guesswork, and the legal risk, out of it:
      </p>
      <ul>
        <li>
          <strong>Nothing goes on the curb.</strong> Our crew carries furniture out of any room,
          including upstairs.
        </li>
        <li>
          <strong>Usable pieces still get a second home.</strong> We route furniture in good
          condition to donation. See{" "}
          <Link href="/blog/donate-furniture-los-angeles">how our furniture donation pickup works</Link>
          .
        </li>
        <li>
          <strong>Everything else is handled legally.</strong> Recyclable materials get recycled,
          and the rest goes to proper disposal.
        </li>
        <li>
          <strong>Clear pricing.</strong> Load-based pricing starts at $289 for a small load, with
          labor, hauling, and disposal included. See <Link href="/pricing">pricing</Link>.
        </li>
      </ul>
      <p>
        Learn more about our{" "}
        <Link href="/services/furniture-removal">furniture removal service</Link>, or read{" "}
        <Link href="/blog/furniture-disposal-los-angeles">furniture disposal in Los Angeles</Link>.
      </p>

      <h2>A good rule of thumb</h2>
      <p>
        If you&apos;d be comfortable with the item sitting there for a week, and you have a plan
        for it if nobody takes it, you&apos;re probably giving something away. If the plan is
        “someone will take it eventually,” you&apos;re probably dumping. When you&apos;re on a
        move-out deadline, call (424) 356-4141 or <Link href="/contact">get a free quote</Link>{" "}
        and we&apos;ll clear it the same way we clear everything: legally.
      </p>
      <p className="text-sm">
        This article is general information about California law, not legal advice.
      </p>
    </>
  );
}
