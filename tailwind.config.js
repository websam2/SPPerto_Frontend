/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue-dark': '#0D5A94',
      'blue': '#3C99D3',
      'red-dark': '#852519',
      'red': '#EE2C36',
      'yellow': '#F79620',
      'text': '#FEFCFF',
      'text2': '#252423',
      'bg': '#f1f1f1',
      'button': '#243E63',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      width: {
        '1/20': '5%',
        '1/10': '10%',
        '1/5': '20%',
      },
      brightness: {
        '120': '1.2',
      },
      height: {
        '1/5': '20%',
      },
      boxShadow: {
        'custom': '-2px -2px 25px #000, 2px 2px 25px #fff',
      },
    },
  },
  variants: {
    extend: {
      visibility: ['hover'],
      opacity: ['hover'],
    },
  },
  plugins: [],
}

