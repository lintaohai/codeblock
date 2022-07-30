// 类型注解 let 变量:类型 = 值
let num:number = 2

// 联合类型 let 变量:类型1 | 类型2 | 类型3 = 值
let num2:number|string = 2

// 类型别名 type 别名 = 类型
type numberAndString = number|string
let num3:numberAndString = 2

// 数组类型 变量:类型[] = [值1,...值2] || 变量:Array<类型> = [值1,...值2] 
let numArr:number[] = [1,2,3]
let numArr2:Array<numberAndString> = [1,'2',3]

enum aa {
    a= 1,
    b=2
}