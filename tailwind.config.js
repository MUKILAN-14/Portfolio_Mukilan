/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { boxShadow: {
        'fancy': '0 5px 25px rgba(0, 0, 0, 0.7)',
      },},
  },
  plugins: [],
}

