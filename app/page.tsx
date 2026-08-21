import HeroSection from "@/components/hero-section";
import ProductShowcaseSection from "@/components/product-showcase-section";
import FeaturesSection from "@/components/features-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroSection />
      <ProductShowcaseSection />
      <FeaturesSection />
    </div>
  );
}
