import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "base-blue": "#2B4E72",
        "second-color": "#ECE7E5",
        "border-color": "#4E4D4A",
        "link-color": "#94BA65",
        "second-background": "#D6E4EF",
        "font-color": "#2F3D4C",
        "ligt-font-color": "#1F2832",
        "second-color-logo": "#0C86C4",
      },
    },
  },
  plugins: [],
};
export default config;
