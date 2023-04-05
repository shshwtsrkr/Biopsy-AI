/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundColor:{
        heroBg: 'rgba(0, 0, 0, 0.61)',
        heroBg1: 'rgba(0, 0, 0, 0.51)'
      },
      fontFamily:{
        nunito: 'Nunito Sans',
        poppins: 'Poppins',
        raleway: 'Raleway',
        roboto: 'Roboto',
        nanum: 'Nanum Gothic',
        didact: 'Didact Gothic'
      },
      screens:{
        'xs': '400px',
        'sm-0': '591px',
        'sm-1': '550px',
        'md-1': '824px'
      },
      transitionDuration:{
        'first': '8000ms'
      },
      backgroundImage:{
        bgImg: 'url("./src/assets/back.png")'
      }
    },
  },
  plugins: [],
}

