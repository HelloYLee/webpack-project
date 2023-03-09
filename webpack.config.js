const path = require('path')

module.exports = {
    // 入口 相对路径
    entry: './src/main.js',
    // 输出
    output: {
       path: path.resolve(__dirname, "dist"),
       filename: 'main.js'
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

        }]
    },
    // plugins
    plugins: [],

    // mode
    mode: 'development'
}