1. 创建一个空的简单JavaScript对象（即{}）；
2. 为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。
// 模拟 new 操作符执行过程
function newFun(fn, ...ret) {
  // const o = Object.create(fn.prototype)
  // const o = Object.assign({}, fn.prototype)
  const o = {}
  o.__proto__ = fn.prototype
  let res = fn.apply(o, ret)
  if (typeof res === 'object') return res
  else return o
}

function fn(name, age) {
  this.name = name
  this.age = age
}
fn.prototype.say = function () {
  console.log(this);
}
const a = newFun(fn, '林涛海', 16)
console.log(a);