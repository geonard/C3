const path = require('path');

module.exports = {
  entry: './src/index.js', // Assure-toi que ce chemin est correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  // autres configurations
};
