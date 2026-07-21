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
      className="bg-white py-20 md:py-28"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Simple Process"
          title="A Quietly Rigorous Process"
          subtitle="Every order follows the same care sequence: trusted sourcing, inspection, cleaning, sorting, professional packing, secure delivery, and customer follow-up."
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
              <li key={step.id} className="group relative flex flex-col items-center text-center">
                {!isLast && (
                  <div
                    className="absolute left-[calc(50%+2.5rem)] right-[-50%] top-8 hidden h-px bg-[#ded5c6] md:block"
                    aria-hidden="true"
                  />
                )}

                <div className="relative mb-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-card border border-[#ded5c6] bg-[#fbfaf6] shadow-soft transition-colors duration-200 group-hover:border-brand-secondary">
                    {Icon && (
                      <Icon className="w-7 h-7 text-brand-primary" />
                    )}
                  </div>
                  <div className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-card bg-brand-primary">
                    <span className="text-white text-xs font-bold" aria-hidden="true">
                      {step.step}
                    </span>
                  </div>
                </div>

                <h3
                  className="mb-2 font-heading text-2xl font-semibold text-brand-text"
                >
                  {step.title}
                </h3>
                <p className="mx-auto max-w-xs text-sm leading-6 text-[#62584c]">
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
