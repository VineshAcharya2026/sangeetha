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
        maroon: {
          DEFAULT: "#7a1f2b",
          deep: "#4a1018",
          rich: "#5c1620",
          mid: "#8e2836",
          soft: "#a63d4a",
        },
        gold: {
          DEFAULT: "#c9a227",
          light: "#e8c46a",
          pale: "#f3e3a8",
          dark: "#9a7a1a",
        },
        cream: {
          DEFAULT: "#fffdf0",
          warm: "#f7edd6",
          deep: "#efe2c4",
          page: "#fffdf0",
        },
        tan: {
          DEFAULT: "#c69c6d",
          light: "#d4b088",
          dark: "#a67c52",
        },
        charcoal: {
          DEFAULT: "#2c2118",
          muted: "#5a4a3a",
          soft: "#7a6a58",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "var(--font-tiro)", "Georgia", "serif"],
        body: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        diya: "0 0 40px 8px rgba(232, 196, 106, 0.35)",
        "diya-lg": "0 0 80px 20px rgba(232, 196, 106, 0.28)",
        gold: "0 8px 32px -8px rgba(201, 162, 39, 0.45)",
        "gold-glow": "0 0 0 1px rgba(201, 162, 39, 0.5), 0 12px 40px -10px rgba(201, 162, 39, 0.55)",
        temple: "0 20px 50px -20px rgba(74, 16, 24, 0.45)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(ellipse at center, rgba(232, 196, 106, 0.35) 0%, rgba(122, 31, 43, 0.15) 45%, transparent 70%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(232, 196, 106, 0.28) 0%, rgba(122, 31, 43, 0.55) 50%, #4a1018 100%)",
        "maroon-veil":
          "linear-gradient(180deg, #4a1018 0%, #7a1f2b 50%, #4a1018 100%)",
      },
      keyframes: {
        "float-soft": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)", opacity: "0.55" },
          "50%": { transform: "translateY(-18px) rotate(8deg)", opacity: "1" },
        },
        "drift-note": {
          "0%": { transform: "translateY(20px) translateX(0) rotate(-8deg)", opacity: "0" },
          "15%": { opacity: "0.7" },
          "85%": { opacity: "0.5" },
          "100%": { transform: "translateY(-140px) translateX(24px) rotate(12deg)", opacity: "0" },
        },
        sparkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.7)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        "shimmer-line": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-soft": "float-soft 6s ease-in-out infinite",
        "drift-note": "drift-note 14s ease-in-out infinite",
        sparkle: "sparkle 3.2s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4.5s ease-in-out infinite",
        "shimmer-line": "shimmer-line 4s linear infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
