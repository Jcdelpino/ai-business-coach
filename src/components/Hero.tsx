import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fadeIn">
          <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
            Your AI Business Coach for Startup Success
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your business idea into a solid plan. Get expert guidance on business planning,
            marketing strategy, and execution - all powered by advanced AI.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};