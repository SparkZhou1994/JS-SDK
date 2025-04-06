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
## Object.assign
```
import _ from 'lodash'

const d = Symbol('d');
console.log(Object.assign({a: 1, b:2}, {c:3, [d]: 4}))
// {a: 1, b: 2, C: 3, Symbol(d): 4}
// 性能慢 但推荐使用
console.log(_.assign({a: 1, b: 2}, {c: 3, [d]: 4}))
// {a: 1, b: 2, C: 3}
// 只合并 字符串为key的值
```
## export
```
export const login = () => {}

const login = () => {}
export { login }

export default login
// 页面采用 pass.default 来引用
// 其他js 可以 使用 import login from ’./login‘ 来引用， login(options)

// ES6 是变量引用， 必须要有变量
export var a = 1  

// commonJS
module.exports = login 

// commonJS 采用直接copy，可以没有变量
export 1
```
## 基本模板和自动补全
定义时需要前缀，名字要长
最好在获取元素后增加随机数, 规避冲突，防止脚本操作 （只使用元素只取一次的情况）
使用id定义选择器 document.getElementById
使用class定义样式
chrome游览区会自动填充type为text和password的数据，所以需要把div放入form中

# 登录模块开发-表单验证事件请求部分
## import和export时的重命名
```
// utils.js
export { getId }
// event.js
import { getId as $ } from '../common/utils' 
```
## fetch, async&amp;await
fetch 默认不携带cookies， 添加credentials: 'include'开启携带cookie
fetch 在mock时，mock.js是不管用的，可以使用fetch-mock
```
// 安装
npm i fetch-mock --save-dev

// mock.js
FetchMock.mock('/login', {code: 200, message: 'success'})
```
## promise讲解
async await 是ES7，依赖ES6 promise
promise用来解决异步调用中回调嵌套过深的情况，如接口1调用接口2，接口2调用接口3，……，如下:
```
const s1 = (cb) => {
	setTimeout( () => cb && cb('s1'), 1000); // cd 存在 则执行
}

const s2 = (cb) => {
	setTimeout( () => cb && cb('s2'), 3000);
}

s1(v1 => {
	console.log(v1);
	s2(v2 => {
		console.log(v2)
	})
})
```
### 使用promise的写法，如下
```
const p1 = () => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve('p1');
		}, 1000)
	})
}

const p2 = () => {
	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			resolve('p2');
		}, 3000)
	})
}

p1().then(v1 => console.log(v1))
    .then(p2)
	.then(v2 => console.log(v2))
```
### 使用await
在async中才能使用await, await后面是一个promise
以下代码等价于上面promise代码(then)
```
const av = async() => {
	const a1 = await p1(); // a1就是p1中resolve中的值
	// a1 的作用域在async中，而promise中的v1是独立的作用域
	console.log(a1);
	const a2 = await p2();
	console.log(a2);
}
av();
```
## await使用注意
```
// 一秒后出现 p1
const a1 = await p1();
console.log(a1);
// 三秒后出现 p2
const a2 = await p2();
console.log(a2)

// 四秒后出现 p1 p2
const a1 = await p1();
const a2 = await p2();
console.log(a1);
console.log(a2);
```
# 注册模块开发 - 手机号注册部分
## 


















