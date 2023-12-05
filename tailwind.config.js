/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '360px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {


      colors: {
        primary: {
          50: '#FA7D8A',
          100: '#E95867',
          200: '#E7283C',
          300: '#E2081E',
          400: '#C21527',
          500: '#8C131F',
          600: '#671B23',
          700: '#4A1D22'
        },
        secondary: {
          50: '#F8F5F3',
          100: '#DAD6D3',
          200: '#C8C2BE',
          300: '#B5B0AD',
          400: '#9B928D',
          500: '#867D77',
          600: '#68605B',
          700: '#413C38'
        },
        neutral: {
          100:'#FBFBFB',
          200:'#EEEEEE',
          300:'#D3D3D3',
          400:'#929292',
          500:'#777777',
          600:'#5F5F5F',
          700:'#494949',
          800: '#292727'

        },
        text: {
          black: '#333333',
          white: '#FEFEFE'
        },

        success: {
          100: '#8EFFA7',
          200: '#5DDD79',
          300: '#25BF47',
          400: '#009721'

        },

         warning: {
          100: '#FFEF98',
          200: '#FFE55B',
          300: '#FFD910',
          400: '#EBC500'

        },
         danger: {
          100: '#FF958E',
          200: '#FF574D',
          300: '#FF271A',
          400: '#CC0C00'

        },

        background:{
          100: '#FFFEFE',
          200: '#FCFCFC',
          300: '#222222'
        }

      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
