/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      width: {
        '5': '20px',
        '50': '200px',
      },
      height: {
        '50': '200px',
      },
    },
  },
  plugins: [],
}
