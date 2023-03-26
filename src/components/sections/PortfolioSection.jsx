import { getProjects } from "../../lib/api";

export function Project({ project }) {
  return (
    <div className="flex flex-col rounded-3xl shadow-3xl overflow-hidden">
      <img src={project.image} alt={project.title} />
      <div className="flex flex-col gap-2 px-14 py-9">
        <h3 className="text-xl font-medium">{project.title}</h3>
        <p className="text-gray-500">{project.description}</p>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const projects = getProjects();
  return (
    <section id="portfolio-section" className="min-h-[1500px]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 items-center">
        <div className="flex flex-col gap-4">
          <h4 className="text-primary uppercase font-medium">Portfolio</h4>
          <h1 className="text-5xl font-semibold">Recent works</h1>
        </div>
        <div>
          <p className="leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit
            velit, at dictum nisl.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(2,583px)] gap-10 mt-16 justify-center">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
