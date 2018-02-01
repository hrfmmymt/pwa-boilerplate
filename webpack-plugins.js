const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const workboxPlugin = require('workbox-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PATHS = require('./webpack-paths');

exports.loaderOptions = new webpack.LoaderOptionsPlugin({
  options: {
    context: __dirname,
  },
});

exports.environmentVariables = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});

exports.uglifyJs = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false,
  },
  compress: {
    warnings: false,
    drop_console: true,
  },
});

exports.extractText = (() => {
  const config = {
    filename:  'style.css',
  };
  return new ExtractTextPlugin(config);
})();

exports.manifest = new ManifestPlugin({
  fileName: 'asset-manifest.json',
});

exports.sw = new workboxPlugin({
  cacheId: 'pwa-boilerplate',
  globDirectory: PATHS.public,
  globPatterns: ['**/*.{html,css,js,json,jpg,png,svg,ico}'],
  globIgnores: ['**/*.map*', 'asset-manifest.json'],
  swDest: PATHS.public + '/service-worker.js',
  navigateFallback: '/index.html',
  skipWaiting: true,
  clientsClaim: false
});

exports.copy = new CopyWebpackPlugin([
  { from: 'src/pwa' },
]);
