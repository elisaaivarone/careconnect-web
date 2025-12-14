import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0570B1",
          light: "#48CAE4",
          dark: "#023E8A",
        },
        secondary: "#90E0EF",
        accent: "#D1DCE2",
        background: "#F0F4F8",
      },
    },
  },
  plugins: [],
};
export default config;