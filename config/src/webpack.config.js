let path = require('path');

module.exports = {
	entry: path.resolve('src/PowerBIEmbed.tsx'),
	output: {
		library: 'powerbi-client-react',
		libraryTarget: 'amd',
		path: path.resolve('dist'),
		filename: 'powerbi-client-react.js'
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				options: {
						configFile: path.resolve('config/src/tsconfig.json')
				},
				exclude: /node_modules/
			},
		]
	},
	resolve: {
		modules: ['node_modules'],
		extensions: [
			'.tsx',
			'.ts',
			'.js'
		]
	},
	devtool: 'source-map',
};