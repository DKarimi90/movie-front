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
          '0%': { transform: 'translateY(-10vh)', opacity: 0 },
          '10%': { transform: 'translateY(0vh)', opacity: 1 },
          '100%': { transform: 'translateY(0vh)', opacity: 1 },
        }, 
        righty: {
          '0%' : {transform: 'translateX(150%)', opacity: 0}, 
          '10%' : {transform: 'translateX(0%)', opacity: 1}, 
          '100%' : {transform: 'translateX(0%)', opacity: 1}, 
        },  
        lefty: {
          '0%' : {transform: 'translateX(-150%)', opacity: 0}, 
          '10%' : {transform: 'translateX(0%)', opacity: 1}, 
          '100%' : {transform: 'translateX(0%)', opacity: 1}, 
        },     
      },
      animation: { form: 'form 1s', nav: 'nav 3s', sub: 'sub 3s', bottom: 'bottom 1s', right: 'right 1s', test: 'test 12s infinite linear', righty: 'righty 12s infinite', lefty: 'lefty 12s infinite'}
    },
  },
  plugins: [],
}

