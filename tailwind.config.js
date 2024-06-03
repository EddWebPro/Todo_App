/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-background': "url('src/assets/pexels-matt-g-623574593-18045900.jpg')"
      }
    },
  },
  plugins: [],
}

