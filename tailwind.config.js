module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'main-blue': 'rgba(22, 29, 111, .85)',
        'main-text': 'rgba(22, 29, 111, .95)',
        'main-blur': 'rgba(22, 29, 111)',
        'main-gray': '#FCFCFC',
      },
      screens: {
        xms: '0px',
        xlms: '500px',
        xmd: '950px',
      },
    },
  },
  plugins: [],
}
