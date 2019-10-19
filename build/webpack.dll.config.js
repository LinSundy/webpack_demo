const path = require("path") 
const webpack = require("webpack")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
  entry: [ "vue" ],
  mode: "production",
  output: {
    filename: "_dll_[name].js",
    path: path.resolve(__dirname, "../dist/dll"),
    library: "_dll_[name]",
    // libraryTarget: 'var'// 默认是var 模式 umd commonjs
  },
  plugins: [
    new webpack.DllPlugin({
      name: "_dll_[name]",
      path: path.resolve(__dirname, "../dist/dll", "manifest.json")
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  }
}
