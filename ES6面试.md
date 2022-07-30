let const 
相同作用域内不能重复声明变量，不存在变量提升
声明的变量不属于window，脚本块
块级作用域， 之前只有函数作用域和 全局作用域
const 是只读的常量，引用类型的时候可以修改属性

解构赋值
数组解构，对象解构，字符串解构 及设置默认值  let [a, b, c = 99] = 'li'

模板字符串

数值扩展

函数扩展
参数默认值
箭头函数： 没有this，不能用做构造函数，没有arguments对象（用rest参数替代） xx（...rest）=> {}

数组扩展 Array from of  实例方法 flat

对象扩展 Object is keysassign

Module 模块
CmdJS 输出是值得拷贝， 运行时加载，同步
ES6 输出是值得引用，编译时输出， 异步

promise与async


beforeCreate,  初始化进行数据侦听 事件/侦听器的配置
created, 实例创建完，数据侦听  计算数据 方法 事件的回调函数 配置完成  但是这个阶段还不能访问el dom
beforeMount, 相关的render函数被调用
mounted,  实例挂载完成， 挂载目标el 被$el 替换， 但不能保证 子组件也都挂载完成， 需要用到nextTick
beforeUpdate, 数据发生改变后，DOM更新前，调用 
updated, DOM更新完， 可以操作新的dom
activated, keep-alive 缓存的组件激活
deactivated, keep-alive 销毁
beforeDestroy, 组件销毁前， 实例依然存在
destroyed 组件销毁，相关指令解绑，侦听器移除 子实例也被销毁
内部组件
<keep-alive></keep-alive>
<component></component>
<slot></slot>
<transition></transition>
<transition-group></transition-group>

14个指令
if， else， else-if show， 
once， cloak pre 
for, 
html，text，slot
on, model, bind, 

实例方法 事件
on emit off once
实例方法 生命周期
mount forceUpdate nextTick destroy
实例方法 数据
watch set delete

资源
components filters directives

