import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
            Tu Coach de Negocios con IA para el Éxito Empresarial
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transforma tu idea de negocio en un plan sólido. Obtén orientación experta en planificación empresarial,
            estrategia de marketing y ejecución - todo impulsado por IA avanzada.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <elevenlabs-convai agent-id="FqFBkkjbIAKwoZ8ZPlFe" className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2">
              Comienza tu Viaje <ArrowRight className="w-5 h-5" />
            </elevenlabs-convai>
          </div>
        </div>
      </div>
    </div>
  );
};