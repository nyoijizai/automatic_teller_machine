'use strict';
const path = require('path');
const os = require('os');
function resolve(dir) {
 return path.join(__dirname, dir);
}

function getIpAddress() {
 var interfaces = os.networkInterfaces();
 for (var devName in interfaces) {
  var iface = interfaces[devName];
  for (var i = 0; i < iface.length; i++) {
   var alias = iface[i];
   if (
    alias.family === 'IPv4' &&
    alias.address !== '127.0.0.1' &&
    !alias.internal
   ) {
    return { ip: alias.address, mac: alias.mac };
   }
  }
 }
}

process.env.VUE_APP_IPV4 = getIpAddress().ip;
process.env.VUE_APP_MAC = getIpAddress().mac;

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
