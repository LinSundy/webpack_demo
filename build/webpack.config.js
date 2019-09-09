const path = require('path');

module.exports = {
    entry: './src/index.js', // 想对路径是最外层
    mode: 'development',
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
              'style-loader',
              {loader: 'css-loader'},
              {
                loader: 'less-loader',
                options: {
                  noIeCompat: true
                }
              }]
          }
        ]
    }
}