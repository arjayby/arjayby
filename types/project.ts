export type ProjectType = {
  id: string;
  title: string;
  description: string;
  role: string;
  screenshots: string[];
  technologies: {
    id: string;
    title: string;
  }[];
  year: number;
  siteUrl: string;
};
