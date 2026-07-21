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
      className="overflow-hidden bg-[#fbfaf6] py-20 md:py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Customer Love"
          title="Trust Built One Order at a Time"
          subtitle="Families, professionals, and corporate clients choose Bagh e Khas when quality and presentation both matter."
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
          <div className="grid min-h-[300px] grid-cols-1 gap-6 md:grid-cols-3">
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
                      "relative flex flex-col gap-4 rounded-card border border-[#ded5c6] bg-white p-6 shadow-soft",
                      position !== 0 && "hidden md:flex"
                    )}
                    aria-label={`Testimonial from ${testimonial.name}`}
                  >
                    <Quote
                      className="w-8 h-8 text-brand-secondary opacity-40"
                      aria-hidden="true"
                    />

                    <StarRating rating={testimonial.rating} />

                    <p className="flex-1 text-sm leading-7 text-[#62584c]">
                      &ldquo;{testimonial.review}&rdquo;
                    </p>

                    <div className="flex items-center gap-3 border-t border-[#efe3ca] pt-4">
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
                        <p className="text-xs text-[#8d8070]">{testimonial.location}</p>
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
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-card border border-[#ded5c6] text-[#62584c] transition-colors hover:border-brand-primary hover:text-brand-primary"
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
                    "h-2 w-2 cursor-pointer rounded-full transition-all duration-300",
                    i === current
                      ? "w-6 bg-brand-primary"
                      : "bg-[#d8c5a1] hover:bg-brand-secondary"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-card border border-[#ded5c6] text-[#62584c] transition-colors hover:border-brand-primary hover:text-brand-primary"
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
