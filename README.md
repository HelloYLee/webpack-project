// 学习webpack构建项目

// 2023/3/8
npm init -y

// 下载webpack 和webpack-cli
npm install webpack webpack-cli -D

// npx 可以运行webpack命令（将node_modules下bin目录中的包加到环境变量中，可执行）
npx webpack './src/main.js' --mode=development



// 2023/3/9

wepack主要模块

```
mode: 定义开发模式或者生产模式
entry: 打包入口文件
output：打包输出文件 
module: 定义编译对应文件的规则，加载loader
plugin: 定义编译中使用到的plugin插件
devServer: 开发服务器 // 开发模式下需要定义
```



webpack默认可以处理js，json类型的文件，所以对于其他类型的文件，需要使用plugin或者loader来进行处理



开发模式： mode:development

生产模式： mode:production

实际工程化可以分开定义各自的webpack.config文件

如webpack.dev.js 和webpack.production.js



devServer模块主要用在开发模式下，定义启动的服务器host,port,是否自动打开浏览器

output模块在开发模式下可将path定义为undefined，因为编译是在内存中，无打包文件生成



加载样式文件使用的loader：

css-loader/sass-loader/less-loader/stylus-loader

处理其他资源文件如图片，文本，音频视频等webpack5内置的asset类型 -----webpack5新特性，在webpack4中使用的是file-loader和url-loader来处理



type: "asset/inline" ---> 会将资源转换为data URL格式

type: "asset/resource"  ---> 不会将资源转换

type: "asset"   ---> 默认会将小于8K的资源转换为data URL格式，也可以配置parser.dataUrlCondition.maxSize为其他大小



babel-loader  向前兼容，预处理js文件（配置babel-loader后，会将ES6 新特性转换为以前的格式，如变量声明使用var，无箭头函数）

html-webpack-plugin 预处理html文件



开发模式下优化：

开发模式下会默认对js和html进行压缩优化

1. 使用css-extract-webpack-plugin 将css格式文件单独提取成一个css文件，以link的方式在html引入，解决首页闪屏问题
2. 处理css兼容性问题，使用postcss-loader，兼容低版本浏览器
3. 压缩css文件，使用css-minimizer-webpack-plugin