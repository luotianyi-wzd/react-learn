const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react']
				}
			}
		}, {
			test: /\.(css|less)$/,
			use: [
				'style-loader', 'css-loader', 'less-loader'
			]
		}]
	}
	//npm install babel-loader@next @babel/core @babel/preset-react --save  
}