const path = require('path')

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    devServer: {
        static: path.join(__dirname, 'public'),
        compress: true,
        port: 8080,
        open: true
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}