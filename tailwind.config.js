/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',

      'laptop': '1024px',

      'desktop': '1280px',
    },
    extend: {
      colors: {
        'dark-pastel-blue':'#8399E8',
        'escuro-dark-pastel-blue':'#4D73FD',
        'vermelho-claro':'#FF5A5A',
        'vermelho-escuro':'#FF3232',
        'azul-fundo' : '#e3f0ff',
        'fundo-card' : '#d5e4f5',
      },
    },
  },
  plugins: [],
}