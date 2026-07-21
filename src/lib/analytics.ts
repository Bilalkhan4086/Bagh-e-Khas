export const GA_MEASUREMENT_ID = "G-1GMNHJBZYT";
export const META_PIXEL_ID = "1026026083468125";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: "event" | "config" | "js",
      targetId: string | Date,
      config?: Record<string, unknown>,
    ) => void;
    fbq?: (
      command: "track" | "trackCustom",
      eventName: string,
      params?: Record<string, unknown>,
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

function metaEvent(
  command: "track" | "trackCustom",
  name: string,
  params: Record<string, unknown>,
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;
  window.fbq(command, name, params);
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

function metaEcommercePayload(item: AnalyticsItem) {
  const numericPrice = parseAnalyticsPrice(item.price);

  return {
    content_ids: [item.id],
    content_name: item.name,
    content_category: item.category,
    content_type: "product",
    value: numericPrice,
    currency: "PKR",
  };
}

export function trackSelectItem(item: AnalyticsItem) {
  gaEvent("select_item", ecommercePayload(item));
  metaEvent("trackCustom", "SelectItem", metaEcommercePayload(item));
}

export function trackViewItem(item: AnalyticsItem) {
  gaEvent("view_item", ecommercePayload(item));
  metaEvent("track", "ViewContent", metaEcommercePayload(item));
}

export function trackAddToCart(item: AnalyticsItem) {
  gaEvent("add_to_cart", ecommercePayload(item));
  metaEvent("track", "AddToCart", metaEcommercePayload(item));
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
  metaEvent("track", "Lead", {
    ...metaEcommercePayload(item),
    method: "whatsapp",
  });
}
