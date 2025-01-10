import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface Consultation {
  id: string;
  question: string;
  answer: string;
  created_at: string;
}

export const ConsultationInterface = () => {
  const [question, setQuestion] = useState("");
  const queryClient = useQueryClient();

  // Fetch previous consultations
  const { data: consultations, isLoading } = useQuery({
    queryKey: ["consultations"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("consultations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data as Consultation[];
    },
  });

  // Create new consultation
  const createConsultation = useMutation({
    mutationFn: async (question: string) => {
      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) throw userError;

      const { data, error } = await supabase
        .from("consultations")
        .insert([
          {
            question,
            answer: "Procesando tu consulta...",
            user_id: userData.user.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["consultations"] });
      setQuestion("");
      toast.success("Consulta enviada correctamente");
    },
    onError: (error) => {
      console.error("Error creating consultation:", error);
      toast.error("Error al enviar la consulta");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) {
      toast.error("Por favor ingresa una pregunta");
      return;
    }
    createConsultation.mutate(question);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="question">Tu Consulta</Label>
          <Textarea
            id="question"
            placeholder="¿Qué te gustaría consultar sobre tu negocio?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="min-h-[100px]"
          />
        </div>
        <Button 
          type="submit" 
          disabled={createConsultation.isPending}
          className="w-full"
        >
          {createConsultation.isPending ? "Enviando..." : "Enviar Consulta"}
        </Button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Consultas Anteriores</h2>
        {isLoading ? (
          <p className="text-muted-foreground">Cargando consultas...</p>
        ) : consultations && consultations.length > 0 ? (
          <ScrollArea className="h-[400px] rounded-md border p-4">
            <div className="space-y-4">
              {consultations.map((consultation) => (
                <Alert key={consultation.id} className="animate-fadeIn">
                  <AlertDescription>
                    <div className="space-y-2">
                      <p className="font-medium">Pregunta:</p>
                      <p className="text-muted-foreground">{consultation.question}</p>
                      <p className="font-medium mt-2">Respuesta:</p>
                      <p className="text-muted-foreground">{consultation.answer}</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        {new Date(consultation.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </div>
          </ScrollArea>
        ) : (
          <p className="text-muted-foreground">No hay consultas previas</p>
        )}
      </div>
    </div>
  );
};