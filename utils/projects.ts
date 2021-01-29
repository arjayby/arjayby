import { ProjectType } from "../types/project";

export const projects: ProjectType[] = [
  {
    id: "stacked",
    title: "StackED",
    description: "A learning management system for StackTrek.",
    role: "Full stack development",
    screenshots: ["/images/stacked.jpg"],
    technologies: [
      { id: "react", title: "React" },
      { id: "phoenix", title: "Phoenix Framework" },
    ],
    year: 2020,
    siteUrl: "https://stacktrek.com/education",
  },
  {
    id: "findisport",
    title: "FindiSport",
    description:
      "A coach pairing platform that connects students to the right coach or individual sport expert in any kind of sport, including Ball Games, Water Sports, Fitness Training, Yoga, Dance, Boxing, Martial Arts and Other Sports. Findi Sport helps user to discover more sport activities, learn new sports and improve user athletic performance.",
    role: "Frontend development",
    screenshots: ["/images/findisport.jpg"],
    technologies: [
      { id: "react-native", title: "React" },
      { id: "firebase", title: "Firebase" },
    ],
    year: 2019,
    siteUrl: "https://findisport.com",
  },
  {
    id: "roots",
    title: "Roots",
    description:
      "An online mortgage matching platform built to enable efficient and effective mortgage application online, all-in-one solution for both banks & homebuyers to reinvent the mortgage landscape in Hong Kong.",
    role: "Full stack development",
    screenshots: ["/images/roots.jpg"],
    technologies: [
      { id: "react", title: "React" },
      { id: "nodejs", title: "Node.js" },
    ],
    year: 2018,
    siteUrl: "https://hkroots.io",
  },
];
