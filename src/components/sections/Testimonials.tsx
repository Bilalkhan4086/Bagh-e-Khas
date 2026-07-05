"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import SectionHeader from "@/components/shared/SectionHeader";
import StarRating from "@/components/shared/StarRating";
import { testimonials } from "@/lib/data";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useReducedMotion();

  const total = testimonials.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    if (reducedMotion || paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, reducedMotion, total]);

  const visibleCount = 3;
  const visibleIndices = Array.from(
    { length: visibleCount },
    (_, i) => (current + i) % total
  );

  return (
    <AnimatedSection
      id="testimonials"
      className="py-20 md:py-28 bg-white overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Love"
          title="What Our Customers Say"
          subtitle="Trusted by hundreds of families, professionals, and corporates across Lahore."
          id="testimonials-heading"
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          aria-label="Customer testimonials carousel"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[280px]">
            {visibleIndices.map((idx, position) => {
              const testimonial = testimonials[idx];
              return (
                <AnimatePresence key={`${idx}-${position}`} mode="wait">
                  <motion.article
                    key={`testimonial-${idx}`}
                    initial={reducedMotion ? {} : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? {} : { opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: "easeOut" as const, delay: position * 0.08 }}
                    className={cn(
                      "bg-brand-accent rounded-card p-6 flex flex-col gap-4 relative",
                      position !== 0 && "hidden md:flex"
                    )}
                    aria-label={`Testimonial from ${testimonial.name}`}
                  >
                    <Quote
                      className="w-8 h-8 text-brand-secondary opacity-40"
                      aria-hidden="true"
                    />

                    <StarRating rating={testimonial.rating} />

                    <p className="text-sm text-gray-600 leading-relaxed flex-1">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 pt-2 border-t border-white">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={`Portrait of ${testimonial.name}`}
                          fill
                          sizes="40px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-brand-text">{testimonial.name}</p>
                        <p className="text-xs text-gray-400">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    i === current
                      ? "bg-brand-primary w-6"
                      : "bg-gray-200 hover:bg-gray-300"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-brand-primary hover:text-brand-primary transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
