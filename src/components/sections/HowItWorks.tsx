import { ShoppingBag, Cherry, MapPin } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { howItWorksSteps } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShoppingBag,
  Cherry,
  MapPin,
};

export default function HowItWorks() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="py-20 md:py-28 bg-brand-accent"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple Process"
          title="From Our Farms to Your Door"
          subtitle="Three effortless steps to fresh, premium fruits on your doorstep."
          id="how-it-works-heading"
        />

        <ol
          className="relative grid md:grid-cols-3 gap-8 md:gap-12"
          aria-label="How it works steps"
        >
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const isLast = index === howItWorksSteps.length - 1;

            return (
              <li key={step.id} className="relative flex flex-col items-center text-center">
                {/* Connector line (desktop) */}
                {!isLast && (
                  <div
                    className="absolute top-8 left-[calc(50%+2.5rem)] right-[-50%] h-[1px] bg-brand-primary/20 hidden md:block"
                    aria-hidden="true"
                  />
                )}

                {/* Step number + icon */}
                <div className="relative mb-5">
                  <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center border-2 border-brand-primary/20 group-hover:border-brand-primary transition-colors">
                    {Icon && (
                      <Icon className="w-7 h-7 text-brand-primary" />
                    )}
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center">
                    <span className="text-white text-xs font-bold" aria-hidden="true">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-lg font-bold text-brand-text mb-2"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </AnimatedSection>
  );
}
