import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import FeaturedCollections from "@/components/sections/FeaturedCollections";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import BestSellers from "@/components/sections/BestSellers";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CorporateGifting from "@/components/sections/CorporateGifting";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Newsletter from "@/components/sections/Newsletter";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Premium Fruits, Mango Boxes & Fruit Gift Baskets in Lahore",
  description:
    "Shop Bagh-e-Khas premium fruits, White Chonsa mango boxes, fruit gift baskets, family fruit boxes, office plans, and corporate hampers in Lahore.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Premium Fruits, Mango Boxes & Fruit Gift Baskets in Lahore",
    description:
      "Hand-selected seasonal fruits, White Chonsa mango boxes, fruit gift baskets, family boxes, and corporate hampers delivered in Lahore.",
    url: "/",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 1200, alt: "Bagh-e-Khas Logo" }],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BestSellers />
      <FeaturedCollections />
      <TrustSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CorporateGifting />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
