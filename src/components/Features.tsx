import { Brain, Target, ChartBar, Rocket } from "lucide-react";

const features = [
  {
    name: "Planificación de Negocios",
    description: "Obtén planes de negocio detallados adaptados a tu industria y objetivos.",
    icon: Brain,
  },
  {
    name: "Estrategia de Marketing",
    description: "Desarrolla planes de marketing completos que lleguen a tu público objetivo.",
    icon: Target,
  },
  {
    name: "Proyecciones Financieras",
    description: "Genera pronósticos financieros y planes de presupuesto realistas.",
    icon: ChartBar,
  },
  {
    name: "Estrategia de Lanzamiento",
    description: "Crea planes de lanzamiento paso a paso para llevar tu producto al mercado.",
    icon: Rocket,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Todo lo que necesitas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            De la Idea al Negocio Exitoso
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Obtén todas las herramientas y guía que necesitas para transformar tu idea de negocio en realidad.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-start">
                <div className="rounded-lg bg-accent p-2 ring-1 ring-accent/10">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-secondary">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};