require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-class-properties',
        [
            'css-modules-transform',
            {
                generateScopedName: '[hash:8]',
                extensions: ['.css']
            }
        ]
    ]
});
require('./server/index');
