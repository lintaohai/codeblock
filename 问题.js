fetch
fetch('api', {option}).then(res => res.json()).then(data => {console.log(data)})

async await
async 总会返回 promise对象
async 函数必须等里边的 await 函数执行完后才继续执行

promise.all
接收的是promise对象， 如果是函数promise.all([x(),xx()])

forEach 和 map 区别
map 有返回值

CommonJs 用于服务器，同步加载
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;

AMD 用于浏览器, 异步加载
require(['fs'], function (_fs) {
　　let stat = _fs.stat
});

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
import { stat, exists, readFile } from 'fs';

Q:var let const 区别
A:var可以重复定义，let、const不可以

Q:（函数）变量提升
A:先使用再声明。只有声明的变量会提升，初始化的不会
A:函数声明和变量声明总是会被解释器悄悄地被"提升"到方法体的最顶部。

Q:对象，构造函数，原型关系
对象的原型链  指向  构造函数原型
构造函数原型属性 也指向 构造函数原型
构造函数原型.construtor 构造函数
