const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [path.join(__dirname, 'index.html'), path.join(__dirname, 'src/**/*.js')],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: '#b9db01',
        neutral: '#8d8d8d',
        'light-gray': '#d7d7d7',
      },
      fontFamily: {
        sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
        'ardela-edge': ['ArdelaEdgeX02', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'star-solid': "svg-load('star-solid.svg')",
        'about-us': "url('/images/about-bg-image.jpg')",
        footer: "url('/images/footer-bg-image.png'), linear-gradient(0deg, #000, #000)",
        'arrow-icon': "svg-load('arrow-right-icon.svg')",
      },
      boxShadow: {
        'buy-now': '0 0 8px rgba(165, 165, 165, 0.5)',
        'pricing-card': '0 0 12px rgba(115, 115, 115, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
