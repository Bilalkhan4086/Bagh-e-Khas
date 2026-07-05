"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingCart, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import type { Product } from "@/types";
import { useCart, parsePriceNum } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (product.isComingSoon || product.isOutOfStock) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      priceNum: parsePriceNum(product.price),
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article
      className={cn(
        "group bg-white rounded-card shadow-soft transition-all duration-300 overflow-hidden flex flex-col",
        product.isComingSoon || product.isOutOfStock
          ? "opacity-90"
          : "hover:shadow-card hover:-translate-y-1"
      )}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-brand-accent">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className={cn(
            "object-cover transition-transform duration-500",
            product.isComingSoon || product.isOutOfStock
              ? "grayscale-30 brightness-90"
              : "group-hover:scale-105"
          )}
          loading="lazy"
        />

        {/* Coming Soon overlay */}
        {product.isComingSoon && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="text-white text-sm font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/60 bg-white/10">
              Coming Soon
            </span>
          </div>
        )}

        {/* Out of Stock overlay */}
        {product.isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
            <span className="text-white text-sm font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-red-400/60 bg-red-500/20">
              Out of Stock
            </span>
          </div>
        )}

        {/* Badges (hidden when coming soon or out of stock) */}
        {!product.isComingSoon && !product.isOutOfStock && (
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
        )}

        {/* Wishlist button (hidden when coming soon or out of stock) */}
        {!product.isComingSoon && !product.isOutOfStock && (
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
        )}
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
            <span
              className={cn(
                "text-base font-bold",
                product.isComingSoon || product.isOutOfStock
                  ? "text-gray-400"
                  : "text-brand-primary"
              )}
            >
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          {product.isComingSoon ? (
            <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
              Notify Me
            </span>
          ) : product.isOutOfStock ? (
            <span className="text-xs font-semibold text-red-400 bg-red-50 px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          ) : (
            <Button
              size="sm"
              onClick={handleAddToCart}
              className={cn(
                "rounded-full gap-1.5 text-xs font-semibold transition-all duration-300",
                added
                  ? "bg-green-500 hover:bg-green-500 text-white"
                  : "bg-brand-primary hover:bg-[#245030] text-white"
              )}
              aria-label={`Add ${product.name} to cart`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  Added
                </>
              ) : (
                <>
                  <ShoppingCart className="w-3.5 h-3.5" aria-hidden="true" />
                  Add
                </>
              )}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
