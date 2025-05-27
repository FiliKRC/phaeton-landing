// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx,mdx}",
    "./src/components/**/*.{ts,tsx,js,jsx,mdx}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#818CF8",
          DEFAULT: "#6366F1",
          dark: "#4F46E5",
        },
        slate: {
          800: "#1E293B",
          900: "#0F172A",
        },
      },
    },
  },
  plugins: [],
};

export default config;