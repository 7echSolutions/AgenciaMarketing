/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* --- PALETA PRINCIPAL (Bordó / Vino Tinto) --- */
        primary: "#800020", // Bordó clásico (Reemplaza al cian)
        "primary-dark": "#4a0012", // Bordó oscuro (para bordes o fondos profundos)
        "primary-soft": "#a31538", // Bordó brillante (para hovers y detalles)

        /* --- TERCER COLOR (Plata / Silver) --- */
        accent: "#94a3b8", // Gris plata azulado (Para textos secundarios y detalles finos)

        /* --- FONDOS (Negro Profundo) --- */
        "background-dark": "#050505", // Negro puro (Fondo principal)
        "background-mid": "#0a0a0a", // Negro apenas grisáceo
        "background-light": "#e2e8f0", // Gris muy claro (por si necesitas fondo blanco en algún lado)

        /* --- SUPERFICIES (Tarjetas / Cards) --- */
        "surface-dark": "#121212", // Gris oscuro elegante (Cards)
        "surface-hover": "#1a1a1a", // Hover de las cards
      },
      fontFamily: {
        display: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        // Glow actualizado a color Bordó (Rojo vino)
        glow: "0 0 45px -10px rgba(128, 0, 32, 0.4)",
      },
      animation: {
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        shimmer: "shimmer 2.5s infinite", // Agrego shimmer para el botón de compra
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
