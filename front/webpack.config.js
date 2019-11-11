const path = require('path');
const webpack = require('webpack');

process.env.NODE_ENV = process.argv[1].indexOf('webpack-dev-server.js') ? 'development' : 'production';

module.exports = {
  entry: {
    app: './frame/index.jsx',
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.png'], // 확장자 생략
  },
  devServer: {
    hot: true,
    overlay: true,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 8000,
  }, // 임시서버, 라이브 리로딩 설정
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: ["babel-loader", "eslint-loader"],
          loader: 'babel-loader',
          options: {
            presets: ['react-app'],
          },
        },
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
