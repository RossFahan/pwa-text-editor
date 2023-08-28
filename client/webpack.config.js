const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      // Generate HTML file
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
      }),

      // Generate the Web App Manifest
      new WebpackPwaManifest({
        name: 'Your Text Editor App',
        short_name: 'Text Editor',
        description: 'A Progressive Web App Text Editor',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
          },
        ],
      }),

      // Inject your service worker
      new InjectManifest({
        swSrc: './src-sw.js', // Your service worker source file
        swDest: 'service-worker.js', // The output service worker file
      }),
    ],

    module: {
      rules: [
        // CSS loader
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },

        // Babel loader for modern JavaScript
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
  };
};
