import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1280px" } },
    extend: {
      colors: {
        base: {
          50:  "#fbf4eb", // fundo principal
          900: "#3f3018"  // texto primário
        },
        neutralA: "#a79b8f",
        neutralB: "#8c8474",
        neutralC: "#897c74"
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"]
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
export default config;
