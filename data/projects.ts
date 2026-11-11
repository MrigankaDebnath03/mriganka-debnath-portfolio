export type ProjectCategory = "Systems & Backend" | "AI & DevTools" | "Geospatial & Web";

export type Project = {
  title: string;
  file: string;
  category: ProjectCategory;
  stack: string[];
  summary: string;
  challenge: string;
  details: string[];
  accent: "green" | "yellow" | "coral" | "indigo";
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "DEVSMITH",
    file: "devsmith.extension.ts",
    category: "AI & DevTools",
    stack: ["TypeScript", "VS Code API", "AST Parsing", "LLM APIs"],
    summary: "An AI-powered VS Code extension for contextual developer workflows.",
    challenge: "Make workspace context useful to language models while keeping coding assistance close to the editor.",
    details: [
      "Context-aware inline completions, automated test generation, and diagnostics.",
      "AST-based parsing across multi-file workspaces to provide scoped code context.",
      "Terminal stack-trace analysis with suggested patch workflows.",
    ],
    accent: "indigo",
    githubUrl: "https://github.com/MrigankaDebnath03/DEVSMITH",
  },
  {
    title: "Agentic Coding Environment & MCP Platform",
    file: "mcp-workbench.config.ts",
    category: "AI & DevTools",
    stack: ["TypeScript", "Next.js", "WebSockets", "MCP", "Ollama"],
    summary: "A browser-based coding environment for collaborative editing and agent workflows.",
    challenge: "Connect real-time collaboration, structured agent tools, and local model inference in one workspace.",
    details: [
      "Supports multi-user editing through WebSockets.",
      "Integrates MCP tools for file, terminal, and Git workflows.",
      "Benchmarks local small language models through Ollama on consumer NVIDIA GPUs.",
    ],
    accent: "coral",
  },
  {
    title: "People's Water Data",
    file: "water-data.map.tsx",
    category: "Geospatial & Web",
    stack: ["React", "AWS Lambda", "Amazon RDS", "Tippecanoe", "GeoJSON", "WebGL"],
    summary: "A community-driven geospatial platform for water quality data across India.",
    challenge: "Present dense geographic datasets in an interactive web map while keeping tile payloads practical.",
    details: [
      "Serverless ingestion using AWS Lambda with relational storage on Amazon RDS.",
      "React map interface for community submissions and exploration.",
      "Evaluated Tippecanoe vector tiles to support large geographic datasets.",
    ],
    accent: "green",
    demoUrl: "https://peopleswaterdata.org",
    githubUrl: "https://github.com/MrigankaDebnath03/PWD-IIT-Internship",
  },
  {
    title: "TinyUNO",
    file: "tinyuno.kernel.cpp",
    category: "Systems & Backend",
    stack: ["C++", "Embedded C", "AVR / ARM", "HAL"],
    summary: "A lightweight multitasking kernel for resource-constrained microcontrollers.",
    challenge: "Coordinate concurrent tasks and hardware access within tight memory and scheduling limits.",
    details: [
      "Cooperative and preemptive scheduling concepts with task control blocks.",
      "Priority queues and software mutexes for task coordination.",
      "Low-overhead hardware abstraction for timer, serial, and ADC interfaces.",
    ],
    accent: "yellow",
    githubUrl: "https://github.com/MrigankaDebnath03/TinyUNO",
  },
  {
    title: "Railway Collision Avoidance System",
    file: "railway-tcas.server.py",
    category: "Systems & Backend",
    stack: ["Python", "Flask", "TCP / UDP", "WebSockets", "A*"],
    summary: "A simulated train telemetry and collision avoidance system.",
    challenge: "Use live position and velocity data to model headways, route conflicts, and braking responses.",
    details: [
      "Streams train telemetry to controller instances over socket connections.",
      "Models dynamic braking curves and emergency overrides.",
      "Uses A* search across changing rail graph topologies.",
    ],
    accent: "indigo",
    githubUrl: "https://github.com/MrigankaDebnath03/Railway-Collision-Avoidance-System-using-Socket-Programming",
  },
  {
    title: "M/S Blue Print Copiers Platform",
    file: "blueprint-portal.page.tsx",
    category: "Geospatial & Web",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Razorpay", "Canvas API"],
    summary: "A digital B2B platform for large-format print production and map orders.",
    challenge: "Make high-resolution CAD and cadastral map documents practical to inspect and order online.",
    details: [
      "Client-side canvas rendering for zooming into detailed documents.",
      "Order tracking and billing workflows for print production.",
      "Payment and cloud document storage integrations.",
    ],
    accent: "coral",
    demoUrl: "https://printqueuepro.mrigankadebnath03.workers.dev/",
    githubUrl: "https://github.com/MrigankaDebnath03/PrintQueuePro-BY-MS-BLUE-PRINT-COPIERS",
  },
  {
    title: "8-Bit Retro Canvas Game Engine",
    file: "retro-engine.canvas.js",
    category: "Systems & Backend",
    stack: ["JavaScript", "HTML Canvas", "Web Audio API"],
    summary: "A custom 2D side-scrolling game engine built around browser APIs.",
    challenge: "Coordinate game physics, collisions, animation, and audio in a stable frame loop.",
    details: [
      "Custom physics loop and axis-aligned bounding-box collision handling.",
      "Sprite-sheet animation state machines and synthesized audio.",
      "Uses requestAnimationFrame and spatial indexing for rendering efficiency.",
    ],
    accent: "yellow",
  },
];
