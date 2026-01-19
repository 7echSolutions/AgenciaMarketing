/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Accent */
        "primary": "#3BC9DB",
        "primary-dark": "#1098AD",
        "primary-soft": "#66D9E8",

        /* Backgrounds */
        "background-dark": "#0B1F33",
        "background-mid": "#102A43",
        "background-light": "#E7F5FF",

        /* Surfaces */
        "surface-dark": "#123A5A",
        "surface-hover": "#164B73",
      },
      fontFamily: {
        display: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 45px -10px rgba(59, 201, 219, 0.35)",
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
