module.exports = {
  theme: {},
  variants: {},
  plugins: [],
  purge: {
    // Enable purging in production builds
    enabled: process.env.NODE_ENV === 'production',
    // Specify the locations of your application's source code
    content: [
      './src/**/*.js',
      './public/**/*.html',
    ],
  },
}
