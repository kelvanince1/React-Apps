module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // For any files which are js or jsx
                exclude: /node_modules/,
                use: ['babel-loader'] // Load them with Babel
            },
            {
                test: /\.(js|jsx)$/, // For any files which are js or jsx
                exclude: /node_modules/,
                use: ['eslint-loader'] // Debug with eslint
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'] // No need to include .js or .jsx suffixes to those files when importing
    }
}