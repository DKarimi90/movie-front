/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      keyframes: {
        form: {
          '0%' : {left: '-100%'}, 
          '100%' : {left: '0'}, 
        }
      },
      animation: { form: 'form 1s'}
    },
  },
  plugins: [],
}

