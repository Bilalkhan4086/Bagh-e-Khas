"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "923262689334";

interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

const emptyDetails: CustomerDetails = {
  name: "",
  phone: "",
  address: "",
  notes: "",
};

type Step = "cart" | "details";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart, totalItems, totalPrice } =
    useCart();
  const [step, setStep] = useState<Step>("cart");
  const [details, setDetails] = useState<CustomerDetails>(emptyDetails);
  const [errors, setErrors] = useState<Partial<CustomerDetails>>({});

  const formatPrice = (num: number) =>
    `Rs. ${num.toLocaleString("en-PK")}`;

  const handleClose = () => {
    closeCart();
    setTimeout(() => setStep("cart"), 300);
  };

  const validate = () => {
    const errs: Partial<CustomerDetails> = {};
    if (!details.name.trim()) errs.name = "Name is required";
    if (!details.phone.trim()) errs.phone = "Phone number is required";
    else if (!/^[0-9+\-\s]{10,15}$/.test(details.phone.trim()))
      errs.phone = "Enter a valid phone number";
    if (!details.address.trim()) errs.address = "Delivery address is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const itemLines = items
      .map(
        (item) =>
          `• ${item.name} × ${item.quantity} — ${formatPrice(item.priceNum * item.quantity)}`
      )
      .join("\n");

    const message = [
      "Hello Bagh-e-Khas! 🌿",
      "",
      "I'd like to place an order:",
      "",
      "*Items Ordered:*",
      itemLines,
      "",
      `*Order Total: ${formatPrice(totalPrice)}*`,
      "",
      "*Delivery Details:*",
      `👤 Name: ${details.name}`,
      `📞 Phone: ${details.phone}`,
      `📍 Address: ${details.address}`,
      details.notes ? `📝 Notes: ${details.notes}` : "",
      "",
      "Please confirm my order. Thank you!",
    ]
      .filter((line) => line !== undefined)
      .join("\n");

    return encodeURIComponent(message);
  };

  const handleConfirm = () => {
    if (!validate()) return;
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    clearCart();
    setDetails(emptyDetails);
    setStep("cart");
    handleClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent
        side="right"
        className="w-full sm:w-[420px] p-0 flex flex-col bg-white"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            {step === "details" && (
              <button
                onClick={() => setStep("cart")}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors mr-1"
                aria-label="Back to cart"
              >
                <ChevronRight className="w-4 h-4 rotate-180" aria-hidden="true" />
              </button>
            )}
            <ShoppingBag className="w-5 h-5 text-brand-primary" aria-hidden="true" />
            <SheetTitle className="text-base font-bold text-brand-text" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              {step === "cart" ? `Your Cart (${totalItems})` : "Delivery Details"}
            </SheetTitle>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 px-5 pt-3 pb-0">
          {(["cart", "details"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors",
                  step === s || (s === "cart" && step === "details")
                    ? "bg-brand-primary text-white"
                    : "bg-gray-100 text-gray-400"
                )}
              >
                {i + 1}
              </div>
              <span
                className={cn(
                  "ml-1.5 text-xs font-medium transition-colors",
                  step === s ? "text-brand-primary" : "text-gray-400"
                )}
              >
                {s === "cart" ? "Cart" : "Details"}
              </span>
              {i === 0 && (
                <div className={cn("w-8 h-px mx-2", step === "details" ? "bg-brand-primary" : "bg-gray-200")} />
              )}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-y-auto">
          {/* ── STEP 1: Cart Items ── */}
          {step === "cart" && (
            <div className="flex flex-col h-full">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center flex-1 py-20 px-8 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand-accent flex items-center justify-center">
                    <ShoppingBag className="w-7 h-7 text-brand-primary opacity-50" aria-hidden="true" />
                  </div>
                  <p className="text-base font-semibold text-brand-text" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    Your cart is empty
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Add some premium fruits to get started.
                  </p>
                  <Button
                    onClick={handleClose}
                    className="bg-brand-primary hover:bg-[#245030] text-white rounded-full mt-2"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-gray-50 px-5 py-2" role="list" aria-label="Cart items">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start gap-3 py-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-brand-accent flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-brand-text leading-snug truncate" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                          {item.name}
                        </p>
                        <p className="text-xs text-brand-primary font-semibold mt-0.5">
                          {formatPrice(item.priceNum)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                            <button
                              onClick={() => updateQty(item.id, item.quantity - 1)}
                              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-brand-primary hover:bg-gray-50 transition-colors"
                              aria-label={`Decrease quantity of ${item.name}`}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" aria-hidden="true" />
                            </button>
                            <span className="w-8 text-center text-sm font-semibold text-brand-text">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.quantity + 1)}
                              className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-brand-primary hover:bg-gray-50 transition-colors"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="w-3 h-3" aria-hidden="true" />
                            </button>
                          </div>
                          <span className="text-xs text-gray-400 flex-1">
                            = {formatPrice(item.priceNum * item.quantity)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-red-400 transition-colors rounded-full hover:bg-red-50"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* ── STEP 2: Customer Details ── */}
          {step === "details" && (
            <form
              onSubmit={(e) => { e.preventDefault(); handleConfirm(); }}
              className="px-5 py-4 flex flex-col gap-4"
              noValidate
              aria-label="Delivery details form"
            >
              <p className="text-sm text-gray-400 leading-relaxed">
                We&apos;ll open WhatsApp with your order pre-filled. Just hit send!
              </p>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-name" className="text-xs font-semibold text-gray-600">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="cart-name"
                  placeholder="e.g. Ahmed Ali"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cart-name-error" : undefined}
                  className={cn("h-10 text-sm rounded-xl border-gray-200", errors.name && "border-red-300")}
                />
                {errors.name && (
                  <p id="cart-name-error" className="text-xs text-red-500" role="alert">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-phone" className="text-xs font-semibold text-gray-600">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <Input
                  id="cart-phone"
                  type="tel"
                  placeholder="e.g. 0300-1234567"
                  value={details.phone}
                  onChange={(e) => setDetails({ ...details, phone: e.target.value })}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "cart-phone-error" : undefined}
                  className={cn("h-10 text-sm rounded-xl border-gray-200", errors.phone && "border-red-300")}
                />
                {errors.phone && (
                  <p id="cart-phone-error" className="text-xs text-red-500" role="alert">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-address" className="text-xs font-semibold text-gray-600">
                  Delivery Address <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="cart-address"
                  rows={3}
                  placeholder="House/flat number, street, area, city"
                  value={details.address}
                  onChange={(e) => setDetails({ ...details, address: e.target.value })}
                  aria-invalid={!!errors.address}
                  aria-describedby={errors.address ? "cart-address-error" : undefined}
                  className={cn(
                    "w-full rounded-xl border border-gray-200 px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-colors",
                    errors.address && "border-red-300"
                  )}
                />
                {errors.address && (
                  <p id="cart-address-error" className="text-xs text-red-500" role="alert">{errors.address}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-notes" className="text-xs font-semibold text-gray-600">
                  Order Notes <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <Input
                  id="cart-notes"
                  placeholder="e.g. Call before delivery"
                  value={details.notes}
                  onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                  className="h-10 text-sm rounded-xl border-gray-200"
                />
              </div>
            </form>
          )}
        </div>

        {/* Footer — always visible */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 bg-white flex flex-col gap-3">
            {/* Order summary */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">Total</span>
                <span className="text-base font-bold text-brand-primary ml-2">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            {step === "cart" ? (
              <Button
                onClick={() => setStep("details")}
                className="w-full bg-brand-primary hover:bg-[#245030] text-white rounded-full h-11 gap-2 font-semibold text-sm"
              >
                Proceed to Confirm
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button
                onClick={handleConfirm}
                className="w-full bg-[#25D366] hover:bg-[#1da851] text-white rounded-full h-11 gap-2 font-semibold text-sm"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Confirm Order via WhatsApp
              </Button>
            )}

            <p className="text-center text-xs text-gray-400">
              {step === "cart"
                ? "No payment required upfront — COD available"
                : "WhatsApp will open with your order details pre-filled"}
            </p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
