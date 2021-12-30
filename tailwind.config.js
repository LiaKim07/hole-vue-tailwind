module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'color-primary': '#DED3C2',
      'color-secondary': '#D6C9B8',
      'color-dark': '#272727',
    },
    fontFamily: {
      sans: ['Sarabun', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'sa-h1': ['1.5rem', { lineHeight: '1', fontWeight: '500'}],
        'sa-h2': ['1.5rem', { lineHeight: '1', fontWeight: '500', textTransform: 'uppercase'}],
        'sa-body': ['1rem', { lineHeight: '1', fontWeight: '600'}],
      },
    },
  },
  plugins: [],
}
