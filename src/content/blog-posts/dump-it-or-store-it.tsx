import Link from "next/link";
import { PRICING_TIERS, STORAGE_UNITS, formatPrice } from "@/lib/data/pricing";
import { SITE } from "@/lib/data/site";

const smallestUnit = STORAGE_UNITS[0];
const nextUnit = STORAGE_UNITS[1];
const yearOfSmallest = smallestUnit.pricePerMonth * 12;
const sizeUpPerYear = (nextUnit.pricePerMonth - smallestUnit.pricePerMonth) * 12;
const quarterLoad = PRICING_TIERS[0].priceFrom;

export default function DumpItOrStoreItBody() {
  return (
    <>
      <p>
        Store it only if you&apos;ll use it again and it would cost more to replace than to keep.
        Dump everything else before you move into storage. At{" "}
        {formatPrice(smallestUnit.pricePerMonth)}/mo for a {smallestUnit.size}, a year of storage
        is {formatPrice(yearOfSmallest)}, while a quarter-load junk pickup starts at{" "}
        {formatPrice(quarterLoad)}. Dump Happy&apos;s{" "}
        <Link href="/services/dump-and-store">Dump + Store</Link> service does both in one job.
      </p>
      <p>
        Call or text <a href={`tel:${SITE.phoneRaw}`}>{SITE.phoneDisplay}</a> or{" "}
        <Link href="/contact">get a free quote</Link>.
      </p>

      <h2>What does it really cost to store junk?</h2>
      <p>
        Storage rent never stops. Here&apos;s what keeping things costs over a year at current
        rates (subject to change):
      </p>
      <table>
        <thead>
          <tr>
            <th>Unit</th>
            <th>Monthly</th>
            <th>12 months</th>
          </tr>
        </thead>
        <tbody>
          {STORAGE_UNITS.map((u) => (
            <tr key={u.size}>
              <td>{u.size}</td>
              <td>{formatPrice(u.pricePerMonth)}</td>
              <td>{formatPrice(u.pricePerMonth * 12)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        If clearing out the junk lets you drop from a {nextUnit.size} to a {smallestUnit.size},
        that alone saves {formatPrice(sizeUpPerYear)} a year. A one-time haul-away pays for
        itself in a couple of months.
      </p>

      <h2>A simple test: keep, store, or dump?</h2>
      <ul>
        <li>
          <strong>Keep at home</strong> anything you use weekly.
        </li>
        <li>
          <strong>Store</strong> things you&apos;ll definitely use again that are expensive or
          impossible to replace: good furniture, heirlooms, seasonal gear, business inventory.
        </li>
        <li>
          <strong>Dump or donate</strong> anything broken, worn out, outdated, or cheaper to
          replace than to store for a year. That includes old mattresses, particleboard
          furniture, dead appliances, and boxes you haven&apos;t opened since your last move.
        </li>
      </ul>

      <h2>Where does the dumped stuff go?</h2>
      <p>
        Not straight to a landfill. We donate usable furniture, send mattresses to California
        mattress recyclers, route e-waste to certified recyclers, and recycle metal. Read{" "}
        <Link href="/blog/what-happens-to-junk-after-pickup">what happens to junk after pickup</Link>{" "}
        and our guide to{" "}
        <Link href="/blog/donate-furniture-los-angeles">donating furniture in LA</Link>.
      </p>

      <h2>How do I do both in one day?</h2>
      <p>
        Book <Link href="/services/dump-and-store">Dump + Store</Link>. We sort with you, haul
        the junk as <Link href="/services/junk-removal">junk removal</Link> (priced by load from{" "}
        {formatPrice(quarterLoad)}), and move the keepers into your unit for one flat moving fee
        with the admin fee and lock included. See{" "}
        <Link href="/blog/what-size-storage-unit-do-i-need">what size storage unit you need</Link>{" "}
        and our full <Link href="/pricing">pricing</Link>.
      </p>
    </>
  );
}
