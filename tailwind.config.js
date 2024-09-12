// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to avoid conflicts
  },
  prefix: 'tw-',
  content: [
    './index.html',
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
}
