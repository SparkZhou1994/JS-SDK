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
// 创建           项目名                 使用Webpack
cd es6-passport && npm install 
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
### 启动项目 hb dev
# 需求分析与架构设计
## 需求分析
### 前端技术指标
- 兼容IE8
- 文件大小不超过30kb
- 支持多种引用方式：直接引用、commonJS、AMD
## 架构设计
### API设计
#### 暴露接口
- 类，存在内部状态并相互关联
- 普通函数，单一功能
- 对象，无关联的功能集合
#### 配置项及默认值
## 业务模块
- init：接受参数和设置初始值
- render：渲染
- event：事件绑定
