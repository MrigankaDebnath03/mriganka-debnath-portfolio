import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fdfbf7",
        ink: "#171717",
        terminal: "#22c55e",
        indigo: "#4f46e5",
        signal: "#facc15",
        coral: "#fb7185",
      },
      boxShadow: {
        neo: "4px 4px 0 0 #171717",
        "neo-sm": "3px 3px 0 0 #171717",
      },
    },
  },
  plugins: [],
};

export default config;
