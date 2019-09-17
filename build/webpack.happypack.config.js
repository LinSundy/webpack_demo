const Happypack = require('happypack');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        use: 'Happypack/loader?id=js'
      }
    ]
  },
  plugins: [
    new Happypack({
      id: 'js',
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "eslint-loader",
          options: {
            // eslint options (if necessary)
            fix: true
          }
        }
      ]
    }),
  ]
}