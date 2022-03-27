module.exports = {
    devServer: {
        port: 9000,
        open: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
        },
    },
    publicPath: "//localhost:9000", // 默认是/，会访问到主应用上，为保证子应用始终访问子应用设置绝对根路径
    configureWebpack: {
        output: {
            library: "vueApp", // 挂在window上的全局变量 window['vueApp.']
            libraryTarget: "umd",
        },
    },
};
