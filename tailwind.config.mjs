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
      padding: "1rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkBg: "#2a2f4c",
        darkBgDeep: "#23283e",
        darkTextLight: "#bdbddd",
        darkText: "#cdcdff",
        darkTextDeep: "#90a0d9",
      },
    },
  },
  plugins: [],
};

export default config;
