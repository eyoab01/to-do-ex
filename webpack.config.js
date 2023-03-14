const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const entryPath = './src/index.js';

const outputConfig = {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist'),
  clean: true,
};

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, 'src', 'index.html'),
  favicon: path.resolve(__dirname, 'public', 'images', 'favicon.png'),
});

const devServerConfig = {
  static: './dist',
};

const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
};
const scssRules = {
  test: /\.scss$/i,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};
const imageRules = {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: 'asset/resource',
};
const fontRules = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
};

const optimization = {
  runtimeChunk: 'single',
};

const config = {
  entry: entryPath,
  output: outputConfig,
  plugins: [htmlPlugin],
  // mode: 'production',
  mode: 'development',
  module: {
    rules: [cssRules, scssRules, imageRules, fontRules],
  },
  devServer: devServerConfig,
  devtool: 'inline-source-map',
  optimization,
};

module.exports = config;
