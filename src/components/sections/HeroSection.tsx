import Image from "next/image";
import { ArrowRight, CheckCircle2, Gift, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#fbfaf6] pt-24 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,#f1e5cf_0%,rgba(251,250,246,0)_100%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-brand-primary lg:block"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid min-h-[calc(100svh-7rem)] gap-10 py-10 md:py-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-secondary">
              The Special Garden of Lahore
            </p>

            <h1
              id="hero-heading"
              className="mb-6 max-w-3xl text-5xl font-semibold leading-[0.94] text-brand-text sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Fruits selected like gifts, delivered like promises.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-[#5f554a] md:text-lg">
              Bagh e Khas curates premium seasonal fruit, elegant gift baskets,
              family boxes, and office plans with daily sourcing, individual
              inspection, professional packing, and reliable delivery across Lahore.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 rounded-card bg-brand-primary px-7 text-sm font-semibold text-white hover:bg-[#102d21]"
                aria-label="Shop our fruit collections"
              >
                Shop Curated Boxes
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-card border-brand-secondary bg-white/80 px-7 text-sm font-semibold text-brand-primary hover:bg-brand-secondary hover:text-white"
                aria-label="Explore our gift boxes"
              >
                Explore Gift Baskets
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, label: "Individually inspected" },
                { icon: ShieldCheck, label: "Transparent quality" },
                { icon: Truck, label: "Same-day Lahore delivery" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-14 items-center gap-3 border border-[#ded5c6] bg-white/75 px-4 py-3 text-sm font-medium text-[#43392f] shadow-soft backdrop-blur"
                >
                  <stat.icon className="h-4 w-4 shrink-0 text-brand-secondary" aria-hidden="true" />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="grid gap-4 sm:grid-cols-[1fr_0.72fr] lg:pl-4">
              <div className="relative min-h-[420px] overflow-hidden rounded-card shadow-card lg:min-h-[620px]">
                <Image
                  src="/baskets/luxury-basket.png"
                  alt="Luxury Bagh e Khas fruit gift basket with premium seasonal fruit"
                  fill
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,60,45,0)_45%,rgba(24,60,45,0.82)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white sm:p-6">
                  <div className="mb-3 inline-flex items-center gap-2 border border-white/25 bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                    <Gift className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                    Gift-ready presentation
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-white/80">
                    Designed for Eid, Ramadan, weddings, corporate gestures,
                    family tables, and thoughtful get-well gifts.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-1">
                <div className="relative min-h-48 overflow-hidden max-sm:hidden rounded-card bg-[#efe3ca] shadow-soft sm:min-h-72">
                  <Image
                    src="/baskets/premium-gift-basket.png"
                    alt="Premium Bagh e Khas fruit basket"
                    fill
                    sizes="(max-width: 640px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex min-h-48 flex-col justify-between  max-sm:hidden rounded-card border border-[#d8c5a1] bg-[#171411] p-5 text-white shadow-soft sm:min-h-72">
                  <Leaf className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
                  <div>
                    <p className="font-heading text-4xl font-semibold">6 steps</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Sourcing, inspection, cleaning, sorting, packing, and
                      follow-up for every order.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
