import { Sprout, Truck, Gift, HandHeart } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { trustFeatures } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sprout,
  Truck,
  Gift,
  HandHeart,
};

export default function TrustSection() {
  return (
    <AnimatedSection
      id="trust"
      className="bg-brand-accent py-14 md:py-16"
      aria-labelledby="trust-heading"
    >
      <h2 id="trust-heading" className="sr-only">
        Our Commitments
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          role="list"
        >
          {trustFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <li
                key={feature.id}
                className="flex flex-col items-center text-center gap-3 p-5 bg-white rounded-card shadow-soft group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-brand-primary flex items-center justify-center group-hover:bg-brand-primary transition-colors duration-300">
                  {Icon && (
                    <Icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-brand-text mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </AnimatedSection>
  );
}
