const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production', // modo do build
    entry: './src/main.ts', // ponto de entrada
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    output: {
        filename: 'app.min.js', // arquivo
        path: path.join(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    // plugins: [
    //     new CopyPlugin([
    //         { from: 'public', to: 'build' }
    //     ])
    // ],
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }

}