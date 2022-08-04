const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type {import('webpack').Configuration} */
const developmentConfig = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "../dist")
    },
    port: 3000,
    hot: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
};

module.exports = merge(common, developmentConfig);