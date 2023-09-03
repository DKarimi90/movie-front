/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*{js, jsx, ts, tsx}'],
  theme: {
    extend: {
      keyframes: {
        form: {
          '0%' : {left: '-100%'}, 
          '100%' : {left: '0'}, 
        },
        right: {
          '0%' : {right: '-100%'}, 
          '100%' : {right: '0'}, 
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
        test: {
          '0%': { transform: 'translateY(-20vh)', opacity: 0, color: 'white' },
          '10%': { transform: 'translateY(0vh)', opacity: 1, color: 'gray'},
          '35%': { transform: 'translateY(0vh)', opacity: 1, color: 'var(--primary)'},
          '70%': { transform: 'translateY(0vh)', opacity: 1, color: 'red'},
          '90%': { transform: 'translateY(0vh)', opacity: 1, color: 'tomato' },
          '100%': { transform: 'translateY(0vh)', opacity: 0, color: 'tomato' }
        },    
      },
      animation: { form: 'form 1s', nav: 'nav 3s', sub: 'sub 3s', bottom: 'bottom 1s', right: 'right 1s', test: 'test 15s infinite linear', righty: 'righty 12s infinite', lefty: 'lefty 12s infinite'}
    },
  },
  plugins: [],
}

