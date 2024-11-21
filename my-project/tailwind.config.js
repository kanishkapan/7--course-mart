/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Scans these files for Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["michroma", "sans-serif"], // Ensures the use of "Inter" font
      },
      colors: {
        indigo: {
          500: "#6366F1", // Adds custom Indigo shade
        },
        purple: {
          500: "#8B5CF6", // Adds custom Purple shade
        },
      },
      height: {
        96: "24rem", // Extends height for longer cards
      },
      animation: {
        pulse: "pulse 2s infinite", // Pulse animation for hover effects
        zoomIn: "zoomIn 0.8s ease-in-out", // Smooth zoom-in animation
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)", // Custom shadow for cards
        cardHover: "0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)", // Stronger hover shadow
      },
      transitionProperty: {
        spacing: "margin, padding", // Enables smooth spacing animations
      },
    },
  },
  plugins: [],
};
