/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C0A062', // Elegant gold
        secondary: '#F8F4E6', // Soft cream/floral
        dark: '#2C2A29', // Typography dark
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      }
    },
  },
  plugins: [],
}
