const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js' ),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        assetModuleFilename: '[name][ext]',
    },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeh|gif)$/i,
          type: 'asset/resource'
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}