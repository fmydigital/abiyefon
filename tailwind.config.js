/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center: true,
    },
    extend: {
      fontFamily:{
          open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'abiye-gray': '#393d47',
        'abiye-light-gray': '#767c89',
        'abiye-brown': '#c09a6e',
        'abiye-yellow': '#eda600',
      },
      screens: {
				sm: "768px",
				md: "992px",
				lg: "1144px",
				xl: "1440px",
			},
    },
  },
  plugins: [],
}

