/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Adjust to match font family
      },
      colors: {
        indigo: {
          500: "#6366F1",
        },
        purple: {
          500: "#8B5CF6",
        },
      },
    },
  },
  plugins: [],
};
