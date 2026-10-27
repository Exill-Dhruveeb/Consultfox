import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand purple (primary accent)
        deep: "#4D35A8",
        royal: "#6546C7",
        violet: "#7458D3",
        bright: "#836BE0",
        // Neutral palette — warm, editorial
        canvas: "#FAF9F6",
        ink: "#20211F",
        secondary: "#666761",
        muted: "#666761",
        line: "#E5E3DD",
        // Tints
        lavender: "#F0ECFA",
        mist: "#F0ECFA",
        // Utility
        white: "#FFFFFF",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { card: "4px", control: "4px" },
      maxWidth: { content: "1160px" },
      backgroundColor: {
        page: "#FAF9F6",
      },
    },
  },
  plugins: [],
};
export default config;
