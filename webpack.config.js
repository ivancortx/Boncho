const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
require('@babel/polyfill');

require('dotenv').config({
  path: '.env.webpack'
});

const DotenvPlugin = require('webpack-dotenv-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  };

  // в режиме production оптимизируем Css, js
  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin
    ];
  }

  return config;
};

//имя документов в продакшн и дев разные
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',

  entry: ['@babel/polyfill', './index.tsx'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.jpg', '.css', 'scss', '.js', '.jsx', '.tsx', '.ts', '.html'],  //разрешения файлов поддерживаемые
    alias: {
      '@': path.resolve(__dirname, 'src'),
      src: path.resolve(__dirname, 'src')
    }
  },
  optimization: optimization(),
  // devServer: {
  //   // static: path.join(__dirname, 'dist'),
  //   historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  //   hot: true,
  //   // static: {
  //   //   directory: path.resolve(__dirname, 'dist/'),
  //   // },
  //   compress: true,
  //   port: 3030,
  // },
  devtool: isDev ? 'source-map' : 'hidden-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new DotenvPlugin({
      path: '.env',
      sample: '.env',
      allowEmptyValues: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            // hmr: isDev,       // горячая смена стилей (без перезагрузки), если в режиме dev
          }
        }, 'css-loader']
      },
      {
        test: /\.scss$/, use: [
          { loader: 'style-loader' },  // to inject the result into the DOM as a style block
          { loader: 'css-modules-typescript-loader' },  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: 'css-loader', options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: 'sass-loader' }  // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ]
      },
      {
        test: /\.(png|jpe?g|svg)$/,
        loader: 'file-loader',
        options: {
          name: '@/assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(ttf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,    //исключаем папку
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      },
      {
        test: /\.(ts)$/,
        exclude: /node_modules/,    //исключаем папку
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript'
          ]
        }
      },
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,    //исключаем папку
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@babel/preset-react'
          ]
        }
      }
    ]
  }
};