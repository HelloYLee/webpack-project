const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

// 自定义loader
function getLoaders(otherloader){
    return [MiniCssExtractPlugin.loader, 'css-loader', {
        loader: 'postcss-loader',
        options: {
            postcssOptions: {
                plugins: [
                ['postcss-preset-env', {
                    // others
                    }]
                ]
            } 
        }
    }, otherloader].filter(Boolean)
}

module.exports = {
    // 入口 相对路径
    entry: './src/main.js',
    // 输出
    output: {
       path: path.resolve(__dirname, "../dist"),
       filename: 'static/js/main.js',
       clean: true, // 打包前清空之前的内容
    },
    // loader
    module: {
        rules: [{
            test: /\.css$/,
            use: getLoaders(),
        }, {
            test: /\.less$/,
            use: getLoaders('less-loader'),
        }, {
            test: /\.s[ac]ss$/,
            use:  getLoaders('sass-loader'),
        }, {
            test: /\.styl$/,
            use:  getLoaders('stylus-loader'),
        }, {
            test: /\.(jpe?g|png|webp|gif|svg)$/,
            type: 'asset', // 默认小于8KB转换为data URL(base64 格式)
/*             parser: {
                dataUrlCondition: {
                    maxSize: 50 * 1024  // 配置为小于50KB转换为data URL
                }
            } */
            generator: {
                filename: 'static/images/[hash:10][ext][query]'  //哈希值只取前十位
            }
        }, {
            test: /\.(ttf|woff2?)$/,
            type: 'asset/resource', // 不转换base64格式)
/*             parser: {
                dataUrlCondition: {
                    maxSize: 50 * 1024  // 配置为小于50KB转换为data URL
                }
            } */
            generator: {
                filename: 'static/media/[hash:10][ext][query]'
            }
        }, {
            test: /\.js$/,
            exclude: /node_models/,
            loader: 'babel-loader',
/*             options: {
                presets: [
                    "@babel/preset-env"
                ]
            } */
        }]
    },
    // plugins
    plugins: [new EslintPlugin({
        // 指定哪些文件目录需要做eslint检查
        context: path.resolve(__dirname, "../src")
    }), new HtmlWebpackPlugin({
        // 处理后新的html文件自动引入main.js
        template: path.resolve(__dirname, "../public/index.html")
    }), new MiniCssExtractPlugin({
        // 设置提取的css路径
        filename: "static/css/main.css"
    }),
    // 压缩Css 
    new CssMinimizerPlugin()],

    // mode
    mode: 'production'
}