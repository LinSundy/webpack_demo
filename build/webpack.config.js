const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js', // 相对路径是最外层
  // mode: 'development',
  mode: 'production',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist') // 项目目录下的dist
  },
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        exclude: /node_modules/,
        use: [
          // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: loader => [
                require('autoprefixer') // 添加前缀
              ]
            }
          },
          {
            loader: 'less-loader',
            options: {
              noIeCompat: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css', // 设置最终输出的文件名
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
    })
  ],
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})] // 只有在生产模式下才会起作用
  }
}