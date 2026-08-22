/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Rubik', 'sans-serif'],
        display: ['Londrina Solid', 'cursive'],
      },
      colors: {
        'retro-green': '#00C868',
        'retro-orange': '#F55B23',
        'retro-yellow': '#FFD500',
        'retro-pink': '#FF7AA2',
        'retro-blue': '#2D82FF',
        'retro-black': '#111111',
        'retro-cream': '#F4F0E6',
      },
      boxShadow: {
        'retro': '4px 4px 0px 0px rgba(17, 17, 17, 1)',
        'retro-lg': '8px 8px 0px 0px rgba(17, 17, 17, 1)',
        'retro-xl': '12px 12px 0px 0px rgba(17, 17, 17, 1)',
      }
    },
  },
  plugins: [],
}
