"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "923277814489";

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
        showCloseButton={false}
        className="flex w-full flex-col gap-0 border-[#ded5c6] bg-[#fbfaf6] p-0 sm:w-[430px]"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ded5c6] bg-white px-5 py-4">
          <div className="flex items-center gap-2">
            {step === "details" && (
              <button
                onClick={() => setStep("cart")}
                className="mr-1 cursor-pointer rounded-card p-1 text-[#62584c] transition-colors hover:bg-brand-accent hover:text-brand-primary"
                aria-label="Back to cart"
              >
                <ChevronRight className="w-4 h-4 rotate-180" aria-hidden="true" />
              </button>
            )}
            <ShoppingBag className="w-5 h-5 text-brand-primary" aria-hidden="true" />
            <SheetTitle className="font-heading text-2xl font-semibold leading-none text-brand-text">
              {step === "cart" ? `Your Cart (${totalItems})` : "Delivery Details"}
            </SheetTitle>
          </div>
          <button
            onClick={handleClose}
            className="cursor-pointer rounded-card p-1.5 text-[#8d8070] transition-colors hover:bg-brand-accent hover:text-brand-primary"
            aria-label="Close cart"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-0 bg-white px-5 pb-3 pt-3">
          {(["cart", "details"] as Step[]).map((s, i) => (
            <div key={s} className="flex items-center">
              <div
                className={cn(
                  "flex h-6 w-6 items-center justify-center rounded-card text-xs font-bold transition-colors",
                  step === s || (s === "cart" && step === "details")
                    ? "bg-brand-primary text-white"
                    : "bg-[#f0ece3] text-[#8d8070]"
                )}
              >
                {i + 1}
              </div>
              <span
                className={cn(
                  "ml-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                  step === s ? "text-brand-primary" : "text-[#8d8070]"
                )}
              >
                {s === "cart" ? "Cart" : "Details"}
              </span>
              {i === 0 && (
                <div className={cn("mx-2 h-px w-8", step === "details" ? "bg-brand-primary" : "bg-[#ded5c6]")} />
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
                  <div className="flex h-16 w-16 items-center justify-center rounded-card bg-brand-accent">
                    <ShoppingBag className="w-7 h-7 text-brand-primary opacity-50" aria-hidden="true" />
                  </div>
                  <p className="font-heading text-3xl font-semibold text-brand-text">
                    Your cart is empty
                  </p>
                  <p className="text-sm leading-7 text-[#62584c]">
                    Add some premium fruits to get started.
                  </p>
                  <Button
                    onClick={handleClose}
                    className="mt-2 rounded-card bg-brand-primary text-white hover:bg-[#102d21]"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <ul className="divide-y divide-[#efe3ca] px-5 py-2" role="list" aria-label="Cart items">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-start gap-3 py-4">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-card bg-brand-accent">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="truncate font-heading text-xl font-semibold leading-tight text-brand-text">
                          {item.name}
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-primary">
                          {formatPrice(item.priceNum)}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center overflow-hidden rounded-card border border-[#ded5c6] bg-white">
                            <button
                              onClick={() => updateQty(item.id, item.quantity - 1)}
                              className="flex h-7 w-7 cursor-pointer items-center justify-center text-[#62584c] transition-colors hover:bg-brand-accent hover:text-brand-primary disabled:cursor-not-allowed disabled:opacity-40"
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
                              className="flex h-7 w-7 cursor-pointer items-center justify-center text-[#62584c] transition-colors hover:bg-brand-accent hover:text-brand-primary"
                              aria-label={`Increase quantity of ${item.name}`}
                            >
                              <Plus className="w-3 h-3" aria-hidden="true" />
                            </button>
                          </div>
                          <span className="flex-1 text-xs font-medium text-[#8d8070]">
                            = {formatPrice(item.priceNum * item.quantity)}
                          </span>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-card text-[#c5b9aa] transition-colors hover:bg-red-50 hover:text-red-500"
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
              <p className="rounded-card border border-[#ded5c6] bg-white p-4 text-sm leading-7 text-[#62584c]">
                We&apos;ll open WhatsApp with your order pre-filled. Just hit send!
              </p>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-name" className="text-xs font-bold uppercase tracking-[0.14em] text-[#62584c]">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <Input
                  id="cart-name"
                  placeholder="e.g. Ahmed Ali"
                  value={details.name}
                  onChange={(e) => setDetails({ ...details, name: e.target.value })}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "cart-name-error" : undefined}
                  className={cn("h-10 rounded-card border-[#ded5c6] bg-white text-sm", errors.name && "border-red-300")}
                />
                {errors.name && (
                  <p id="cart-name-error" className="text-xs text-red-500" role="alert">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-phone" className="text-xs font-bold uppercase tracking-[0.14em] text-[#62584c]">
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
                  className={cn("h-10 rounded-card border-[#ded5c6] bg-white text-sm", errors.phone && "border-red-300")}
                />
                {errors.phone && (
                  <p id="cart-phone-error" className="text-xs text-red-500" role="alert">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-address" className="text-xs font-bold uppercase tracking-[0.14em] text-[#62584c]">
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
                    "w-full resize-none rounded-card border border-[#ded5c6] bg-white px-3 py-2.5 text-sm transition-colors focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/30",
                    errors.address && "border-red-300"
                  )}
                />
                {errors.address && (
                  <p id="cart-address-error" className="text-xs text-red-500" role="alert">{errors.address}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="cart-notes" className="text-xs font-bold uppercase tracking-[0.14em] text-[#62584c]">
                  Order Notes <span className="font-medium normal-case tracking-normal text-[#8d8070]">(optional)</span>
                </label>
                <Input
                  id="cart-notes"
                  placeholder="e.g. Call before delivery"
                  value={details.notes}
                  onChange={(e) => setDetails({ ...details, notes: e.target.value })}
                  className="h-10 rounded-card border-[#ded5c6] bg-white text-sm"
                />
              </div>
            </form>
          )}
        </div>

        {/* Footer — always visible */}
        {items.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-[#ded5c6] bg-white px-5 py-4">
            {/* Order summary */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-[#62584c]">
                {totalItems} item{totalItems !== 1 ? "s" : ""}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#8d8070]">Total</span>
                <span className="ml-2 text-lg font-bold text-brand-primary">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>

            {step === "cart" ? (
              <Button
                onClick={() => setStep("details")}
                className="h-11 w-full rounded-card bg-brand-primary text-sm font-semibold text-white hover:bg-[#102d21]"
              >
                Proceed to Confirm
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button
                onClick={handleConfirm}
                className="h-11 w-full rounded-card bg-[#25D366] text-sm font-semibold text-white hover:bg-[#1da851]"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                Confirm Order via WhatsApp
              </Button>
            )}

            <p className="text-center text-xs leading-5 text-[#8d8070]">
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
