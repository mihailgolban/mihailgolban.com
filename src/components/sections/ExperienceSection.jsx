import { getExperience } from "@/lib/api";

export const ExperienceSection = () => {
  const experience = getExperience();
  return (
    <div id="experience-section" className="min-h-[300px] py-20">
      <div className="flex max-w-7xl mx-auto gap-40 justify-center">
        {experience.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-4">
            <h2 className="text-5xl font-semibold text-primary">{item.count}+</h2>
            <h3 className="uppercase font-medium text-secondary">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
