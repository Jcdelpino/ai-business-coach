import { Brain, Target, ChartBar, Rocket } from "lucide-react";

const features = [
  {
    name: "Business Planning",
    description: "Get detailed business plans tailored to your industry and goals.",
    icon: Brain,
  },
  {
    name: "Marketing Strategy",
    description: "Develop comprehensive marketing plans that reach your target audience.",
    icon: Target,
  },
  {
    name: "Financial Projections",
    description: "Generate realistic financial forecasts and budgeting plans.",
    icon: ChartBar,
  },
  {
    name: "Launch Strategy",
    description: "Create step-by-step launch plans to bring your product to market.",
    icon: Rocket,
  },
];

export const Features = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            From Idea to Successful Business
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Get all the tools and guidance you need to transform your business idea into reality.
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