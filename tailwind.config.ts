import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        aurelia: {
          ink: "#171026",
          plum: "#58486E",
          violet: "#8B5CF6",
          canvas: "#FAF7FD",
          muted: "#7E7391",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Arial", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glass: "0 8px 32px rgba(23,16,38,.12), inset 0 1px 1px rgba(255,255,255,.55)",
      },
    },
  },
  plugins: [],
};
export default config;
