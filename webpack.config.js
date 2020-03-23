const webpack = require("webpack");
const path = require("path");
const HtmlwebpackPlugin = require("html-webpack-plugin");
let config = {
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:3000",
    "./src/index.js"
  ], //
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: "hello react",
      template:'./src/app/index.ejs'
    })
  ],
  module: {
    rules: [
        {
          test: /\.(less|css|sass|scss)$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            { loader: "less-loader" }
          ]
        },
    //   {
    //     test: /\.less$/,
    //     use: [
    //       { loader: "style-loader" },
    //       { loader: "css-loader" },
    //       { loader: "less-loader" }
    //     ]
    //   },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  }
};
module.exports = config;
