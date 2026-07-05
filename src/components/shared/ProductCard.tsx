"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="group bg-white rounded-card shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-brand-accent">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <Badge className="bg-brand-secondary text-white border-0 text-xs font-semibold">
              New
            </Badge>
          )}
          {product.isBestSeller && !product.isNew && (
            <Badge className="bg-brand-primary text-white border-0 text-xs font-semibold">
              Best Seller
            </Badge>
          )}
          {product.tag && !product.isNew && !product.isBestSeller && (
            <Badge className="bg-white/90 text-brand-primary border-0 text-xs font-semibold backdrop-blur-sm">
              {product.tag}
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <button
          className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm transition-all duration-200",
            wishlisted
              ? "text-red-500"
              : "text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100"
          )}
          onClick={() => setWishlisted((prev) => !prev)}
          aria-label={wishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wishlisted}
        >
          <Heart
            className={cn("w-4 h-4", wishlisted ? "fill-current" : "")}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <StarRating rating={product.rating} reviewCount={product.reviewCount} className="mb-2" />

        <h3
          className="text-base font-bold text-brand-text mb-1 leading-snug"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-brand-primary">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>
          <Button
            size="sm"
            className="bg-brand-primary hover:bg-[#245030] text-white rounded-full gap-1.5 text-xs"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" aria-hidden="true" />
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
