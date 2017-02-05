/* eslint no-param-reassign:0, import/no-extraneous-dependencies:0 */
const path = require('path');
// const webpack = require('webpack');

module.exports = (config) => {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'test/components/*',
    ],

    webpack: {
      // externals: {
      //   sinon: true,
      // },
      plugins: [
        // https://github.com/cheeriojs/cheerio/issues/836
        // new webpack.NormalModuleReplacementPlugin(/^\.\/package$/, (result) => {
        //   if (/cheerio/.test(result.context)) {
        //     result.request = './package.json';
        //   }
        // }),
      ],
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          test: /\.jsx?$/,
          loader: 'babel-loader',
          include: [
            path.join(__dirname, 'src/js'),
            path.join(__dirname, 'test'),
            require.resolve('airbnb-js-shims'),
          ],
          query: {
            presets: ['airbnb'],
          },
        }, {
          test: /\.json$/,
          loader: 'json-loader',
        }, {
          // Inject the Airbnb shims into the bundle
          test: /test\/_helpers/, loader: 'imports?shims=airbnb-js-shims',
        }],
      },
      resolve: {
        extensions: ['', '.js', '.jsx'],
      },
    },

    webpackMiddleware: {
      progress: false,
      stats: false,
      debug: false,
      quiet: true,
    },

    preprocessors: {
      'test/**/*': ['webpack'],
    },

    reporters: ['spec'],

    specReporter: {
      showSpecTiming: true,
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['Chrome'],
    captureTimeout: 60000,
    browserDisconnectTimeout: 10000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,

    singleRun: true,

    concurrency: Infinity,
  });
};
