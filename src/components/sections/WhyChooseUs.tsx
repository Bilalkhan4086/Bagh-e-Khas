import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyChooseUsFeatures } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <AnimatedSection
      id="why-us"
      className="py-20 md:py-28 bg-brand-accent"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-card overflow-hidden shadow-card">
              <Image
                src="https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=900&q=85"
                alt="Fresh, vibrant fruits arranged beautifully demonstrating Bagh-e-Khas quality"
                fill
                sizes="(max-width: 1024px) 90vw, 50vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative floating card */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-card p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-text">Quality Guaranteed</p>
                <p className="text-xs text-gray-400">Every single fruit</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="Why Bagh-e-Khas"
              title="More Than a Fruit Delivery."
              subtitle="We are Lahore's premium fruit gifting experience — from trusted farms directly to your door, every single day."
              align="left"
              id="why-us-heading"
            />

            <ul className="flex flex-col gap-4" role="list">
              {whyChooseUsFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-brand-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" aria-hidden="true" />
                  </div>
                  <span className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
