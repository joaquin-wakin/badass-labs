const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: [path.join(__dirname, 'index.html'), path.join(__dirname, 'src/**/*.js')],
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
        'active-product': 'radial-gradient(75.5% 75.5% at 50% 50%, #404040 0%, #000 100%)',
        'star-solid': "svg-load('star-solid.svg')",
        'check-icon': "svg-load('check-icon.svg')",
        'arrow-icon': "svg-load('arrow-right-icon.svg')",
        'shopping-cart-white': "svg-load('shopping-cart-white.svg')",
        'shopping-cart': "svg-load('shopping-cart-icon.svg')",
        'about-us': "url('/images/about-bg-image.jpg')",
        'product-overview': 'radial-gradient(75.5% 75.5% at 26.79% 55.09%, #404040 0%, #000 100%)',
        footer: "url('/images/footer-bg-image.png'), linear-gradient(0deg, #000, #000)",
      },
      boxShadow: {
        'gallery-arrow': '0 0 8px rgba(165, 165, 165, 0.5)',
        'buy-now': '0 0 8px rgba(165, 165, 165, 0.5)',
        'pricing-card': '0 0 12px rgba(115, 115, 115, 0.5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.underline-offset': {
          textUnderlineOffset: '0.25em',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
