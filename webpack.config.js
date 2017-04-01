const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");


module.exports = {
  entry: {
    main: [
      "./src/main.ts",
      "./src/main.scss",
    ]
  },
  output: {
    path: __dirname + "/src/build",
    publicPath: '/build/',
    filename: '[name].js',
  },
  devtool: "cheap-eval-source-map",
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!sass-loader",
        }),
      },
    ]
  },
  resolve: {
    extensions: ['.html', '.js','.ts'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    },
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.NamedModulesPlugin(),
  ],
};
