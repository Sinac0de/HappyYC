import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#fff8f3",
          100: "#ffece6",
          200: "#ffd1c9",
          300: "#ffac9c",
          400: "#ff846b",
          500: "#ff5a3d",
          600: "#e04832",
          700: "#b43628",
          800: "#8a2a1f",
          900: "#621e17",
          DEFAULT: "#ff5a3d",
        },
        secondary: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          DEFAULT: "#06b6d4",
        },
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#3b82f6",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          DEFAULT: "#737373",
        },
        black: {
          100: "#333333",
          200: "#141413",
          300: "#7D8087",
          DEFAULT: "#000000",
        },
        white: {
          100: "#F7F7F7",
          DEFAULT: "#FFFFFF",
        },
        border: "hsl(var(--border))",
      },
      fontFamily: {
        "work-sans": ["var(--font-work-sans)"],
      },
      boxShadow: {
        // Light Mode
        100: "2px 2px 0px 0px rgba(0, 0, 0)",
        200: "2px 2px 0px 2px rgba(0, 0, 0)",
        300: "2px 2px 0px 2px #ff5a3d", // primary main
        400: "2px 2px 0px 2px #06b6d4", // secondary main

        // Dark Mode
        "100-dark": "2px 2px 0px 0px rgba(255, 255, 255, 0.28)",
        "200-dark": "2px 2px 0px 2px rgba(148, 163, 184, 0.45)", // gray/neutral accent
        "300-dark": "2px 2px 0px 2px rgba(255, 90, 61, 0.55)", // primary-glow
        "400-dark": "2px 2px 0px 2px rgba(6, 182, 212, 0.55)", // secondary-glow
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
