const webpack = require('webpack');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            fallback: 'file-loader',
                            name: '[name][md5:hash].[ext]',
                            outputPath: 'assets/',
                            publicPath: '/assets/'
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/,
                options: {
                    emitWarning: process.env.NODE_ENV !== 'production',
                },
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: require(path.join(process.cwd(), 'babel.config.js'))
            },
        ],
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.scss'],
    },
    plugins: [
        new webpack.ProgressPlugin(),
    ],
};