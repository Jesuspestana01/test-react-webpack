const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/root.html",
    }),
  ],
};