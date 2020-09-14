const path = require('path');

module.exports = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./lib/client'),
      path.resolve('./node_modules')
    ]
  },
  entry: ["babel-polyfill", "./lib/client/index.js"],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "react",
              "env",
              "stage-2"
            ]
          }
        }
      }
    ]
  }
};