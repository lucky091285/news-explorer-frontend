const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    main: './src/index.js',
    articles: './src/pages/articles/index.js',
    about: './src/pages/about/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // eslint-disable-next-line no-confusing-arrow
    filename: (chunkData) => chunkData.chunk.name === 'main' ? '[name].[hash].js' : '[name]/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: [
          'file-loader?name=./images/[name].[ext]', // указали папку, куда складывать изображения
          {
            loader: 'image-webpack-loader',
            options: {},
          },

        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'], // добавили минификацию CSS
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ //
      filename: 'style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/articles/index.html',
      filename: 'articles/index.html',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/about/index.html',
      filename: 'about/index.html',
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
