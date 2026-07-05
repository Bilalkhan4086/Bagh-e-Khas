import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  id?: string;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p className="text-brand-secondary text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text leading-tight"
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg text-gray-500 leading-relaxed",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
