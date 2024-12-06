/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    colors:{
      'primary-1': '#f7078f',
      'primary-2': '#fb459b',
      'primary-3': '#ff64a7',
      'dark-1': '#000717',
      'dark-2': '#1d212c',
      'dark-3': '#353842',
      'white': 'rgb(255 255 255)',
      'slate-300': 'rgb(203 213 225)',
      'slate-400': 'rgb(148 163 184)',
      'violet-500': 'rgb(139 92 246)',
      'red': 'rgb(220 38 38)',
      'blue-500': 'rgb(59 130 246)'
    },
    fontFamily:{
      'system': ['system-ui']
    },
    extend: {
      spacing: {
        '200': '200px',
        '250': '250px',
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1100': '1100px'
      }
    },
  },
  plugins: [],
}
