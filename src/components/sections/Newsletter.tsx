"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/shared/AnimatedSection";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <AnimatedSection
      id="newsletter"
      className="py-20 md:py-24 bg-brand-accent"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-secondary text-sm font-semibold uppercase tracking-widest mb-3">
          Stay in the Know
        </p>
        <h2
          id="newsletter-heading"
          className="text-4xl md:text-5xl font-bold text-brand-text mb-4"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Stay Fresh.
        </h2>
        <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
          Receive seasonal fruit updates, exclusive offers, and gifting inspiration
          directly in your inbox.
        </p>

        {submitted ? (
          <div
            className="flex items-center justify-center gap-3 py-4 text-brand-primary"
            role="alert"
            aria-live="polite"
          >
            <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
            <p className="text-base font-semibold">
              Thank you! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Newsletter subscription form"
          >
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby={error ? "newsletter-error" : undefined}
                  aria-invalid={!!error}
                  className="h-12 rounded-full border-gray-200 bg-white px-5 text-sm focus:border-brand-primary focus:ring-brand-primary"
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="bg-brand-primary hover:bg-[#245030] text-white rounded-full h-12 px-8 gap-2 text-sm font-semibold whitespace-nowrap"
              >
                Subscribe
                <Send className="w-4 h-4" aria-hidden="true" />
              </Button>
            </div>
            {error && (
              <p
                id="newsletter-error"
                className="mt-2 text-xs text-red-500 text-left max-w-md mx-auto"
                role="alert"
              >
                {error}
              </p>
            )}
            <p className="mt-3 text-xs text-gray-400">
              No spam. Unsubscribe at any time.
            </p>
          </form>
        )}
      </div>
    </AnimatedSection>
  );
}
