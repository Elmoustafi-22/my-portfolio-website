/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Custom premium deep theme colors
        darkBg: "#0f172a", // slate-900
        darkBgDeep: "#030712", // slate-950
        darkTextLight: "#94a3b8", // slate-400
        darkText: "#f1f5f9", // slate-100
        darkTextDeep: "#818cf8", // indigo-400
        primaryGlow: "rgba(99, 102, 241, 0.15)", // Indigo glow
        secondaryGlow: "rgba(6, 182, 212, 0.15)", // Cyan glow
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        hanken: ["var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
        glassDark: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
