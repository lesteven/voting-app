var HtmlWebpackPlugin = require('html-webpack-plugin'); 
var webpack = require('webpack'); 
var path = require('path');


module.exports = {
  entry: {index:'./src/index.js',
         regLog:'./src/regLog.js',
          myPolls:'./src/myPolls.js',
          pollChart: './src/pollChart.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  devServer:{
    publicPath:'/',
    contentBase:'./public',
  	inline:true,
  	port:8080,
    proxy:{
    '**':{
      target:'http://localhost:3000',
      changeOrigin:true,
      secure:false
      }
    }
  },

  module: {
  loaders: [
    { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader", 
		
    query:{presets:['react','es2015']}
	}
  ]
},
  plugins: [
  new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};