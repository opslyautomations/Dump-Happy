// Active promotion shown in the site-wide popup. Supplied by Jason — do not
// invent or adjust offers here. Set `active: false` to pull the popup site-wide.
const PRICE = 289;
const PERCENT_OFF = 10;

const discounted = PRICE * (1 - PERCENT_OFF / 100);

export const PROMO = {
  active: true,
  eyebrow: "Limited-time offer",
  title: "Mattress Removal Special",
  percentOff: PERCENT_OFF,
  // Phone-only offer — the discount is applied when the customer calls and
  // mentions the code, not through the quote form.
  code: "MATTRESS10",
  regularPrice: `$${PRICE}`,
  salePrice: `$${discounted.toFixed(2)}`,
  servicePath: "/services/mattress-removal",
  finePrint: "Phone orders only. Mention the promo code when you call.",
} as const;
