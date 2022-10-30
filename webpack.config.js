const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractLoader = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    //Bundle Path And File Name
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },
  plugins: [
    new MiniCssExtractLoader(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          //Transpiler
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractLoader.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
