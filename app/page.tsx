import HeroSection from "@/components/hero-section";
import ProductShowcaseSection from "@/components/product-showcase-section";
import FeaturesSection from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroSection />
      <FeaturesSection />
      <ProductShowcaseSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
