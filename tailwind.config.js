/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", 'sans-serif']
      }
    },
    container:{
      center: true,
      padding:{
        DEFAULT: '20px',
      }
    }
  },
  plugins: [],
}