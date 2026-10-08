import Link from "next/link";

const CIV = (section: string) =>
  `https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CIV&sectionNum=${section}`;

export default function TenantLeftBelongingsCaliforniaBody() {
  return (
    <>
      <p>
        If a tenant left belongings behind in California, give the required written notice, wait
        out the 15- or 18-day claim period, and then book Dump Happy to clear the unit in one
        visit. We sort, donate what&apos;s usable, and haul the rest, from $289.
      </p>
      <p>
        Call (424) 356-4141 or <Link href="/contact">get a free quote</Link> for{" "}
        <Link href="/services/junk-removal">junk removal</Link>, and see load tiers on our{" "}
        <Link href="/pricing">pricing page</Link>. Skipping the legal process can expose a
        landlord to liability, so here&apos;s how tenant abandoned property rules work in
        California under Civil Code sections 1980 through 1991.
      </p>

      <h2>When do California&apos;s tenant abandoned property rules apply?</h2>
      <p>
        The process applies when personal property remains on the premises after a tenancy has
        ended and the tenant has moved out. That includes a tenant who moved out voluntarily and one
        who left after an eviction. If you aren&apos;t sure whether the tenancy has legally ended,
        for example if rent is simply late and the unit looks empty, sort that out first. Treating
        a unit as abandoned too early is a separate legal problem.
      </p>

      <h2>Step 1: What notice do you have to send?</h2>
      <p>
        Under{" "}
        <a href={CIV("1983")} target="_blank" rel="noopener noreferrer">
          Civil Code 1983
        </a>
        , the landlord must give written notice to the former tenant and to anyone else the
        landlord reasonably believes owns the property. The notice has to:
      </p>
      <ul>
        <li>Describe the property well enough for the owner to identify it</li>
        <li>Say where it can be claimed</li>
        <li>Say that reasonable storage costs may be charged before it&apos;s returned</li>
        <li>
          Give a deadline to claim it that&apos;s at least <strong>15 days</strong> after the notice
          is personally delivered, or at least <strong>18 days</strong> after it&apos;s mailed
        </li>
      </ul>
      <p>
        If mailed, it goes first-class to the tenant&apos;s last known address, with a copy sent to
        the vacated unit itself, and by email too if the tenant gave you an email address.{" "}
        <a href={CIV("1984")} target="_blank" rel="noopener noreferrer">
          Civil Code 1984
        </a>{" "}
        includes a model “Notice of Right to Reclaim Abandoned Property” form. Using it is the
        simplest way to make sure the required language is there.
      </p>

      <h2>Step 2: What do you do with the property during the notice period?</h2>
      <p>
        During the notice period, the belongings need to be stored with reasonable care, either
        in the unit or somewhere safe. If the former tenant (or another owner) claims the property
        before the deadline, you release it once they pay reasonable storage costs.
      </p>

      <h2>Step 3: What happens after the deadline?</h2>
      <p>
        Under{" "}
        <a href={CIV("1988")} target="_blank" rel="noopener noreferrer">
          Civil Code 1988
        </a>
        , if nobody claims the property in time:
      </p>
      <ul>
        <li>
          <strong>If you reasonably believe the total resale value is under $700</strong>, you may
          keep it or dispose of it in any manner.
        </li>
        <li>
          <strong>If it&apos;s worth $700 or more</strong>, it has to be sold at a public sale by
          competitive bidding, after published notice in a local newspaper. Once storage,
          advertising, and sale costs are deducted, any remaining proceeds go to the county, and
          the former owner can claim them within a year.
        </li>
      </ul>
      <p>
        Worn furniture, clothes, and household goods usually fall well under $700 in resale value,
        but judge honestly. Electronics, tools, jewelry, or a vehicle can change the picture quickly.
      </p>

      <h2>Step 4: How do you clear the unit?</h2>
      <p>
        Once you&apos;re legally clear to dispose of the property, the fastest way to turn the unit
        is a single Dump Happy clean-out: furniture, bagged clothing, kitchen items, and whatever&apos;s in
        the garage, all in one visit. What we clear gets sorted for donation, recycling, and legal
        disposal. Our{" "}
        <Link href="/services/junk-removal">junk removal</Link> and{" "}
        <Link href="/services/estate-cleanout">property clean-out</Link> services handle exactly
        this for property managers across Los Angeles, and pricing is by load, so you know the cost
        before we start. See <Link href="/pricing">our pricing</Link>.
      </p>
      <p>
        What you should never do is move a former tenant&apos;s things to the curb or the alley.
        Besides the liability issue, it&apos;s illegal dumping under California Penal Code 374.3,
        and each day it sits there is a separate violation. See{" "}
        <Link href="/blog/someone-dumped-junk-on-my-property">
          what to do when junk ends up on your property
        </Link>{" "}
        for more.
      </p>

      <h2>What practical tips help landlords?</h2>
      <ul>
        <li>Photograph and inventory everything before you send the notice.</li>
        <li>Keep a copy of the notice and proof of mailing or delivery.</li>
        <li>Box and label items so a claim can be handled quickly.</li>
        <li>Put the move-out and abandoned property process in your lease and move-out letters.</li>
      </ul>
      <p>
        When the notice period is up, call Dump Happy at (424) 356-4141, 10am to 8pm, seven days a
        week, or <Link href="/contact">get a free quote</Link>. We serve property managers and
        landlords across the Westside, South Bay, and Central LA.
      </p>
      <p className="text-sm">
        This article is general information about California law, not legal advice. For your
        specific situation, consult a landlord-tenant attorney or the{" "}
        <a href="https://www.courts.ca.gov/1260.htm" target="_blank" rel="noopener noreferrer">
          California Courts self-help center
        </a>
        .
      </p>
    </>
  );
}
