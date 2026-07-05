"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Collection } from "@/types";
import { useCart, parsePriceNum } from "@/context/CartContext";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: collection.id,
      name: collection.name,
      price: collection.price,
      priceNum: parsePriceNum(collection.price),
      image: collection.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group bg-white rounded-card shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-accent">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {collection.tag && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-white/90 text-brand-primary border-0 text-xs font-semibold backdrop-blur-sm shadow-sm">
              {collection.tag}
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3
          className="text-lg font-bold text-brand-text mb-2 leading-snug"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {collection.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
          {collection.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-base font-bold text-brand-primary">
            {collection.price}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={cn(
              "rounded-full gap-1.5 text-xs font-semibold transition-all duration-300",
              added
                ? "bg-green-500 hover:bg-green-500 text-white"
                : "bg-brand-primary hover:bg-[#245030] text-white"
            )}
            aria-label={`Add ${collection.name} to cart`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
                Added
              </>
            ) : (
              <>
                Shop Now
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </>
            )}
          </Button>
        </div>
      </div>
    </article>
  );
}
