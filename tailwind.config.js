/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '100': '40rem',
        '110': '46rem',
        '128': '56rem',
      }
    },
  },
  plugins: [],
}
