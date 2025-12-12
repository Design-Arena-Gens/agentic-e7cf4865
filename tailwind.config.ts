import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: "#04040a"
        },
        neon: {
          blue: "#47c8ff",
          purple: "#a259ff",
          cyan: "#5af0ff"
        }
      },
      backgroundImage: {
        "glow-grid":
          "radial-gradient(circle at 20% 20%, rgba(164, 196, 255, 0.18), transparent 40%), radial-gradient(circle at 80% 0%, rgba(82, 255, 211, 0.2), transparent 45%), radial-gradient(circle at 50% 80%, rgba(238, 126, 255, 0.18), transparent 45%)"
      },
      dropShadow: {
        glow: "0 0 40px rgba(135, 206, 255, 0.35)"
      },
      fontFamily: {
        sans: ["var(--font-syne)", "Inter", "sans-serif"],
        display: ["var(--font-syne)", "Inter", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "ui-monospace"]
      }
    }
  },
  plugins: []
};

export default config;
