import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/shared/CartDrawer";
import LocatorProvider from "@/components/shared/LocatorProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bagh-e-Khas | Pakistan's Finest Luxury Fruits & Gift Baskets",
  description:
    "Premium seasonal fruits, hand-selected and beautifully packed for gifting and everyday living. Same-day delivery in Lahore. Corporate gifting specialists.",
  keywords: [
    "luxury fruits Lahore",
    "premium fruit basket Pakistan",
    "gift basket Lahore",
    "corporate gifting Pakistan",
    "fresh fruits delivery Lahore",
    "Bagh-e-Khas",
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Bagh-e-Khas | Pakistan's Finest Luxury Fruits",
    description:
      "Premium seasonal fruits, hand-selected and beautifully packed for gifting and everyday living.",
    type: "website",
    locale: "en_PK",
    siteName: "Bagh-e-Khas",
    images: [{ url: "/logo.png", width: 1200, height: 400, alt: "Bagh-e-Khas Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagh-e-Khas | Pakistan's Finest Luxury Fruits",
    description:
      "Premium seasonal fruits, hand-selected and beautifully packed for gifting and everyday living.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  name: "Bagh-e-Khas",
                  description:
                    "Premium seasonal fruits, hand-selected and beautifully packed for gifting and everyday living.",
                  url: "https://bagh-e-khas.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lahore",
                    addressCountry: "PK",
                  },
                  areaServed: "Lahore, Pakistan",
                  priceRange: "PKR 2,500 - PKR 25,000",
                },
                {
                  "@type": "WebSite",
                  name: "Bagh-e-Khas",
                  url: "https://bagh-e-khas.com",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <LocatorProvider />
        </CartProvider>
      </body>
    </html>
  );
}
