"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div" | "article";
  id?: string;
  "aria-labelledby"?: string;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  as = "section",
  id,
  "aria-labelledby": ariaLabelledby,
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.5,
        ease: "easeOut" as const,
        delay,
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
    >
      {children}
    </Component>
  );
}
