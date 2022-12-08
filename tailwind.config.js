/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,js}",
    "./_layouts/**/*.{html,js}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'carbon-fiber': "url('/assets/images/bg-carbon-fiber.svg')"
      },
      backgroundSize: {
        'carbon-fiber-size': '12px 11px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
