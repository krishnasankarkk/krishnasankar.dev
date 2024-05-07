/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'light': 'rgba(255, 255, 255, 0.795)',
      'dark': 'rgb(15, 23, 42)',
    },
  },
  plugins: [],
}

