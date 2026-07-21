import type { Collection, Product } from "@/types";

export const SITE_URL = "https://www.baghekhas.com";
export const BRAND_NAME = "Bagh-e-Khas";
export const BRAND_LEGAL_NAME = "Bagh e Khas";
export const DEFAULT_OG_IMAGE = "/bagh-e-khas-logo.png";
export const INSTAGRAM_URL = "https://instagram.com/bagh_e_khas";
export const WHATSAPP_URL = "https://wa.me/923277814489";
export const EMAIL = "baghekhas1@gmail.com";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function absoluteImage(src: string) {
  return absoluteUrl(src);
}

export function productUrl(product: Product) {
  return absoluteUrl(`/products/${product.id}`);
}

export function collectionUrl(collection: Collection) {
  return absoluteUrl(`/collections/${collection.slug}`);
}

export function priceNumber(price: string) {
  const match = price.replace(/,/g, "").match(/\d+/);
  return match ? Number(match[0]) : undefined;
}

export function availability(item: {
  isComingSoon?: boolean;
  isOutOfStock?: boolean;
}) {
  if (item.isOutOfStock) return "https://schema.org/OutOfStock";
  if (item.isComingSoon) return "https://schema.org/PreOrder";
  return "https://schema.org/InStock";
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "Store"],
      "@id": `${SITE_URL}/#organization`,
      name: BRAND_NAME,
      legalName: BRAND_LEGAL_NAME,
      url: SITE_URL,
      logo: absoluteImage(DEFAULT_OG_IMAGE),
      image: absoluteImage(DEFAULT_OG_IMAGE),
      description:
        "Premium fruit brand in Lahore delivering hand-selected seasonal fruits, gift baskets, family fruit boxes, and corporate hampers.",
      email: EMAIL,
      telephone: "+92 327 781 4489",
      priceRange: "PKR 1,200 - PKR 25,000",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Lahore",
        },
        {
          "@type": "Country",
          name: "Pakistan",
        },
      ],
      sameAs: [INSTAGRAM_URL, "https://www.facebook.com/profile.php?id=61591606529637"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+92 327 781 4489",
          areaServed: "PK",
          availableLanguage: ["en", "ur"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: BRAND_NAME,
      url: SITE_URL,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-PK",
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE_URL}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export function productJsonLd(product: Product, longDescription: string) {
  const price = priceNumber(product.price);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl(product)}#product`,
    name: product.name,
    description: longDescription,
    image: [absoluteImage(product.image)],
    url: productUrl(product),
    brand: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: "Premium fresh fruit",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      url: productUrl(product),
      priceCurrency: "PKR",
      price,
      availability: availability(product),
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };
}

export function collectionJsonLd(collection: Collection, longDescription: string) {
  const price = priceNumber(collection.price);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${collectionUrl(collection)}#product`,
    name: collection.name,
    description: longDescription,
    image: [absoluteImage(collection.image)],
    url: collectionUrl(collection),
    brand: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: "Premium fruit gift basket",
    offers: {
      "@type": "Offer",
      url: collectionUrl(collection),
      priceCurrency: "PKR",
      price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
