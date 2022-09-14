/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary':'#FFCE4E',
        'ground':'#1C121F',
        'blure':'#4F464E',
        'purpled':'#8613A5',
        'card':'#3D2942',
        'section':'#76607A',
        'cards':'#3D2942',
      },
      fontFamily: {
        'body':['cursive' ],
        'Second' : ['Poppins']
      }
    },
  },
  plugins: [],
}
