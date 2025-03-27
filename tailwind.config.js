/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-success-50' : '#ECFDF3'
      },
      borderRadius: {
        '14px': '14px',
      }
    },
  },
  plugins: [],
}
