// const purgecss = require('@fullhuman/postcss-purgecss')({
//     content: [
//       './**/*.html',
//       './src/**/*.js',
//     ],
//     defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
//   });
  
//   module.exports = {
//     plugins: [
//       require('tailwindcss'),
//       require('autoprefixer'),
//       purgecss,
//     ],
//   }
  

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
