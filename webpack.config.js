const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const context = path.resolve(__dirname, '')
module.exports = {
    context,
    module: {
        rules: [
            {
                test: /\.js|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        browsers: [
                                            'last 2 versions',
                                        ],
                                    },
                                    modules: false,
                                },
                            ],
                            '@babel/preset-react', // https://goo.gl/4aEFV3
                        ],
                        plugins: [
                            [
                                'react-css-modules',
                                {
                                    context,
                                    generateScopedName: '[name]__[local]___[hash:base64:5]',
                                },
                            ],
                            '@babel/plugin-proposal-class-properties', // https://goo.gl/TE6TyG
                        ],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                include: context,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hot: true,
                        },

                    },
                    {
                        loader: 'css-loader', //generating unique classname
                        options: {
                            importLoaders: 1, // if specifying more loaders
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]', //babel-plugin-css-module format
                            },
                            sourceMap: false,
                        },
                    }],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            }
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
            orderWarning: true,
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.SourceMapDevToolPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        publicPath: '/',
    },
}
