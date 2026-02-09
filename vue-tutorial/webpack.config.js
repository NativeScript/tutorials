const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	webpack.chainWebpack((config) => {
		const scssRule = config.module.rule("scss");
		scssRule.use("sass-loader").tap((options) => {
			const current = options || {};
			const sassOptions = current.sassOptions || {};
			return {
				...current,
				sassOptions: {
					...sassOptions,
					quietDeps: true,
				},
			};
		});
	});

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	return webpack.resolveConfig();
};


