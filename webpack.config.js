const path = require('path')
const uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill','./dist/lib/index.js'],
  output: {
    path: path.resolve('public'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new uglify({
      test: /\.js($|\?)/i
    })
  ],
  mode: 'production'

}