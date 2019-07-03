// 导入自定义模块，使用相对路径
// const currency = require('./currency');

// const rmbToDollar = require('./currency');

// 对象解构赋值
const {rmbToDollar,dollarToRmb} = require('./Currency');


// 引入第三方模块
const _ = require('underscore');



// 使用模块方法
// console.log(currency.rmbToDollar(6))
// console.log(currency.dollarToRmb(6))

// console.log(rmbToDollar(12))


console.log(rmbToDollar(6))
console.log(dollarToRmb(6))


const users = [
    {name:'tom',age:20},
    {name:'tom',age:19},
]
// const user = _.max(users, user => user.age);
const user = _.max(users, aa => aa.age);

console.log(user)