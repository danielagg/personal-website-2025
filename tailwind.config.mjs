/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "#09090b",
      foreground: "#cbd5e1",
      primary: "#10b981",
      accent: "#64748b",
    },
    extend: {},
  },
  plugins: [],
};
