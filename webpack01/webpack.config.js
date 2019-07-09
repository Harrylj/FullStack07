/**
 * Created by Administrator on 2019/7/9.
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    entry:'./src/index.js',
    output:{
        filename:'pack.[hash:6].js',
        path: path.resolve(__dirname,'./kkb')
    },
    // 热更新
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtract({
            filename:'kkb.css'
        })
    ],
    module:{
        rules:[
            // css结尾
            {
                test:/.css$/,
//                use: ['style-loader','css-loader']
                use:[MiniCssExtract.loader,'css-loader']
            },
            // 使用less
            {
                test: /\.less$/,
                use: [MiniCssExtract.loader, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    }
}