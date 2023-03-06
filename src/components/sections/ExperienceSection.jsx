import { getExperience } from "@/lib/api";

export const ExperienceSection = () => {
  const experience = getExperience();
  return (
    <div id="experience-section">
      {experience.map((item) => (
        <div key={item.title}>
          <h2>{item.count}</h2>
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
};
