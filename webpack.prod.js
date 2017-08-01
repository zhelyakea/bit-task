var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer')
var webpack = require('webpack')

const config = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
      './src/index', './css/style.scss'
  ],
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
       test: /\.(js|jsx)$/,
       include: [
         path.resolve(__dirname, "src"),
       ],
       exclude: /node_modules/,
       use: [
         'babel-loader'
       ]
     },
     {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            fallbackLoader: "style-loader",
            loader: "css-loader!sass-loader!postcss-loader",
        }),
    }]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        options: {
            postcss: [autoprefixer]
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
module.exports = config
