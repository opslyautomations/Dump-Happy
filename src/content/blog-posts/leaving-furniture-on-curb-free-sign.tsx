import Link from "next/link";

const PC_374_3 =
  "https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=PEN&sectionNum=374.3";

export default function LeavingFurnitureOnCurbFreeSignBody() {
  return (
    <>
      <p>
        It&apos;s an LA tradition: a dresser on the parkway with a piece of cardboard taped to it
        that says FREE. Sometimes it&apos;s gone in an hour. Sometimes it sits in the rain for a
        week. Either way, a lot of people assume the sign makes it a giveaway instead of dumping.
        Legally, it usually doesn&apos;t.
      </p>

      <h2>What the law actually says</h2>
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

      <h2>What it can cost</h2>
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
        and to spend at least 12 hours picking up litter. For larger amounts — anything a business
        generates, or one cubic yard or more — the violation becomes a misdemeanor with fines up to
        $10,000 and possible jail time. We cover the bigger picture in{" "}
        <Link href="/blog/illegal-dumping-los-angeles">our illegal dumping overview</Link>.
      </p>

      <h2>Your own property is a different situation</h2>
      <p>
        The statute specifically says it doesn&apos;t restrict a private owner&apos;s use of their
        own property, unless the pile creates a health, safety, or fire hazard or a public
        nuisance. So there&apos;s a real difference between:
      </p>
      <ul>
        <li>
          A bookshelf in <strong>your driveway or front yard</strong> for a few hours with a sign,
          which you bring back inside if nobody takes it, and
        </li>
        <li>
          The same bookshelf on the <strong>sidewalk or parkway</strong>, left overnight with no
          plan for what happens if it doesn&apos;t get claimed.
        </li>
      </ul>
      <p>
        Renters should be careful here too. The front yard of an apartment building belongs to the
        owner, not the tenant, so check with your landlord before using it as a giveaway spot.
      </p>

      <h2>The legal ways to give furniture away</h2>
      <ul>
        <li>
          <strong>List it online and keep it inside</strong> (or on your own property) until
          someone picks it up. Photos and dimensions get it claimed faster than a curb sign.
        </li>
        <li>
          <strong>Donate it.</strong> Clean, undamaged pieces are welcome at many charities. See{" "}
          <Link href="/blog/donate-furniture-los-angeles">
            where to donate furniture in LA and what gets turned away
          </Link>
          .
        </li>
        <li>
          <strong>Schedule a bulky item pickup.</strong> If LA Sanitation services your home,
          booking through MyLA311 or 311 makes setting items at the curb legitimate, because
          there&apos;s a pickup scheduled for them.
        </li>
        <li>
          <strong>Book a haul-away.</strong> Our{" "}
          <Link href="/services/furniture-removal">furniture removal service</Link> takes whatever
          didn&apos;t find a home, donates what&apos;s usable, and disposes of the rest legally.
        </li>
      </ul>

      <h2>A good rule of thumb</h2>
      <p>
        If you&apos;d be comfortable with the item sitting there for a week, and you have a plan
        for it if nobody takes it, you&apos;re probably giving something away. If the plan is
        “someone will take it eventually,” you&apos;re probably dumping. When you&apos;re on a
        move-out deadline and there&apos;s no time to wait, <Link href="/contact">get a quote</Link>{" "}
        and we&apos;ll clear it the same way we clear everything: legally.
      </p>
      <p className="text-sm">
        This article is general information about California law, not legal advice.
      </p>
    </>
  );
}
