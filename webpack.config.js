const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/client/index.jsx'),
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/client/index.html'
    })
  ],
  performance: {
    hints: false
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    },{
      test: /.css$/,
      loader: ['style-loader', 'css-loader']
    },
    {
      test: /\.(png|jpg|gif|eot|ttf|woff|svg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    }]
  },
};