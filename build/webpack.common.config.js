const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const Happypack = require('happypack')
const fs = require('fs')

const EntryPointsPath = path.resolve(__dirname, '../src/pages')
const dirs = fs.readdirSync(EntryPointsPath)
const entry = {}
const htmlWebpackPlugins = []

dirs.forEach(dir => {
  entry[dir] = path.join(__dirname, '..', 'src', 'pages', dir, 'index.js')
  const htmlWebpackPluginItem = new HtmlWebpackPlugin({
    filename: `${dir}.html`, // 默认值： 'index.html'
    template: path.resolve(__dirname, '../src/index.html'),
    title: '五好导学-欢迎您的使用!', // 默认值：Webpack App
    chunks: ['manifest', dir, 'vendor', 'common'],
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      removeAttributeQuotes: true // 移除属性的引号
    }
  })

  if (process.env.NODE_ENV === 'production') {
    htmlWebpackPluginItem.options.mode = 'production'
  }
  htmlWebpackPlugins.push(htmlWebpackPluginItem)
})

module.exports = {
  entry,
  module: {
    noParse: /lodash/,
    rules: [
      {
        test: /\.vue$/,
        use: [
          {loader: "vue-loader"},
          {loader: "eslint-loader", options: {fix: false}}
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader', // 根据图片大小，把图片优化成base64
            options: {
              limit: 10000,
              name () {
                if (process.env.NODE_ENV === 'development') {
                  return '[path][name].[ext]'
                }
                return '[hash].[ext]'
              },
              outputPath: 'images'
            }
          },
          {
            loader: 'image-webpack-loader', // 先进行图片优化
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'fonts'
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        use: 'Happypack/loader?id=js'
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.json', '.css', ".ts", "tsx"], // 可忽略此后缀的文件后缀
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new Happypack({
      id: 'js',
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'eslint-loader',
          options: {
            // eslint options (if necessary)
            fix: false,
            formatter: require('eslint-friendly-formatter')
          }
        }
      ]
    }),
    // 解析vue使用到的插件
    new VueLoaderPlugin(),
    ...htmlWebpackPlugins
    // new webpack.ProvidePlugin({
    //     _: "lodash"
    // }),
  ],
  optimization: {
    splitChunks: {
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        // 打包node_modules中的文件
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minChunks: 2,
          priority: 10
        },
        // 打包业务中的公共代码
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 1,
          minChunks: 2,
          priority: 0
        }
      }
    },
    runtimeChunk: {
      name: 'manifest'
    }
  }
}
