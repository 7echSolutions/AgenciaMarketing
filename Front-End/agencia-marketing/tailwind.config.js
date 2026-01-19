/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: 'class', // Activamos modo oscuro manual si hiciera falta
  theme: {
    extend: {
      colors: {
        "primary": "#d9af30",
        "primary-dark": "#b08d26",
        "background-light": "#f8f7f6",
        "background-dark": "#050505",
        "surface-dark": "#1A1A1A",
      },
      fontFamily: {
        "display": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
      },
      boxShadow: {
        'glow': '0 0 40px -10px rgba(217, 175, 48, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}