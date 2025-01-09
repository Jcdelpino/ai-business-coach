import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=2070&auto=format&fit=crop"
          alt="Humanoid AI Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for better text contrast */}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Tu Coach de Negocios con IA para el Éxito Empresarial
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Transforma tu idea de negocio en un plan sólido. Obtén orientación experta en planificación empresarial,
            estrategia de marketing y ejecución - todo impulsado por IA avanzada.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Comienza tu Viaje <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};