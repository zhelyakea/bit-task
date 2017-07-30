var path = require('path')
var webpack = require('webpack')

const config = {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
      './src/index'
  ],
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
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
      test: /\.css$/,
      use: [
         {
           loader: "style-loader"
         },
         {
           loader: "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]"
         }
        ]
      }
    ]
  }
}
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  )
}
module.exports = config
