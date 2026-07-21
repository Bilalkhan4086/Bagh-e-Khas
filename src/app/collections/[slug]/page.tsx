import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ItemDetailPage from "@/components/shared/ItemDetailPage";
import { collectionDetails } from "@/lib/detail-copy";
import { collections } from "@/lib/data";
import {
  absoluteUrl,
  absoluteImage,
  breadcrumbJsonLd,
  collectionJsonLd,
  collectionUrl,
} from "@/lib/seo";

type CollectionPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) {
    return {
      title: "Collection Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const detail = collectionDetails[collection.slug];
  const description = detail?.longDescription ?? collection.description;
  const url = collectionUrl(collection);

  return {
    title: collection.name,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${collection.name} | Bagh-e-Khas`,
      description,
      url,
      type: "website",
      images: [
        {
          url: absoluteImage(collection.image),
          alt: collection.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${collection.name} | Bagh-e-Khas`,
      description,
      images: [absoluteImage(collection.image)],
    },
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);

  if (!collection) notFound();

  const detail = collectionDetails[collection.slug];

  if (!detail) notFound();

  const url = collectionUrl(collection);
  const structuredData = [
    collectionJsonLd(collection, detail.longDescription),
    breadcrumbJsonLd([
      { name: "Home", url: absoluteUrl("/") },
      { name: "Gift Baskets", url: absoluteUrl("/#featured-collections") },
      { name: collection.name, url },
    ]),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ItemDetailPage
        backHref="/#featured-collections"
        backLabel="Back to gift baskets"
        eyebrow="Gift Basket"
        title={collection.name}
        description={collection.description}
        price={collection.price}
        image={collection.image}
        tag={collection.tag}
        detail={detail}
        actionId={collection.id}
      />
    </>
  );
}
