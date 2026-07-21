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
      className="border-y border-[#ded5c6] bg-[#171411] py-14 text-white md:py-16"
      aria-labelledby="trust-heading"
    >
      <h2 id="trust-heading" className="sr-only">
        Our Commitments
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {trustFeatures.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <li
                key={feature.id}
                className="group flex min-h-52 flex-col justify-between bg-[#171411] p-6 transition-colors duration-200 hover:bg-[#1f261d]"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-brand-secondary/50 bg-white/5 transition-colors duration-200 group-hover:bg-brand-secondary">
                  {Icon && (
                    <Icon className="h-5 w-5 text-brand-secondary transition-colors duration-200 group-hover:text-[#171411]" />
                  )}
                </div>
                <div>
                  <h3 className="mb-2 font-heading text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/60">
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
