const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const config = {
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
}

const sponserConfig = Object.assign({}, config, {
    name:"sponser",
    entry: path.join(__dirname, 'src', 'Sponser', 'index.js'),
    output: {
        path: path.join(__dirname, 'sponser-dist'),
        filename: 'bundle.js'
    }
})

module.exports = [ sponserConfig ];




// const personalConfig = Object.assign({}, config, {
//     name:"personal",
//     entry: path.join(__dirname, 'src', 'Personal', 'index.js'),
//     output: {
//         path: path.join(__dirname, 'personal-dist'),
//         filename: 'bundle.js'
//     }
// })
























