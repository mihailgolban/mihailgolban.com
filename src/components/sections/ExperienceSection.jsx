import { getExperience } from "@/lib/api";

export const ExperienceSection = () => {
  const experience = getExperience();
  return (
    <div id="experience-section" className="min-h-[300px] flex flex-col justify-center items-center pt-24 pb-28">
      <div className="grid grid-cols-3 mx-auto gap-40">
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
