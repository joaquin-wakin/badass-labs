const path = require('path');

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
      },
      backgroundImage: {
        'about-us': "url('/images/about-bg-image.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
