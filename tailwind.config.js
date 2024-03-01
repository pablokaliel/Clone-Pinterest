/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black' : '#000',
      'white' : '#fff',
      'header-bg':'#FAE3E3',
      'button-bg':'#E60023',
      'title-color':'#DA2F2F',
      'border-color':'#F07474',
      'icons-color':'#989898',
    }
  },
  plugins: [],
}

