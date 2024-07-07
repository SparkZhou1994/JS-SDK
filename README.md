# JS-SDK
ES6+ 开发电商网站的账号体系JS SDK
# 课程简介
## Why SDK
### 特性
- 纯JS【不关系样式和HTML结构】
- 无依赖
### 要求
- 通用性
- 兼容性
- 可靠性
- 封装性
# ES6+实战所需要的环境
## Babel
- 通过.babelrc配置文件
- 与Webpack或Gulp等打包工具配合
- 在游览器引入Babel-polyfill转换新的API
## 环境准备
### 安装html-bundler
```
npm i html-bundler -g
```
### 创建项目
```
hb create es6-passport -w
```
// 创建           项目名                 使用Webpack
 
```
### 安装依赖
#### 安装es5-shim,babel-polyfill
```
npm i es5-shim --save-dev
npm i babel-polyfill --save-dev
npm i gulp-file-include --save-dev
```
#### html-bundler.config.js 添加
```
var fileInclude = require('gulp-file-include)
custom: {
	js: [],
	css: [],
	imgs: [],
	html: [{func: fileInclude, 
		opts: {prefix: '@@', 
			basepath: '@file '}}]
},
```
#### webpack.dll.js修改
在vendors中添加 'es5-shim','babel-polyfill' 
#### 打包变动的dll
```
npm run dll
```
#### html引入 vendors.js
### 启动项目 hb dev












