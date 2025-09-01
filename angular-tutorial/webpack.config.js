const webpack = require("@nativescript/webpack");

module.exports = (env) => {
  webpack.init(env);

  // Learn how to customize:
  // https://docs.nativescript.org/webpack

  webpack.chainWebpack((config) => {
    config.resolve.set("fallback", {
      path: false,
      util: false,
	  url: false,
      os: false,
      crypto: false,
      stream: false,
      process: false,
      http: false,
      https: false,
      fs: false,
      assert: false,
      net: false,
      constants: false,
      zlib: false,
      tty: false,
      vm: false,
      async_hooks: false,
    });
  });

  return webpack.resolveConfig();
};
