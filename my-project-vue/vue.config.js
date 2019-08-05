// vue.config.js
module.exports = {
    chainWebpack: config => {
            config.module
                .rule('less')
                .test(/\.less$/)
                .oneOf('vue')
                .resourceQuery(/\?vue/)
                .use('px2rem')
                .loader('px2rem-loader')
                .before('postcss-loader')
                .options({
                    // remUnit: 37.5,
                    remUnit: 75,
                    remPrecision: 8
                })
    }
}
