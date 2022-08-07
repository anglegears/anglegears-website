/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'illustration': "url('/bg/bg_illustration.png')",
        'header': "url('/assets/header.png')"
      }
    },
  },
  plugins: [],
}
