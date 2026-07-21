"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, ShoppingCart, Check } from "lucide-react";
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
        "group flex min-h-full flex-col overflow-hidden rounded-card border border-[#ded5c6] bg-white shadow-soft transition-colors duration-200",
        product.isComingSoon || product.isOutOfStock
          ? "opacity-90"
          : "hover:border-brand-secondary hover:shadow-card"
      )}
    >
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
              : "group-hover:scale-[1.03]"
          )}
          loading="lazy"
        />

        {/* Coming Soon overlay */}
        {product.isComingSoon && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
            <span className="rounded-card border border-white/60 bg-white/10 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-white">
              Coming Soon
            </span>
          </div>
        )}

        {/* Out of Stock overlay */}
        {product.isOutOfStock && (
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
            <span className="rounded-card border border-red-400/60 bg-red-500/20 px-3 py-1.5 text-sm font-bold uppercase tracking-widest text-white">
              Out of Stock
            </span>
          </div>
        )}

        {/* Badges (hidden when coming soon or out of stock) */}
        {!product.isComingSoon && !product.isOutOfStock && (
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isNew && (
              <Badge className="rounded-card border-0 bg-brand-secondary text-xs font-semibold text-white">
                New
              </Badge>
            )}
            {product.isBestSeller && !product.isNew && (
              <Badge className="rounded-card border-0 bg-brand-primary text-xs font-semibold text-white">
                Best Seller
              </Badge>
            )}
            {product.tag && !product.isNew && !product.isBestSeller && (
              <Badge className="rounded-card border-0 bg-white/90 text-xs font-semibold text-brand-primary backdrop-blur-sm">
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
                : "text-[#8d8070] hover:text-red-500 opacity-0 group-hover:opacity-100"
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
          className="mb-1 font-sans text-lg font-semibold leading-snug text-brand-text"
        >
          {product.name}
        </h3>
        <p className="mb-3 line-clamp-2 flex-1 text-sm leading-6 text-[#62584c]">
          {product.description}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="mb-4 inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary transition-colors duration-200 hover:text-brand-primary"
          aria-label={`View details for ${product.name}`}
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>

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
              <span className="text-xs text-[#8d8070] line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          {product.isComingSoon ? (
            <span className="rounded-card bg-gray-100 px-3 py-1.5 text-xs font-semibold text-[#8d8070]">
              Notify Me
            </span>
          ) : product.isOutOfStock ? (
            <span className="rounded-card bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500">
              Out of Stock
            </span>
          ) : (
            <Button
              size="sm"
              onClick={handleAddToCart}
              className={cn(
                "rounded-card gap-1.5 text-xs font-semibold transition-colors duration-200",
                added
                  ? "bg-green-500 hover:bg-green-500 text-white"
                  : "bg-brand-primary hover:bg-[#102d21] text-white"
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
