/* This is webpack config file. Here we can define which file will be or entry point and which one will be our output, aswell as importing modules to parser or js, jsx files and styles sheets.
The file name is using a hash everytime our app is build for security. */

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require('dotenv-webpack');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },

  

  devtool: "source-map",

  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.(css)$/,
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  performance: { hints: false },

  resolve: {
    extensions: [".js", ".json", ".jsx"],
  },
  plugins: [
    new Dotenv({ safe: true, systemvars: true, allowEmptyValues: true}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/root.html",
    }),
  ],
};
