module.exports = {
	mode: process.env.NODE_ENV || "development",
	entry: "./src/index.js",
	output: {
		path: __dirname + "/build",
		filename: "index.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: {
										chrome: "65",
										firefox: "60",
										safari: "9",
										ie: "11",
									},
								},
							],
						],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
};
