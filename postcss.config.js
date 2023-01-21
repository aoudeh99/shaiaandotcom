module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-apply'),
    require('autoprefixer'),
    require('postcss-preset-env')({ stage: 0 }),
    process.env.NODE_ENV === 'production'
        ? require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.js'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
        : null
  ]
}
