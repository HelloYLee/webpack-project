const path = require('path')
const EslintPlugin = require('eslint-webpack-plugin')

module.exports = {
    // 入口 相对路径
    entry: './src/main.js',
    // 输出
    output: {
       path: path.resolve(__dirname, "dist"),
       filename: 'static/js/main.js',
       clean: true, // 打包前清空之前的内容
    },
    // loader
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader']
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

        }]
    },
    // plugins
    plugins: [new EslintPlugin({
        // 指定哪些文件目录需要做eslint检查
        context: path.resolve(__dirname, "src")
    })],

    // mode
    mode: 'development'
}