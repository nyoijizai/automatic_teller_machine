'use strict';
const path = require('path');
function resolve(dir) {
 return path.join(__dirname, dir);
}

module.exports = {
 publicPath:
  process.env.NODE_ENV === 'production'
   ? '/printer/'
   : process.env.NODE_ENV === 'test'
   ? '/printer/'
   : '/',
 outputDir:
  process.env.NODE_ENV === 'production'
   ? 'printer-dist'
   : process.env.NODE_ENV === 'test'
   ? 'printer_test/printer/'
   : 'dev',
 assetsDir: 'static',
 lintOnSave: process.env.NODE_ENV === 'development',
 productionSourceMap: false,
 devServer: {
  disableHostCheck: true,
 },
 configureWebpack: {
  resolve: {
   alias: {
    '@': resolve('src'),
   },
  },
 },
 css: {
  loaderOptions: {
   less: {
    lessOptions: {
     modifyVars: {},
     javascriptEnabled: true,
    },
   },
  },
 },
};
