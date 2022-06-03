module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screen: {
      "-sm": {'max': '639px'},
      "-md": {'max': '767px'},
      "-lg": {'max': '1023px'},
      "-xl": {'max': '1279px'},
      "-2xl": {'max': '1535px'},
    }
  },
  plugins: [],
}
