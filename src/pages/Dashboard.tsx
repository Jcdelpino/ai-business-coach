import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ConsultationInterface } from "@/components/ConsultationInterface";

const Dashboard = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="p-4 bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-secondary">Mi Coach de Negocios</h1>
          <Button variant="outline" onClick={handleSignOut}>
            Cerrar Sesión
          </Button>
        </div>
      </div>
      <main className="max-w-7xl mx-auto py-8 px-4">
        <ConsultationInterface />
      </main>
    </div>
  );
};

export default Dashboard;