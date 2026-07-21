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
        "fixed left-4 right-4 top-4 z-50 transition-all duration-300",
        scrolled
          ? "border border-[#ded5c6] bg-white/90 shadow-soft backdrop-blur-md"
          : "border border-white/50 bg-white/75 backdrop-blur-md"
      )}
      role="banner"
    >
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2" aria-label="Bagh-e-Khas home">
          <Image
            src="/bagh-e-khas-logo.svg"
            alt="Bagh-e-Khas"
            width={1080}
            height={1080}
            className="h-20 w-20 object-contain"
            priority
          />

        </Link>

        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-sm font-semibold text-[#4f453b] transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-brand-secondary after:transition-all after:duration-300 hover:text-brand-primary hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center">
          <CartButton count={totalItems} onClick={openCart} />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <CartButton count={totalItems} onClick={openCart} />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger>
              <span
                role="button"
                aria-label="Open menu"
                className="inline-flex cursor-pointer items-center justify-center rounded-card p-2 text-[#4f453b] transition-colors hover:bg-brand-accent hover:text-brand-primary"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] border-[#ded5c6] bg-[#fbfaf6] pt-12"
              aria-label="Mobile navigation"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/bagh-e-khas-logo.svg"
                      alt="Bagh-e-Khas"
                      width={1080}
                      height={1080}
                      className="h-24 w-24 object-contain m-auto"
                    />
                  </div>
                </div>

                <nav aria-label="Mobile navigation links">
                  <ul className="flex flex-col gap-1" role="list">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-card px-4 py-3 text-base font-semibold text-[#4f453b] transition-colors duration-200 hover:bg-brand-accent hover:text-brand-primary"
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
      className="relative cursor-pointer rounded-card p-2 text-[#4f453b] transition-colors duration-200 hover:bg-brand-accent hover:text-brand-primary"
      aria-label={`Shopping cart, ${count} item${count !== 1 ? "s" : ""}`}
    >
      <ShoppingBag className="w-5 h-5" aria-hidden="true" />
      {count > 0 && (
        <span
          className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-card bg-brand-primary text-[10px] font-bold leading-none text-white"
          aria-hidden="true"
        >
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
