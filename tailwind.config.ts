import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#17211f",
        slate: "#46524d",
        mint: "#0f766e",
        saffron: "#b7791f",
        clay: "#9a3412",
        sky: "#2563eb",
        paper: "#f7f5ef",
        line: "#d8d2c4",
      },
      boxShadow: {
        panel: "0 14px 35px rgba(23, 33, 31, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
