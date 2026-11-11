export type ExperienceTrack = "Enterprise" | "Research" | "Community";

export type ExperienceItem = {
  organization: string;
  role: string;
  dates: string;
  location: string;
  track: ExperienceTrack;
  summary: string;
  highlights: string[];
  accent: "green" | "yellow" | "coral" | "indigo";
  certificateUrl?: string;
};

export const experience: ExperienceItem[] = [
  {
    organization: "Labcorp",
    role: "Undergrad IT Intern",
    dates: "February 2026 – August 2026",
    location: "Mumbai, Maharashtra, India",
    track: "Enterprise",
    summary: "Worked on internal enterprise tooling within a microservice and microfrontend architecture for Labcorp operations.",
    highlights: [
      "Developed Spring Boot backend services integrated with OracleSQL 18.",
      "Built modular Angular microfrontend components.",
      "Collaborated through Jira sprint planning and Bitbucket code review and CI workflows.",
    ],
    accent: "green",
    certificateUrl: "/labcorp-certificate.jpg",
  },
  {
    organization: "Jivan Health & Jivan Medical Wellbeings",
    role: "SDE Intern / Backend Developer",
    dates: "June 2024 – July 2024",
    location: "Chennai, Tamil Nadu, India",
    track: "Enterprise",
    summary: "Contributed to digital health integrations and patient-facing backend services across the Jivan organizations.",
    highlights: [
      "Implemented ABHA API V3 Milestone 1 using Next.js and TypeScript.",
      "Built backend services with Next.js, TypeScript, and Node.js.",
      "Integrated an AI-powered conversational assistant and validated APIs with Postman test suites.",
    ],
    accent: "coral",
    certificateUrl: "/jivan-certificate.jpg",
  },
  {
    organization: "Chakralaya Analytics Pvt Ltd",
    role: "Backend Developer",
    dates: "June 2024 – July 2024",
    location: "Chennai, Tamil Nadu, India",
    track: "Enterprise",
    summary: "Built a supplier selection system using multi-criteria decision-making algorithms.",
    highlights: [
      "Implemented AHP, TOPSIS, and Best Worst Method ranking approaches.",
      "Connected Django backend logic to a React interface for supplier evaluation.",
    ],
    accent: "yellow",
    certificateUrl: "/chakralaya-certificate.jpg",
  },
  {
    organization: "Indian Institute of Technology, Madras",
    role: "SDE Intern",
    dates: "May 2025 – July 2025",
    location: "Chennai, Tamil Nadu, India",
    track: "Research",
    summary: "Built People's Water Data, a community geospatial platform for water quality monitoring and environmental data sharing.",
    highlights: [
      "Architected a serverless backend with AWS Lambda and Amazon RDS.",
      "Built a React interface for submitting and exploring community water data.",
      "Evaluated raster maps and Tippecanoe-generated vector tiles for large geospatial datasets.",
    ],
    accent: "green",
    certificateUrl: "/iit-madras-certificate.jpg",
  },
  {
    organization: "Samsung R&D Institute India",
    role: "Prism Research Intern",
    dates: "September 2024 – July 2025",
    location: "Chennai / Bangalore, India",
    track: "Research",
    summary: "Researched multimodal NLP and computer-vision methods for text-directed 3D scene editing.",
    highlights: [
      "Evaluated 3D Gaussian Splatting and GANs for scene representation and manipulation.",
      "Explored Grounding DINO and Segment Anything Model (SAM) for object detection and segmentation.",
      "Built an end-to-end Hugging Face pipeline from text prompt ingestion to edited scene output.",
    ],
    accent: "indigo",
    certificateUrl: "/samsung-certificate.jpg",
  },
  {
    organization: "Bengali Society VITCC (Aikyataan)",
    role: "Operations Lead",
    dates: "June 2024 – March 2025",
    location: "Chennai, Tamil Nadu, India",
    track: "Community",
    summary: "Led planning and delivery of five literary and cultural events across campus.",
    highlights: [
      "Launched Flash Fiction Fifty, which received 150+ submissions.",
      "Coordinated Bijoya Sammiloni for 300+ attendees and Vasant Panchami for 400+ paid attendees.",
      "Organized Open Mic Night and Bong Fiesta 2.0.",
    ],
    accent: "coral",
  },
  {
    organization: "Linux Club VIT, Chennai",
    role: "Operations Associate",
    dates: "May 2023 – May 2024",
    location: "Chennai, Tamil Nadu, India",
    track: "Community",
    summary: "Supported technical competitions and the Linux Club's event infrastructure.",
    highlights: [
      "Helped plan CTF competitions and hackathons, including challenge design and technical setup.",
      "Configured file servers for event logistics and participant management.",
      "Coordinated budgets, participants, and event promotion.",
    ],
    accent: "yellow",
  },
];
