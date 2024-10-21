import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        "custom" : "var(--border)",
      },
      borderRadius: {
        "custom" : "var(--radius)",
      },
      colors: {
        background: "var(--background)",
        text: "var(--color)",
      },
    },
  },
  plugins: [],
};
export default config;
