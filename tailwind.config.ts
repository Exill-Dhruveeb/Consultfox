import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#5B16B8", royal: "#6F20D4", violet: "#7B2FE2", bright: "#8A3FE8",
        lavender: "#D9DBEA", mist: "#F4F4F9", line: "#C7C9D0", muted: "#8D8F95", ink: "#17161B",
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { card: "8px", control: "6px" },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
export default config;
