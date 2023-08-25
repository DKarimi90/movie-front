/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      keyframes: {
        form: {
          '0%' : {left: '-100%'}, 
          '100%' : {left: '0'}, 
        },
        nav: {
          '0%': { transform: 'translateY(0vh)' },
          '50%': { transform: 'translateY(-50vh)' },
          '100%': { transform: 'translateY(0vh)' },
        },
        sub: {
          '0%': { transform: 'translateY(0vh)' },
          '50%': { transform: 'translateY(-150vh)' },
          '100%': { transform: 'translateY(-0vh)' },
        },
        bottom: {
          '0%': { transform: 'translateY(100vh)' },
          '100%': { transform: 'translateY(0vh)' },
        },
      },
      animation: { form: 'form 1s', nav: 'nav 3s', sub: 'sub 3s', bottom: 'bottom 1s'}
    },
  },
  plugins: [],
}

