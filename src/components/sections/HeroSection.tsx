"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Cherry } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const floatingAnimation = {
  y: [0, -12, 0],
  rotate: [0, 5, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden bg-white"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-brand-accent opacity-60 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-[300px] h-[300px] rounded-full bg-brand-accent opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating decorative icons */}
      {!reducedMotion && (
        <>
          <motion.div
            className="absolute top-32 right-[42%] hidden lg:flex w-12 h-12 rounded-full bg-brand-accent items-center justify-center"
            animate={floatingAnimation}
            aria-hidden="true"
          >
            <Leaf className="w-5 h-5 text-brand-primary opacity-60" />
          </motion.div>
          <motion.div
            className="absolute bottom-40 right-[38%] hidden lg:flex w-10 h-10 rounded-full bg-white shadow-soft items-center justify-center"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1.5 } }}
            aria-hidden="true"
          >
            <Cherry className="w-4 h-4 text-brand-secondary opacity-70" />
          </motion.div>
          <motion.div
            className="absolute top-40 left-[10%] hidden lg:flex w-8 h-8 rounded-full bg-brand-accent items-center justify-center"
            animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2.5 } }}
            aria-hidden="true"
          >
            <Leaf className="w-3.5 h-3.5 text-brand-primary opacity-50" />
          </motion.div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 md:py-16">
          {/* Text Content */}
          <motion.div
            variants={reducedMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={reducedMotion ? {} : itemVariants}
              className="text-brand-secondary text-sm font-semibold uppercase tracking-widest mb-4"
            >
              Premium Fruit Experience
            </motion.p>

            <motion.h1
              id="hero-heading"
              variants={reducedMotion ? {} : itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-text leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Pakistan&apos;s Finest Fruits,{" "}
              <span className="text-brand-primary">Beautifully Curated.</span>
            </motion.h1>

            <motion.p
              variants={reducedMotion ? {} : itemVariants}
              className="text-base md:text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Premium seasonal fruits, hand-selected and beautifully packed for gifting
              and everyday living. Same-day delivery across Lahore.
            </motion.p>

            <motion.div
              variants={reducedMotion ? {} : itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-[#245030] text-white rounded-full px-8 gap-2 text-sm font-semibold h-12"
                aria-label="Shop our fruit collections"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brand-secondary text-brand-primary hover:bg-brand-secondary hover:text-white rounded-full px-8 text-sm font-semibold h-12"
                aria-label="Explore our gift boxes"
              >
                Explore Boxes
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={reducedMotion ? {} : itemVariants}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              {[
                { value: "500+", label: "Happy Customers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "Same Day", label: "Delivery in Lahore" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-lg font-bold text-brand-primary leading-none">
                    {stat.value}
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={reducedMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none lg:aspect-[5/6]">
              {/* Decorative background blob */}
              <div
                className="absolute inset-4 rounded-[40%_60%_60%_40%/40%_40%_60%_60%] bg-brand-accent"
                aria-hidden="true"
              />
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-card">
                <Image
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=900&q=85"
                  alt="Premium luxury fruit basket with a beautiful arrangement of seasonal fruits"
                  fill
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
