// Buffer创建不需要引入模块，它是全局模块
// 创建Buffer
const buf1 = Buffer.alloc(10,10);
console.log(buf1)

// 通过现有的数据创建
const buf2 = Buffer.from([1,2,3])
console.log(buf2);

// 使用字符串创建
const buf3 = Buffer.from('hello node.js中文')
console.log(buf3);
console.log(buf3.toString());