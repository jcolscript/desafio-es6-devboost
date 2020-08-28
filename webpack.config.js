/**
 * Pasta aonde esta localizado o arquivo de entrada
 */
const entry_path = './resources/js';

/**
 * Pasta de saida dos arquivos após a compilação
 */
const output_path = './public/assets';

/**
 * Libs
 */
const path			= require('path');
const TerserPlugin	= require('terser-webpack-plugin');

/**
 * Timestamp
 */
const time = new Date().getTime();

module.exports = {
	target  : 'web',
	entry   : {
		bundle : path.resolve(`${entry_path}/`, 'app.js'),
	},
	output  : {
		filename	: 'js/[name].js',
		path		: path.resolve(__dirname, `${output_path}`),
	},
	devServer: {
		contentBase         : path.join(__dirname, 'public'),
		port                : 3000,
		compress            : true,
		watchContentBase    : true,
		writeToDisk         : true,
		historyApiFallback  : true,
		headers: {
			'Access-Control-Allow-Origin' : '*'
		}
	},
	stats : {
		colors          : true,
		modules         : false,
		reasons         : false,
		errorDetails    : true,
		entrypoints     : false
	},
	resolve : {
		extensions : [ 
			'.jsx', 
			'.js',
			'.json'
		]
	},
	optimization : {
		minimizer : [
			new TerserPlugin({
				terserOptions : {
					output : {
						comments : false
					}
				}
			})
		]
	}
};