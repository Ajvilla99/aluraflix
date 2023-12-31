/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#2A7AE4',
      'white': '#fefefe',
      'front':'#6BD1FF',
      'bg-primary':'#030a1a',
      'warning':'#E53935',
    },
    fontFamily: {
      'roboto': ["Roboto", "sans-serif"]
    },
    backgroundImage: {
      'img-section': "url(/src/assets/img/bg-section.png)",
    },
    plugins: [],
  }
}

