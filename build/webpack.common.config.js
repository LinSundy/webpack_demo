const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const Happypack = require("happypack");

module.exports = {
    entry: "./src/index.js",
    module: {
        noParse: /lodash/,
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "url-loader", // 根据图片大小，把图片优化成base64
                        options: {
                            limit: 10000,
                            name() {
                                if (process.env.NODE_ENV === "development") {
                                    return "[path][name].[ext]";
                                }
                                return "[hash].[ext]";
                            },
                            outputPath: "images"
                        }
                    },
                    {
                        loader: "image-webpack-loader", // 先进行图片优化
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: "65-90",
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
                    loader: "file-loader",
                    options: {
                        outputPath: "fonts"
                    }
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                include: path.resolve(__dirname, "../src"),
                use: "Happypack/loader?id=js"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".css"], // 可忽略此后缀的文件后缀
        alias: {
            "@": path.resolve(__dirname, "../src")
        }
    },
    plugins: [
        new Happypack({
            id: "js",
            use: [
                {
                    loader: "babel-loader"
                },
                {
                    loader: "eslint-loader",
                    options: {
                        // eslint options (if necessary)
                        // fix: true
                    }
                }
            ]
        }),
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, "../dist/dll", "manifest.json")
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: "main.html", // 默认值： 'index.html'
            template: path.resolve(__dirname, "../src/index.html"),
            title: "Webpack", // 默认值：Webpack App
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new webpack.ProvidePlugin({
            _: "lodash"
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        return `npm.${packageName.replace("@", "")}`;
                    },
                }
            }
        }
    }
};
