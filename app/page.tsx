import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroSection />
      <FeaturesSection />
    </div>
  );
}
