module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm': '340px',
      // => @media (min-width: 340px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'color-primary': '#DED3C2',
      'color-secondary': '#D6C9B8',
      'color-dark': '#272727',
      'transparent': 'transparent',
      'black': '#22292f',
      'white': '#ffffff',
      'grey': '#b8c2cc',
      'grey-light': '#dae1e7',
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
      padding: {
        '3/4': '75%'
      },
      width: {
        'iframe-video-width': '40%',
      },
      height: {
        'iframe-video-height': '45%',
      },
    },
  },
  plugins: [],
}
