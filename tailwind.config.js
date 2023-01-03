/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{index.html, script.js}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/main.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },

  plugins: [],
};
