import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { ConsultationInterface } from "@/components/ConsultationInterface";
import { ElevenLabsWidget } from "@/components/ElevenLabsWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ConsultationInterface />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
      <ElevenLabsWidget />
    </div>
  );
};

export default Index;