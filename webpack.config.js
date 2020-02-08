var path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const SRC_DIR = path.resolve(__dirname,'./src');
const DIST_DIR = path.resolve(__dirname,'/dist');

var config ={
   
    entry : SRC_DIR + '/index.js',
    output: {
            path: DIST_DIR + '/src',
            filename: 'bundle.js'
    },

    module: {
        rules:[
            { test:/\.(js)$/, use:'babel-loader' },
            { test:/\.(css)$/, use:['style-loader','css-loader'] },
            { test:/\.(gif|jpe?g|png)$/i, use: [ {loader: 'file-loader', options: { outputPath:"/assets" }} ] }
        ]
    },
    mode: 'development',
    plugins: [
            new HTMLWebpackPlugin({
              template: 'src/index.html'
            }),

            new CleanWebpackPlugin()
    ]
}

module.exports = config;