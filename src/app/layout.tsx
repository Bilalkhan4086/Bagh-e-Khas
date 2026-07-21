import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/shared/CartDrawer";
import LocatorProvider from "@/components/shared/LocatorProvider";
import {
  BRAND_NAME,
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
  SITE_URL,
} from "@/lib/seo";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: BRAND_NAME,
  title: {
    default: "Bagh-e-Khas | Premium Fruits & Fruit Gift Baskets in Lahore",
    template: "%s | Bagh-e-Khas",
  },
  description:
    "Order premium seasonal fruits, White Chonsa mango boxes, fruit gift baskets, family fruit boxes, and corporate hampers from Bagh-e-Khas in Lahore.",
  keywords: [
    "luxury fruits Lahore",
    "premium fruits Lahore",
    "White Chonsa mango Lahore",
    "premium fruit basket Pakistan",
    "gift basket Lahore",
    "corporate gifting Pakistan",
    "fresh fruits delivery Lahore",
    "Bagh-e-Khas",
  ],
  icons: {
    icon: DEFAULT_OG_IMAGE,
    shortcut: DEFAULT_OG_IMAGE,
    apple: DEFAULT_OG_IMAGE,
  },
  authors: [{ name: BRAND_NAME, url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: BRAND_NAME,
  category: "ecommerce",
  classification: "Premium fruit delivery and fruit gifting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Bagh-e-Khas | Premium Fruits & Fruit Gift Baskets in Lahore",
    description:
      "Premium seasonal fruits, White Chonsa mango boxes, elegant fruit gift baskets, family boxes, and corporate hampers delivered in Lahore.",
    url: SITE_URL,
    type: "website",
    locale: "en_PK",
    siteName: BRAND_NAME,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 1200, alt: "Bagh-e-Khas Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagh-e-Khas | Premium Fruits & Fruit Gift Baskets in Lahore",
    description:
      "Premium seasonal fruits, White Chonsa mango boxes, fruit gift baskets, and corporate hampers delivered in Lahore.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
      className={`${cormorant.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
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
