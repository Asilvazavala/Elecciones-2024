/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        Blue: "#1e378a",
        DarkBlue: "#111827",
        MediumBlue: "#1d49d8",
        LightBlue: "#3b67f6",
        gray: "#475160",
      },
    },
  },
  plugins: [],
};
