import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import ProductCard from "@/components/shared/ProductCard";
import { products } from "@/lib/data";

export default function BestSellers() {
  return (
    <AnimatedSection
      id="best-sellers"
      className="bg-[#fbfaf6] py-20 md:py-28"
      aria-labelledby="best-sellers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Bestsellers"
          title="Seasonal Fruit Worth Returning For"
          subtitle="Premium picks selected for taste, freshness, and presentation, with availability managed honestly as seasons shift."
          id="best-sellers-heading"
        />

        <div className="grid grid-cols-1 min-[440px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="lg:col-span-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
