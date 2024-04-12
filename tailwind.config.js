/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'planta': '#9bcc50',
        'veneno': '#b97fc9',
        'fuego': '#fd7d24',
        'agua': '#4592c4',
        'bicho': '#729f3f',
        'hada': '#fdb9e9',
        'fantasma':'#7b62a3',
        'normal':'#a4acaf',
        'acero':'#9eb7b8',
        'siniestro':'#707070',
        'electrico':'#eed535',
        'lucha':'#d56723',
        'hielo':'#51c4e7',
        'roca':'#a38c21'
      },
      height:{
        '421':'421px',
        '276':'276px',
        '820':'820'
      },
      width:{
        '421':'421px',
        '1024':'1024px'
      }
    },
  },
  plugins: [],
}