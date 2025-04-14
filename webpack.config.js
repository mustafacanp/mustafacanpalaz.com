const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("node:path");
const context = path.resolve(__dirname, "");

module.exports = {
	context,
	entry: "./src/js/index.js",
	module: {
		rules: [
			{
				test: /\.js$|.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: "> 0.25%, not dead",
									modules: false,
								},
							],
							"@babel/preset-react",
						],
						plugins: [
							[
								"react-css-modules",
								{
									context,
									generateScopedName: "[name]__[local]___[hash:base64:5]",
								},
							],
							"@babel/plugin-proposal-class-properties",
						],
					},
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
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
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:5]",
							},
							sourceMap: false,
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader",
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
			chunkFilename: "[id].[contenthash].css",
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html",
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.SourceMapDevToolPlugin(),
	],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[contenthash].js",
		publicPath: "/",
	},
};
