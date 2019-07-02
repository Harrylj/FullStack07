// 导入自定义模块，使用相对路径
// const currency = require('./currency');

// const rmbToDollar = require('./currency');

// 对象解构赋值
const {rmbToDollar,dollarToRmb} = require('./currency');

// 使用模块方法
// console.log(currency.rmbToDollar(6))
// console.log(currency.dollarToRmb(6))

// console.log(rmbToDollar(12))


console.log(rmbToDollar(6))
console.log(dollarToRmb(6))