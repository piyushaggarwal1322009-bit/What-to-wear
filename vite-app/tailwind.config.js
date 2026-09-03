/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-base': '#F3F6FB',
        'dusk-ink': '#2B3A67',
        'periwinkle': '#5B7FDE',
        'sunrise-amber': '#FFB84C',
        'overcast-teal': '#4A9B8E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Fraunces', 'serif'],
      }
    },
  },
  plugins: [],
}
