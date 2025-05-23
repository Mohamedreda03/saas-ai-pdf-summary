import HeroSection from "@/components/home/hero-section";
import DemoSection from "@/components/home/demo-section";
import BGGradient from "@/components/common/bg-gradient";
import HowItWorksSection from "@/components/home/how-it-works-section";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <BGGradient />
      <HeroSection />
      <DemoSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}
