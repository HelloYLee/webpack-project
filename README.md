// 学习webpack构建项目

// 2023/3/8
npm init -y

// 下载webpack 和webpack-cli
npm install webpack webpack-cli -D

// npx 可以运行webpack命令（将node_modules下bin目录中的包加到环境变量中，可执行）
npx webpack './src/main.js' --mode=development
