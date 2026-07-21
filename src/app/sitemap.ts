import type { MetadataRoute } from "next";
import { collections, products } from "@/lib/data";
import { absoluteImage, collectionUrl, productUrl, SITE_URL } from "@/lib/seo";

const lastModified = new Date("2026-07-21");

function sitemapImage(src: string) {
  const image = absoluteImage(src);

  try {
    const url = new URL(image);
    url.search = "";
    url.hash = "";
    return url.toString();
  } catch {
    return image.replace(/&/g, "%26");
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
      images: [sitemapImage("/bagh-e-khas-logo.png")],
    },
    ...products.map((product) => ({
      url: productUrl(product),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: product.isBestSeller ? 0.9 : 0.75,
      images: [sitemapImage(product.image)],
    })),
    ...collections.map((collection) => ({
      url: collectionUrl(collection),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: collection.slug === "premium-gift-basket" ? 0.9 : 0.8,
      images: [sitemapImage(collection.image)],
    })),
  ];
}
