const path = require('path'),
webpack = require('webpack'),
ROOT_PATH = path.resolve(__dirname),
ExtractTextPlugin = require("extract-text-webpack-plugin"),
HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');  //清除
module.exports = {
	entry: {
		page: './src/main.js',
		commons: ['vue', 'vue-router']
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: {
				//root: resolve(__dirname, 'src'),
						attrs: ['img:src', 'link:href'],
						minimize:false  //是否压缩html
					}
				}]
			},
			{
				test: /\.js(x)*$/,
				exclude: /^node_modules$/,
				//loader: 'babel-loader'
				use: ['babel-loader']
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{ loader : 'style-loader' } ,
					{ loader : 'css-loader' } ,
					{ loader : 'sass-loader' }
				]
			},
			{
				test: /\.css$/,
				use: [
					{ loader : 'style-loader' } ,
					{ loader : 'css-loader' } ,
				]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				// use: [{
				// 	loader: "url-loader",
				// 	// query: {
				// 	// 	limit: 5000,
				// 	// 	name: 'fonts/[name].[hash:7].[ext]'
				// 	// }
				// }]
				use: ["url-loader"]
			}
			
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "initial",
					minChunks: 2
				}
			}
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			filename: "../index.html", //生成的html存放路径，相对于 path
			// template: './src/index.html', //html模板路径
			// favicon: "./src/imgs/goldfish.ico",
			inject: true, //允许插件修改哪些内容，包括head与body
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false, //删除空白符与换行符
				//removeAttributeQuotes: true
			}
		}),
		// new CleanWebpackPlugin()
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	minChunks: function (module) {
		// 		// 该配置假定你引入的 bootstrap 存在于 node_modules 目录中
		// 		return module.context && module.context.indexOf('node_modules') !== -1;
		// 	}
		// }),
	],
	resolve: {
		extensions: ['.js', '.vue', '.jsx', '.less', '.scss', '.css'], 
		alias: {  
			mui: path.resolve(__dirname, "./src/js/mui.js")
		}  
	}
}