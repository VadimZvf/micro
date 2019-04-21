const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map',
    mode: process.env.NODE_ENV,

    entry: path.join(__dirname, './client/client-root.js'),

    output: {
        path: path.join(__dirname, './build'),
        filename: 'client.js',
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[hash:8]',
                            modules: true
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            }
        ]
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
        }),
        new MiniCssExtractPlugin({
            filename: 'client.css'
        })
    ],
    externals: {
        react: 'react',
        'react-dom': 'reactDom'
    }
};
