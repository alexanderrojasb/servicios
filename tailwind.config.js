/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'violet-blue': 'rgba(86, 99, 177, 1)',
        'purple-dark': 'rgba(62, 14, 77, 1)',
        'gray-search': 'rgba(217, 217, 217, 1)',
        'gray-search2': 'rgba(247, 247, 247, 1)',
        'violet-light': 'rgba(230, 227, 255, 1)',
        'violet-light2': 'rgba(154, 145, 217, 1)',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'MyFont': ['"My Font"', 'serif']
      },
      backgroundImage: {
        'fondo': "url('src/img/fondo.png')",
        'dog': "url('src/img/perrito.png')",
      },
      width: {
        '594': '594px',
        '428': '428px',
        '550': '550px',
        '222': '222px',
        '219': '219px',
        '1152': '1152px',
        '1210': '1210px',
        '563': '563px',
        '532': '532px',
        '336': '336px',
        '400': '400px',
        '365': '365px',
      },
      height: {
        '314': '314px',
        '288': '288px',
        '250': '250px'
      },
      fontSize: {
        '3-2xl' : '32px'
      },
      boxShadow: {
        'container': '0px 2px 4px 0px rgba(0, 0, 0, 0.15);',
      },
      spacing: {
        '4.4': '18px',
        'bloq1': '792px',
        '918': '918px',
        '550': '550px',
      }
    },
  },
  plugins: [],
}

