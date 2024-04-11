/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        Blue: "#1E40AF",
        DarkBlue: "#111827",
        LightBlue: "#3b67f6",
        gray: "#475160",
      },
    },
  },
  plugins: [],
};
