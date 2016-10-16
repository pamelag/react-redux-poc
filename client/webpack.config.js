var webpack = require("webpack");

module.exports = {
    entry : './main.js',
    devtool: 'source-map',
    devserver : {
        outputPath: './',
        inline : true,
        port : 8080
    },
    plugins: [
        
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    output : {
        path : './',
        filename : 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.js$/,
                exclude : /node_modules/,
                loader : 'babel',
                query : {
                    presets : ['es2015', 'react']
                }

            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}

