module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
    // outputDir: 'dist',
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    filenameHashing: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    devServer: {
        open: true,//设置自动打开
        port: 1880,//设置端口
        proxy: {
          //设置代理
　　　　    '/': {
    　　　　　　target: 'http://101.15.22.98',
    　　　　　　changeOrigin: true,
    　　　　　　secure: false, //如果是http接口，需要配置该参数
    　　　　　　pathRewrite: {
    　　　　　　　　    '^/axios': ''
    　　　　　　　　    }
　　　　　　    }
        }
    },
    plugins: [
        <%_ if(UIfrag==='vant')
        ['import', {
          libraryName: 'vant',
          libraryDirectory: 'es',
          style: true
        }, 'vant']
        <%_ } _%>
      ]
      
}