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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <FeaturedCollections />
      <WhyChooseUs />
      <BestSellers />
      <HowItWorks />
      <Testimonials />
      <CorporateGifting />
      <InstagramGallery />
      <Newsletter />
    </>
  );
}
