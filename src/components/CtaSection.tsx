import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <div className="bg-secondary">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Start Your Business Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join thousands of entrepreneurs who have successfully launched their businesses with our AI
            coach.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Get Started Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};