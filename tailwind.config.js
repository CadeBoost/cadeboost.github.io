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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: theme('colors.fuchsia.300')
            },
            h3: {
              color: theme('colors.teal.200')
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
