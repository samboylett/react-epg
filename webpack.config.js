const path = require('path');
const FlowPlugin = require('flow-babel-webpack-plugin');

const plugins = [
  'transform-runtime',
  'add-module-exports',
  new FlowPlugin(),
  'transform-class-properties'
];

if (process.env.NODE_ENV === 'test') {
  plugins.push('istanbul');
}

module.exports = {
  mode: 'none',
  entry: ['./lib/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd'
  },
  externals: ['react', 'react-dom'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['babel-preset-env'],
          plugins
        }
      }
    ]
  },
  devtool: 'source-map'
};
