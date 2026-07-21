import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import CollectionCard from "@/components/shared/CollectionCard";
import { collections } from "@/lib/data";

export default function FeaturedCollections() {
  return (
    <AnimatedSection
      id="featured-collections"
      className="bg-[#fbfaf6] py-20 md:py-28"
      aria-labelledby="collections-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Collections"
          title="Curated for Every Occasion"
          subtitle="Personal fruit boxes, elegant gift baskets, family subscriptions, and corporate hampers designed to feel generous before they are opened."
          id="collections-heading"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
