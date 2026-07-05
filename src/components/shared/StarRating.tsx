import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
}

export default function StarRating({
  rating,
  reviewCount,
  size = "sm",
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const starSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={`Rated ${rating} out of 5 stars${reviewCount ? `, ${reviewCount} reviews` : ""}`}
      role="img"
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(starSize, "fill-brand-secondary text-brand-secondary")}
            aria-hidden="true"
          />
        ))}
        {hasHalf && (
          <div className="relative" aria-hidden="true">
            <Star className={cn(starSize, "text-gray-200 fill-gray-200")} />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className={cn(starSize, "fill-brand-secondary text-brand-secondary")} />
            </div>
          </div>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(starSize, "text-gray-200 fill-gray-200")}
            aria-hidden="true"
          />
        ))}
      </div>
      {reviewCount !== undefined && (
        <span className="text-xs text-gray-400 ml-1">({reviewCount})</span>
      )}
    </div>
  );
}
