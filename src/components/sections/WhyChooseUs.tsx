import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import { whyChooseUsFeatures } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <AnimatedSection
      id="why-us"
      className="bg-white py-20 md:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-card border border-[#ded5c6] bg-white p-4 shadow-card sm:-right-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-card bg-brand-primary">
                <CheckCircle2 className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-brand-text">Quality Guaranteed</p>
                <p className="text-xs text-[#766b5f]">Every single fruit</p>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Why Bagh-e-Khas"
              title="More Than Fruit Delivery"
              subtitle="We solve the everyday uncertainty of fruit shopping with careful sourcing, honest selection, hygienic handling, and presentation built for premium homes and thoughtful gifts."
              align="left"
              id="why-us-heading"
            />

            <ul className="flex flex-col gap-4" role="list">
              {whyChooseUsFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-card border border-brand-secondary bg-[#fff9ed]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-secondary" aria-hidden="true" />
                  </div>
                  <span className="text-sm leading-7 text-[#62584c] md:text-base">
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
