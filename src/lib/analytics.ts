export const GA_MEASUREMENT_ID = "G-1GMNHJBZNM";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}

type AnalyticsItem = {
  id: string;
  name: string;
  price: string;
  category: string;
};

function parseAnalyticsPrice(price: string) {
  const match = price.replace(/,/g, "").match(/\d+/);
  return match ? Number(match[0]) : 0;
}

function gaEvent(name: string, params: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", name, params);
}

function ecommercePayload(item: AnalyticsItem) {
  const numericPrice = parseAnalyticsPrice(item.price);

  return {
    currency: "PKR",
    value: numericPrice,
    items: [
      {
        item_id: item.id,
        item_name: item.name,
        item_category: item.category,
        price: numericPrice,
        quantity: 1,
      },
    ],
  };
}

export function trackSelectItem(item: AnalyticsItem) {
  gaEvent("select_item", ecommercePayload(item));
}

export function trackViewItem(item: AnalyticsItem) {
  gaEvent("view_item", ecommercePayload(item));
}

export function trackAddToCart(item: AnalyticsItem) {
  gaEvent("add_to_cart", ecommercePayload(item));
}

export function trackItemInquiry(item: AnalyticsItem) {
  gaEvent("generate_lead", {
    method: "whatsapp",
    item_id: item.id,
    item_name: item.name,
    item_category: item.category,
    value: parseAnalyticsPrice(item.price),
    currency: "PKR",
  });
}
