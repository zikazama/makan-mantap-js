/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
const {merge} = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common'); 
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
});
