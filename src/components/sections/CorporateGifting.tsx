import Image from "next/image";
import { ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CorporateGifting() {
  return (
    <AnimatedSection
      id="corporate-gifting"
      className="py-20 md:py-28 bg-[#1c1c1c] overflow-hidden relative"
      aria-labelledby="corporate-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=1600&q=80"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          loading="lazy"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full border border-brand-secondary/40 flex items-center justify-center">
              <Building2
                className="w-4 h-4 text-brand-secondary"
                aria-hidden="true"
              />
            </div>
            <span className="text-brand-secondary text-sm font-semibold uppercase tracking-widest">
              Corporate Gifting
            </span>
          </div>

          <h2
            id="corporate-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Impress Clients with{" "}
            <span className="text-brand-secondary">Premium Fruit Gifts.</span>
          </h2>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
            Elevate your corporate relationships with elegantly curated fruit hampers.
            Custom branding, bulk pricing, and same-day delivery available across Lahore.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-brand-secondary hover:bg-[#b8952e] text-white rounded-full px-8 gap-2 text-sm font-semibold h-12"
              aria-label="Request a corporate gifting quote"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 rounded-full px-8 text-sm font-semibold h-12 backdrop-blur-sm"
              aria-label="View corporate packages"
            >
              View Packages
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "50+", label: "Corporate Clients" },
              { value: "Custom", label: "Branding Available" },
              { value: "Bulk", label: "Pricing Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  {stat.value}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
