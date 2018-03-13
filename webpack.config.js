const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader','css-loader', 'sass-loader?indentedSyntax']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ // 忽略node_modules下的文件不进行转码
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
}