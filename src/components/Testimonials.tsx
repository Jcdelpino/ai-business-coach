const testimonials = [
  {
    content: "Este coach de IA me ayudó a transformar mi idea vaga en un plan de negocio concreto en días.",
    author: "Sara Jiménez",
    role: "Fundadora, TechStart",
  },
  {
    content: "Las estrategias de marketing proporcionadas fueron increíblemente detalladas y realmente funcionaron.",
    author: "Miguel Chen",
    role: "CEO, GrowthLabs",
  },
  {
    content: "Tener este coach de IA fue como tener un empresario experimentado guiándome en cada paso del camino.",
    author: "Emma Díaz",
    role: "Fundadora, EcoSolutions",
  },
];

export const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 text-primary">Testimonios</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl">
            Confiado por Emprendedores
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl bg-muted p-8 transition-transform hover:-translate-y-1"
              >
                <figure className="h-full flex flex-col justify-between">
                  <blockquote className="text-lg leading-8 text-secondary">
                    <p>"{testimonial.content}"</p>
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-x-4">
                    <div>
                      <div className="font-semibold text-secondary">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};