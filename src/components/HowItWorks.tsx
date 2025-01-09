import { Check } from "lucide-react";

const steps = [
  {
    id: "01",
    name: "Comparte tu Visión",
    description: "Cuéntanos sobre tu idea de negocio y objetivos.",
  },
  {
    id: "02",
    name: "Obtén tu Plan",
    description: "Recibe una estrategia de negocio y marketing personalizada.",
  },
  {
    id: "03",
    name: "Ejecuta y Triunfa",
    description: "Sigue la guía paso a paso para lanzar tu negocio.",
  },
];

export const HowItWorks = () => {
  return (
    <div className="bg-muted py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Cómo funciona</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Tres Simples Pasos al Éxito
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-start">
                <div className="rounded-full bg-primary/10 p-2 ring-1 ring-primary/20">
                  <Check className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <dt className="mt-4 font-semibold text-secondary">
                  <span className="text-primary mr-2">{step.id}</span>
                  {step.name}
                </dt>
                <dd className="mt-2 leading-7 text-muted-foreground">{step.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};