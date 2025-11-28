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
          DEFAULT: "#0077B6",
          light: "#48CAE4",
          dark: "#023E8A",
        },
        secondary: "#90E0EF",
        accent: "#CAF0F8",
      },
    },
  },
  plugins: [],
};
export default config;