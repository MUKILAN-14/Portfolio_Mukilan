/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { 
      boxShadow: {
        'fancy': '0 5px 25px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
      'rotate-once': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      'rotate-once': 'rotate-once 1.5s ease-in-out forwards',
    },
    },
  },
  plugins: [],
}

