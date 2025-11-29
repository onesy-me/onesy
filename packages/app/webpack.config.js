const path = require('path');
const fs = require('fs-extra');
const { exec } = require('child_process');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

const port = process.env.PORT || 3000;

const paths = {
  src: path.resolve(__dirname, 'src'),
  public: path.resolve(__dirname, 'public'),
  build: path.resolve(__dirname, 'build')
};

class CopyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('CopyWebpackPlugin', () => {
      const ignore = ['index.html'];

      if (!fs.existsSync(paths.public)) return;
    });
  }
}

module.exports = {
  mode: 'development',

  target: 'web',

  entry: {
    main: [
      './src/index.tsx'
    ].filter(Boolean)
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: process.env.PUBLIC_URL || '/',
    filename: () => 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    clean: true
  },

  devtool: 'cheap-module-source-map',

  cache: {
    type: 'filesystem'
  },

  module: {
    rules: [
      // images
      {
        test: /\.(png|jpe?g|gif|bmp|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash:8].[ext]'
        }
      },
      // other
      {
        oneOf: [
          // js
          {
            test: /\.(ts|tsx|js|jsx|mjs)$/,
            include: paths.src,
            exclude: /node_modules/,
            use: [
              'thread-loader',
              {
                loader: 'babel-loader',
                options: {
                  customize: require.resolve('babel-preset-react-app/webpack-overrides'),
                  cacheDirectory: true,
                  cacheCompression: false,
                  compact: false,
                  presets: [
                    ['@babel/preset-env', { targets: 'defaults' }],
                    ['@babel/preset-react', { runtime: 'automatic' }],
                    '@babel/preset-typescript'
                  ],
                  plugins: [
                    'babel-plugin-react-compiler'
                  ].filter(Boolean)
                }
              }
            ]
          }
        ]
      }
    ],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false
    },
    runtimeChunk: 'single'
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new CopyWebpackPlugin()
  ].filter(Boolean),

  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'build'),
        publicPath: '/'
      },
      {
        directory: path.join(__dirname, 'public'),
        publicPath: '/'
      }
    ],
    port,
    open: false,
    client: {
      overlay: false,
      progress: false,
      logging: 'error'
    },
    compress: true,
    hot: true,
    liveReload: false,
    historyApiFallback: true
  }
};
