import { getServices } from "../../lib/api";

function Service({ service }) {
  return (
    <div className="flex flex-col items-center space-y-4 shadow-3xl p-9 rounded-3xl">
      <div className="w-20 h-20 flex items-center justify-center">{service.icon}</div>
      <h3 className="text-xl font-medium">{service.title}</h3>
      <p className="text-center">{service.description}</p>
    </div>
  );
}

export function ServicesSection() {
  const services = getServices();
  return (
    <section id="services" className="min-h-[600px]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-6 max-w-2xl mx-auto mb-16">
          <h4 className="text-primary uppercase font-medium">Services</h4>
          <h1 className="text-5xl font-semibold">What I Do For My Customer</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit
            velit, at dictum nisl.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(3,376px)] gap-10 justify-center">
          {services.map((service) => (
            <Service key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
