/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'minmax-250-1fr': 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    },
  },
  plugins: [],
}

