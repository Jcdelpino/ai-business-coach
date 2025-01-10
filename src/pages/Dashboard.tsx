import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { ConsultationInterface } from "@/components/ConsultationInterface";
import { useQuery } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const Dashboard = () => {
  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const { data: subscriptionStatus, isLoading } = useQuery({
    queryKey: ["subscription"],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const response = await fetch(
        "https://xazocpvqdeuqodetyzcg.supabase.co/functions/v1/check-subscription",
        {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        }
      );
      const data = await response.json();
      return data;
    },
  });

  const startSubscription = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      const response = await fetch(
        "https://xazocpvqdeuqodetyzcg.supabase.co/functions/v1/create-checkout",
        {
          headers: {
            Authorization: `Bearer ${session?.access_token}`,
          },
        }
      );
      const { url, error } = await response.json();
      if (error) throw new Error(error);
      if (url) window.location.href = url;
    } catch (error) {
      toast.error("Error creating checkout session");
      console.error("Error:", error);
    }
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
        {isLoading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : !subscriptionStatus?.subscribed ? (
          <div className="text-center space-y-4">
            <Alert>
              <AlertDescription>
                Para acceder a las consultas, necesitas suscribirte primero.
              </AlertDescription>
            </Alert>
            <Button onClick={startSubscription}>
              Suscribirse Ahora
            </Button>
          </div>
        ) : (
          <ConsultationInterface />
        )}
      </main>
    </div>
  );
};

export default Dashboard;