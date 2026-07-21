import Image from "next/image";
import { ArrowRight, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function CorporateGifting() {
  return (
    <AnimatedSection
      id="corporate-gifting"
      className="relative overflow-hidden bg-[#171411] py-20 md:py-28"
      aria-labelledby="corporate-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/baskets/corporate-gifting.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,20,17,0.96)_0%,rgba(23,20,17,0.82)_48%,rgba(23,20,17,0.42)_100%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-card border border-brand-secondary/40">
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
            className="mb-6 text-4xl font-semibold leading-[1.02] text-white md:text-5xl lg:text-6xl"
          >
            Corporate gifting that feels considered, not generic.
          </h2>

          <p className="mb-8 max-w-lg text-base leading-8 text-white/70 md:text-lg">
            Elevate your corporate relationships with elegantly curated fruit hampers.
            Custom branding, bulk pricing, and same-day delivery available across Lahore.
          </p>

          <ul className="mb-9 grid gap-3 sm:grid-cols-2" role="list">
            {[
              "Branded presentation options",
              "Bulk gifting coordination",
              "Fresh daily seasonal sourcing",
              "Delivery follow-up support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white/75">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="h-12 rounded-card bg-brand-secondary px-8 text-sm font-semibold text-white hover:bg-[#a66e10]"
              aria-label="Request a corporate gifting quote"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-card border-white/30 bg-transparent px-8 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/10"
              aria-label="View corporate packages"
            >
              View Packages
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "50+", label: "Corporate Clients" },
              { value: "Custom", label: "Branding Available" },
              { value: "Bulk", label: "Pricing Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
