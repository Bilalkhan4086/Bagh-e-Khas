"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-soft border-b border-gray-100"
          : "bg-white/60 backdrop-blur-sm"
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Bagh-e-Khas home">
          <Image
            src="/logo.png"
            alt="Bagh-e-Khas"
            width={160}
            height={54}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart button — desktop */}
        <div className="hidden lg:flex items-center">
          <CartButton count={totalItems} onClick={openCart} />
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <CartButton count={totalItems} onClick={openCart} />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger>
              <span
                role="button"
                aria-label="Open menu"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-primary"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-white pt-12"
              aria-label="Mobile navigation"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <Image
                    src="/logo.png"
                    alt="Bagh-e-Khas"
                    width={140}
                    height={47}
                    className="h-9 w-auto object-contain"
                  />
                </div>

                <nav aria-label="Mobile navigation links">
                  <ul className="flex flex-col gap-1" role="list">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-accent rounded-xl transition-colors duration-200"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

function CartButton({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 rounded-full text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200"
      aria-label={`Shopping cart, ${count} item${count !== 1 ? "s" : ""}`}
    >
      <ShoppingBag className="w-5 h-5" aria-hidden="true" />
      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-brand-primary text-white text-[10px] font-bold flex items-center justify-center leading-none"
          aria-hidden="true"
        >
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
