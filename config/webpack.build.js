const path = require('path');
module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/index.js')
    },
    output: {
        path:  path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: './',
        library:'react-circle-progress',
        libraryTarget:'umd'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true,
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.(less|css)$/,
                use: ['style-loader','css-loader', 'less-loader']
            }
        ]
    }
};