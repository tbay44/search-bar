const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');


module.exports = {
    entry: path.join(__dirname, 'src', 'searchbar', 'index.js'),
    output: {
        path: path.join(__dirname, 'searchbar-dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer:{
        proxy: {
            '/api' : 'http://localhost:3009'
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        }),
    ]
};
























