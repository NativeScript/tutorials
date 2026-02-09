const webpack = require('@nativescript/webpack');

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack
  webpack.mergeWebpack({
    resolve: {
      conditionNames: ['svelte', 'import', 'module', 'require', 'node'],
      // Force the ESM tslib build to avoid UMD global exports (fixes __extends assignment error).
      alias: {
        tslib: require.resolve('tslib/tslib.es6.mjs')
      }
    }
  });

  return webpack.resolveConfig();
};
