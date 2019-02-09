import {Configuration} from 'webpack';
import HtmlWebpackPlugin = require("html-webpack-plugin");

const config: Configuration = {
  mode: 'development',
  entry: './entry.ts',
  devtool: 'inline-source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

export default config;
