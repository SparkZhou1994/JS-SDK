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
# 最常用ES6语法讲解以及课程环境搭建
## import & export
### 模块化历程 AMD、CMD、commonJS
#### ES6模块【import export】与 commonJS【require() module.exports】区别
- 静态化，必须在顶部，不能使用条件语句，自动采用严格模式
- treeshaking和编译优化，以及webpack3中的作用域提升
- 外部可是拿到实时值，而非缓存值（是引用而不是copy）
1. 可以对commonJS模块重新赋值，对ES6模块重新赋值会编译报错
2. 都可以对对象内部的值进行改变
3. commonJS是对模块的拷贝，ES6是对模块的引用
## const & let
- 块级作用域
- 使用let和const不再有变量提升，不允许重复声明
- 使用上const优先
## 箭头函数
- 默认带return
1. var f = v => v;
2. var f = v => { return v };
3. var f = () => ( {a: 1} ) // 返回对象时
- 没有参数或者有多个参数，需要（）
- this指向定义时的对象
- 不可以作为构造函数（不是使用new）
- 没有arguments对象
# 登录模块开发-骨架及渲染部分



