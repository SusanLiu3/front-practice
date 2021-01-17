const path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [{ test: /.(ts|tsx)$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
};
