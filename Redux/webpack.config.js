const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: 'assets/[name][ext]', 
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png|jpeg|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Redux Application',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]

}