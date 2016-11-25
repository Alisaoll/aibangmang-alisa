const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  debug: DEBUG,

  // devtool: DEBUG ? 'source-map' : '',
  devtool: '',

  entry: {
    // common: './src/scripts/common/common.js',
    home: './widget/src/modules/home/home.js',
    home_home: './widget/src/modules/home/home_home.js',

    auth_login: './widget/src/modules/auth/auth_login.js',
    auth_register: './widget/src/modules/auth/auth_register.js',
    home_mask: './widget/src/modules/home/home_mask.js',
    home_submit: './widget/src/modules/home/home_submit.js',
    love: './widget/src/modules/love/love.js',
    love_charity: './widget/src/modules/love/love_charity.js',

  },

  output: {
    // publicPath: 'http://localhost:3000/',
    path: path.join(__dirname, 'widget', 'dist'),
    filename: path.join('scripts', 'modules', '[name].js'),
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|jpg|png)/,
        loader: 'url-loader?limit=268192'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: 'json' },
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.jsx'],
    alias: {
      '_config': path.join(__dirname, 'widget', 'config.js'),
      '_common': path.join(__dirname, 'widget', 'src', 'common', 'common.js'),
      '_utils': path.join(__dirname, 'widget', 'src', 'common', 'utils'),
      '_constants': path.join(__dirname, 'widget', 'src', 'common', 'constants'),
      '_methods': path.join(__dirname, 'widget', 'src', 'common', 'methods'),
      '_events': path.join(__dirname, 'widget', 'src', 'common', 'events.js'),
      '_attributes': path.join(__dirname, 'widget', 'src', 'common', 'attributes.js'),
      '_api': path.join(__dirname, 'widget', 'src', 'common', 'api'),
    },
  },

  plugins: DEBUG ? [
    new ExtractTextPlugin(path.join('css', 'main.css')),
  ] : [
    new ExtractTextPlugin(path.join('css', 'main.css')),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]
}
