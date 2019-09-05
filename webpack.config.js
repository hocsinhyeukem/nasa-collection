const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',

  entry: './src/index.js',

output: {
    filename: isProduction ? '[name].[hash].js' : '[name].js',
    chunkFilename: isProduction ? '[name].[chunkhash].chunk.js' : '[name].chunk.js',
    path: path.resolve(process.cwd(), 'build'),
    publicPath: process.env.PUBLIC_URL,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            }
          }
        ]
      }
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      PUBLIC_URL: JSON.stringify(process.env.PUBLIC_URL),
    }),

    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      ...(isProduction ?
        {
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
          },
        } :
        {}
      ),
    }),

    ...(isProduction ?
      [
        new WebpackPwaManifest({
          name: 'Nasa collection',
          short_name: 'Nasa',
          description: 'Nasa collection',
          background_color: '#c3c3c3',
          theme_color: '#086edb',
          inject: true,
          ios: true,
          icons: [
            {
              src: path.resolve('src/assets/images/nasa.png'),
              sizes: [72, 96, 128, 144, 192, 384, 512],
            },
            {
              src: path.resolve('src/assets/images/nasa.png'),
              sizes: [120, 152, 167, 180],
              ios: true,
            },
          ],
        }),
      ] :
      []
    ),
  ],

  devServer: {
    historyApiFallback: true,
  },

  target: 'web',
};
