
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "http://m.kugou.com",
                secure: false,//设置是否安全协议下访问 true只能用https协议去访问
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    lintOnSave: false //  关闭eslint

}