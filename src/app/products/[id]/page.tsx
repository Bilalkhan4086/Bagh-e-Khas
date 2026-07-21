import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItemDetailPage from "@/components/shared/ItemDetailPage";
import { productDetails } from "@/lib/detail-copy";
import { products } from "@/lib/data";
import {
  absoluteUrl,
  absoluteImage,
  breadcrumbJsonLd,
  productJsonLd,
  productUrl,
} from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    return {
      title: "Product Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const detail = productDetails[product.id];
  const description = detail?.longDescription ?? product.description;
  const url = productUrl(product);

  return {
    title: product.name,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} | Bagh-e-Khas`,
      description,
      url,
      type: "website",
      images: [
        {
          url: absoluteImage(product.image),
          alt: product.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Bagh-e-Khas`,
      description,
      images: [absoluteImage(product.image)],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  const detail = productDetails[product.id];

  if (!detail) notFound();

  const disabled = product.isComingSoon || product.isOutOfStock;
  const url = productUrl(product);
  const structuredData = [
    productJsonLd(product, detail.longDescription),
    breadcrumbJsonLd([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Seasonal Fruits", url: absoluteUrl("/#best-sellers") },
      { name: product.name, url },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ItemDetailPage
        backHref="/#best-sellers"
        backLabel="Back to seasonal fruits"
        eyebrow="Seasonal Fruit"
        title={product.name}
        description={product.description}
        price={product.price}
        image={product.image}
        tag={
          product.isComingSoon
            ? "Coming Soon"
            : product.isOutOfStock
              ? "Out of Stock"
              : product.tag
        }
        detail={detail}
        actionId={product.id}
        disabled={disabled}
        disabledLabel={product.isComingSoon ? "Coming soon" : "Out of stock"}
      />
    </>
  );
}
