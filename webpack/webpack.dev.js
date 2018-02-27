'use strict';

const PackageJSON = require('../package.json');
const Path = require('path');
const Webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {

  cache: true,

  // Create Sourcemaps for the bundle
  devtool: 'cheap-eval-source-map',

  context: Path.resolve(__dirname, '../'),

  devServer: {
    before: () => {

      console.warn('\n[******** Beginning Webpack ********]');
    },
    // bonjour: true,
    contentBase: Path.resolve(__dirname, '../sandbox'),
    compress: true,
    hotOnly: true,
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    inline: true,
    lazy: false, // the dev-server will only compile the bundle when it gets requested
    noInfo: false, // only errors & warns on hot reload
    open: false,
    overlay: true,
    port: 8080,
    progress: true,
    // If you have an application server
    // proxy: { '*': { target: 'http://localhost:8081' } }
  },

  entry: [Path.resolve(__dirname, '../src/index.js')],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheIdentifier: Path.resolve(__dirname, '../.babelrc')
          }
        }]
      },
      {
        test: /\.json$/,
        loaders: ['json-loader']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 4 version"]}!sass-loader?sourceMap&sourceComments'
      },
      {
        test: /\.css$/,
        loader:  'style-loader!css-loader!autoprefixer-loader?{browsers:["last 4 version"]}'
      },
      {
        test: /\.(png|jpg|jpeg|gif|woff)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  output: {
    filename: 'bundle.js',
    library: PackageJSON.name,
    libraryTarget: 'umd',
    path: Path.resolve(__dirname, '../dist')
  },

  plugins: [
    // Specify the resulting CSS filename
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    // Breaks the require references in src
    // new Webpack.optimize.UglifyJsPlugin({minimize: true}),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: '',
      files: '**/*.scss',
      syntax: 'scss',
      failOnError: false,
      quiet: false
    })
  ],

  resolve: {
    extensions: ['*', '.js', '.css', '.scss', '.html'],
    alias: {
      // Put any vendor aliases here
      normalize: Path.join(__dirname, '/node_modules/normalize.css/normalize.css')
    }
  },

  stats: {
    colors: true,
    reasons: true

  },

  target: 'web'
};
