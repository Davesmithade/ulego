/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {

      boxShadow: {
        'lg': '0px 8px 12px rgba(10, 83, 90, 0.2);',
      },
      fontfamily: {
          'poppins': 'font-family: "Poppins", sans-serif;',
      },
      colors: {
        'primary': '#0A535A;',
        'secondary': '#222222;',
      },

      borderbottom: {
        'regal-blue': '#243c5a',
      },
      backgroundImage: {
        'hero-pattern': "url('../../assets/Ulegohero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
