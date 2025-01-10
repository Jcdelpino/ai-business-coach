import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CtaSection } from "@/components/CtaSection";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen">
      <div className="p-4 bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-secondary">Mi Coach de Negocios</h1>
          <Button variant="outline" onClick={handleSignOut}>
            Cerrar Sesión
          </Button>
        </div>
      </div>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default Dashboard;