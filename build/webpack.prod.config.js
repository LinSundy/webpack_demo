const commonConfig = require("./webpack.common.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require("path");

let prodConfig = {
    mode: "production",
    externals: {
        // 'vue': 'Vue' 一定要注意value暴露的是什么才能正确引用到
        // "element-ui": "ELEMENT"
    },
    output: {
        filename: "js/[name].[hash].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "./"
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
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
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]-[hash:base64:5]"
                            }
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: loader => [
                                require("autoprefixer") // 添加前缀
                            ]
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            noIeCompat: true
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
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ["css\/*", "fonts\/*", "images\/*", "*.html", "js\/*"]
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css", // 设置最终输出的文件名
            chunkFilename: "css/[id].[contenthash].css"
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCSSAssetsPlugin({}) // 压缩css
        ]
    }
};

module.exports = merge(commonConfig, prodConfig);
