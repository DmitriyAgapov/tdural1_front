/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [
    require('./theme.js')
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles

    }),
    require('@tailwindcss/container-queries'),
  ],
}