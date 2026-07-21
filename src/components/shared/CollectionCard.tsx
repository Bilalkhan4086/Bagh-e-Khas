"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Collection } from "@/types";
import { useCart, parsePriceNum } from "@/context/CartContext";
import { trackAddToCart, trackSelectItem } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    trackAddToCart({
      id: collection.id,
      name: collection.name,
      price: collection.price,
      category: "Gift Basket",
    });
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
    <article className="group flex min-h-full flex-col overflow-hidden rounded-card border border-[#ded5c6] bg-white shadow-soft transition-colors duration-200 hover:border-brand-secondary hover:shadow-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-accent">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,20,17,0)_45%,rgba(23,20,17,0.48)_100%)]" />
        {collection.tag && (
          <div className="absolute top-3 left-3">
            <Badge className="rounded-card border border-white/30 bg-white/90 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur-sm">
              {collection.tag}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3
          className="mb-2 font-heading text-2xl font-semibold leading-tight text-brand-text"
        >
          {collection.name}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-6 text-[#62584c]">
          {collection.description}
        </p>
        <Link
          href={`/collections/${collection.slug}`}
          onClick={() =>
            trackSelectItem({
              id: collection.id,
              name: collection.name,
              price: collection.price,
              category: "Gift Basket",
            })
          }
          className="mb-5 inline-flex cursor-pointer items-center gap-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary transition-colors duration-200 hover:text-brand-primary"
          aria-label={`View details for ${collection.name}`}
        >
          View details
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-brand-primary">
            {collection.price}
          </span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            className={cn(
              "rounded-card gap-1.5 text-xs font-semibold transition-colors duration-200",
              added
                ? "bg-green-500 hover:bg-green-500 text-white"
                : "bg-brand-primary hover:bg-[#102d21] text-white"
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
