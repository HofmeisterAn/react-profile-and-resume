const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
      new UglifyJsWebpackPlugin({
        include: /\.min\.js$/,
        sourceMap: true
      })
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
    ])
  ]
});
