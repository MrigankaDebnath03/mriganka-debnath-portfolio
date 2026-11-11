export type SkillGroup = {
  label: string;
  icon: string;
  color: "green" | "yellow" | "coral" | "indigo";
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Backend & APIs",
    icon: "01",
    color: "green",
    items: ["Spring Boot", "Java", "Node.js", "Django", "Express", "Next.js API Routes", "REST APIs", "Socket Programming"],
  },
  {
    label: "Cloud & Delivery",
    icon: "02",
    color: "yellow",
    items: ["AWS Lambda", "Amazon RDS", "Docker", "CI/CD", "Git", "Bitbucket", "Linux / Bash", "Jira"],
  },
  {
    label: "Data & Storage",
    icon: "03",
    color: "coral",
    items: ["OracleSQL 18c", "PostgreSQL", "MySQL", "MongoDB", "Redis", "SQL"],
  },
  {
    label: "Frontend & Maps",
    icon: "04",
    color: "indigo",
    items: ["React", "Angular Microfrontends", "Next.js", "TypeScript", "Tailwind CSS", "WebGL", "GeoJSON", "Tippecanoe"],
  },
  {
    label: "Systems & Networking",
    icon: "05",
    color: "yellow",
    items: ["C++", "Embedded C", "Multithreading", "Concurrency", "RTOS Concepts", "TCP / UDP", "WebSockets", "HAL"],
  },
  {
    label: "Applied AI & Vision",
    icon: "06",
    color: "coral",
    items: ["MCP", "Hugging Face", "SAM", "Grounding DINO", "Gaussian Splatting", "GANs", "Ollama"],
  },
];
