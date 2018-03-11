const path = require('path');

const rules = {
  js: {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: ['babel-loader']
  },
  css: {
    test: /\.css$/,
    exclude: /(node_modules|bower_components)/,
    use: ['style-loader', 'css-loader']
  },
  scss: {
    test: /\.scss$/,
    exclude: /(node_modules|bower_components)/,
    use: [{
      loader: 'style-loader',
      options: {
        singleton: true
      }
    }, {
      loader: 'css-loader',
      options: {
        modules: true
      }
    }, {
      loader: 'resolve-url-loader'
    }, {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
        includePaths: [
          path.resolve("src")
        ]
      }
    }]
  },
  images: {
    test: /\.(gif|ico|jpeg|jpg|png)$/,
    exclude: /(node_modules|bower_components)/,
    use: ['file-loader']
  },
  fonts: {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    use: ['file-loader']
  }
}

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Resolve those extendions for modules automatically
  },
  module: {
    rules: [
      rules.js,
      rules.css,
      rules.scss,
      rules.images,
      rules.fonts
    ]
  }
};
