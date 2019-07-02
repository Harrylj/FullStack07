// 汇率计算模块
// 模板规范commonjs
// 1.完成工程
function rmbToDollar(rmb) {
    return rmb/6;
}

function dollarToRmb(dollar) {
    return dollar*6;
}

// 2.导出
module.exports.rmbToDollar = rmbToDollar;
// 如果仅是赋值module可以省略
exports.dollarToRmb = dollarToRmb;
// 导出对象被覆盖，这时module不能省
// module.exports = rmbToDollar;
