"use client";

import { useState, useEffect } from "react";
import { Search, Heart, ShoppingBag, User, Menu, Leaf } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <a
          href="#home"
          className="flex items-center gap-2 group"
          aria-label="Bagh-e-Khas home"
        >
          <span className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0">
            <Leaf className="w-4 h-4 text-white" aria-hidden="true" />
          </span>
          <span
            className="text-xl font-bold text-brand-primary"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Bagh-e-Khas
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-primary transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Action Icons */}
        <div className="hidden lg:flex items-center gap-1">
          <button
            className="p-2 rounded-full text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200"
            aria-label="Search"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-full text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200 relative"
            aria-label="Wishlist"
          >
            <Heart className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-full text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200 relative"
            aria-label="Shopping cart, 0 items"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
          <button
            className="p-2 rounded-full text-gray-600 hover:text-brand-primary hover:bg-gray-50 transition-colors duration-200"
            aria-label="Account"
          >
            <User className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            className="p-2 rounded-full text-gray-600 hover:text-brand-primary"
            aria-label="Shopping cart"
          >
            <ShoppingBag className="w-5 h-5" />
          </button>
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
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-brand-primary flex items-center justify-center">
                      <Leaf className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                    </span>
                    <span
                      className="text-lg font-bold text-brand-primary"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      Bagh-e-Khas
                    </span>
                  </div>
                </div>

                <nav aria-label="Mobile navigation links">
                  <ul className="flex flex-col gap-1" role="list">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-brand-primary hover:bg-brand-accent rounded-xl transition-colors duration-200"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex gap-4 px-4">
                    <button
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                      aria-label="Search"
                    >
                      <Search className="w-4 h-4" />
                      Search
                    </button>
                    <button
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                      aria-label="Wishlist"
                    >
                      <Heart className="w-4 h-4" />
                      Wishlist
                    </button>
                    <button
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-primary transition-colors"
                      aria-label="Account"
                    >
                      <User className="w-4 h-4" />
                      Account
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
