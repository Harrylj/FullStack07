# 笔记
53课 50:00
53课 14:00
## 使用build启动项目
package.json  scirpt属性添加 'build' : 'webpack'
npm run build

##dev-server
每次build完，需要手动打开html，为了提升开发体验，我们需要安装webpack-dev-server,内置了express来提供更好的开发体验
npm install webpack-dev-server -D
package.json  scirpt属性添加 'dev' : 'webpack-dev-server'
还可以在webpack.config.json里配置端口



// 热更新
npm install html-webpack-plugin -D

// 添加兼容css ----这里不知道哪里配置出了问题，没有生效
npm install postcss-loader autoprefixer --save