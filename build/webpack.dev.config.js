const commonConfig = require("./webpack.common.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");

let devConfig = {
    mode: "development",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "../dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        hot: true,
        compress: true,
        clientLogLevel: "warning",
        host: "0.0.0.0",
        open: false,
        openPage: "main.html",
        progress: true,
        overlay: {  // 出现错误或者警告的时候，是否覆盖页面线上错误消息。
            warnings: true,
            errors: true
        },
        watchOptions: { // 监视文件相关的控制选项
            // poll: true,   // webpack 使用文件系统(file system)获取文件改动的通知。在某些情况下，不会正常工作。例如，当使用 Network File System (NFS) 时。Vagrant 也有很多问题。在这些情况下，请使用轮询. poll: true。当然 poll也可以设置成毫秒数，比如：  poll: 1000
            ignored: /node_modules/, // 忽略监控的文件夹，正则
            // aggregateTimeout: 300 // 默认值，当第一个文件更改，会在重新构建前增加延迟
        }
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, "../node_module"),
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: {
                                localIdentName: "[name]__[local]-[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            sourceMap: true,
                            plugins: loader => [
                                require("autoprefixer") // 添加前缀
                            ]
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            noIeCompat: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "style-resources-loader",
                        options: {
                            patterns: [
                                path.resolve(__dirname, "../src/assert/less/base.less")
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, "../src"), path.resolve(__dirname, "../theme")],
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css", // 设置最终输出的文件名
            chunkFilename: "[id].css"
        })
    ]
};

module.exports = merge(commonConfig, devConfig);
