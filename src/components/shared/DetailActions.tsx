"use client";

import { Check, MessageCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { parsePriceNum, useCart } from "@/context/CartContext";
import { trackAddToCart, trackItemInquiry } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface DetailActionsProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  disabled?: boolean;
  disabledLabel?: string;
}

const WHATSAPP_NUMBER = "923277814489";

export default function DetailActions({
  id,
  name,
  price,
  image,
  category,
  disabled = false,
  disabledLabel = "Currently unavailable",
}: DetailActionsProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const whatsappMessage = encodeURIComponent(
    `Hi Bagh e Khas, I am interested in ${name}. Please confirm availability, delivery time, and final price.`
  );

  const handleAdd = () => {
    if (disabled) return;
    trackAddToCart({ id, name, price, category });
    addItem({
      id,
      name,
      price,
      priceNum: parsePriceNum(price),
      image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button
        size="lg"
        onClick={handleAdd}
        disabled={disabled}
        className={cn(
          "h-12 rounded-card px-6 text-sm font-semibold",
          added
            ? "bg-green-600 text-white hover:bg-green-600"
            : "bg-brand-primary text-white hover:bg-[#102d21]"
        )}
        aria-label={disabled ? disabledLabel : `Add ${name} to cart`}
      >
        {added ? (
          <>
            <Check className="h-4 w-4" aria-hidden="true" />
            Added to cart
          </>
        ) : (
          <>
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            {disabled ? disabledLabel : "Add to cart"}
          </>
        )}
      </Button>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
        onClick={() => trackItemInquiry({ id, name, price, category })}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-card border border-brand-secondary bg-white px-6 text-sm font-semibold text-brand-primary transition-colors duration-200 hover:bg-brand-secondary hover:text-white"
        aria-label={`Ask about ${name} on WhatsApp`}
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Ask on WhatsApp
      </a>
    </div>
  );
}
