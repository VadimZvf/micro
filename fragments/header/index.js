require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-transform-runtime',
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
