import "server-only";

import { collections, products, shopProducts } from "@/lib/data";

interface OrderCatalogItem {
  id: string;
  name: string;
  unitPrice: number;
  available: boolean;
}

function parsePrice(price: string): number {
  const match = price.replace(/,/g, "").match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : 0;
}

const catalog = new Map<string, OrderCatalogItem>(
  [
    ...collections.map((item) => ({ ...item, available: true })),
    ...products.map((item) => ({
      ...item,
      available: !item.isComingSoon && !item.isOutOfStock,
    })),
    ...shopProducts.map((item) => ({
      ...item,
      available: !item.isComingSoon && !item.isOutOfStock,
    })),
  ].map((item) => [
    item.id,
    {
      id: item.id,
      name: item.name,
      unitPrice: parsePrice(item.price),
      available: item.available,
    },
  ])
);

export function getOrderCatalogItem(id: string): OrderCatalogItem | undefined {
  return catalog.get(id);
}
