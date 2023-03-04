/*eslint-disable*/
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  mode: "production",
  entry: {
    index: ["./src/index.js","./src/Todo.js","./src/add.js"],
  },
  devServer: {
    static: "./dist",
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./src/index.html",
    }),
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
