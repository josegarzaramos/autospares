module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    boxShadow: {
      DEFAULT: '0px 2px 16px 0px rgb(220 233 255)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
