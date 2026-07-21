import type { Metadata } from "next";
import { Cormorant, Montserrat } from "next/font/google";
import Script from "next/script";
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
import { GA_MEASUREMENT_ID, META_PIXEL_ID } from "@/lib/analytics";

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
