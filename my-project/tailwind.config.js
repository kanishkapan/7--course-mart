/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Scans HTML file for Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx}", // Scans all files in the src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["michroma", "sans-serif"], // Use "michroma" font
      },
      colors: {
        indigo: {
          500: "#6366F1", // Custom Indigo shade
        },
        purple: {
          500: "#8B5CF6", // Custom Purple shade
        },
      },
      height: {
        96: "24rem", // Extends height for longer cards
      },
      animation: {
        pulse: "pulse 2s infinite", // Smooth pulsating animation
        zoomIn: "zoomIn 0.8s ease-in-out", // Smooth zoom-in animation
        bounceSlow: "bounceSlow 3s infinite", // Slow bounce animation
        fadeIn: "fadeIn 1s ease-in", // Fade-in effect
      },
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      boxShadow: {
        card: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06)", // Regular shadow for cards
        cardHover:
          "0 10px 15px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.1)", // Stronger shadow on hover
      },
      transitionProperty: {
        spacing: "margin, padding", // Smooth spacing transitions
        opacity: "opacity", // Smooth opacity transitions
      },
    },
  },
  plugins: [],
};
