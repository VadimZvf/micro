module.exports = {
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map',
    mode: process.env.NODE_ENV,

    entry: ['./client-utilities/common.js', './client-utilities/event-bus.js'],
    output: {
        path: __dirname + '/server/build',
        filename: 'common.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
};
