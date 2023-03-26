import { ReactComponent as BackendIcon } from "@/assets/svc-backend-min.svg";
import { ReactComponent as FrontendIcon } from "@/assets/svc-frontend-min.svg";
import { ReactComponent as SupportIcon } from "@/assets/svc-support-min.svg";

export function getExperience() {
  return [
    {
      title: "Projects",
      count: 10,
    },
    {
      title: "Happy clients",
      count: 100,
    },
    {
      title: "years of experience",
      count: 10,
    },
  ];
}

export function getServices() {
  return [
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.",
      icon: <FrontendIcon />,
    },
    {
      title: "Mobile Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.",
      icon: <BackendIcon />,
    },
    {
      title: "UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus. Praesent at hendrerit velit, at dictum nisl.",
      icon: <SupportIcon />,
    },
  ];
}

export function getProjects() {
  return [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus.",
      image: "https://picsum.photos/400/300",
      date: "2021-01-01",
    },
    {
      title: "Project 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus.",
      image: "https://picsum.photos/400/300",
      date: "2021-01-01",
    },
    {
      title: "Project 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus.",
      image: "https://picsum.photos/400/300",
      date: "2021-01-01",
    },
    {
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae blandit lectus.",
      image: "https://picsum.photos/400/300",
      date: "2021-01-01",
    },
  ];
}
