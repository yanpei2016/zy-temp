<%_ if(UIfrag==='vant'){ _%>
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
<%_ } _%>
module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/'
    // outputDir: 'dist',
    // 默认在生成的静态资源文件名中包含hash以控制缓存
    chainWebpack: config => {
        // svg  使用配置  如需使用  需 yarn add svg-sprite-loader -S 并配置相应路径
        // const svgRule = config.module.rule('svg');
        // // 清除已有的所有 loader。
        // // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        // svgRule.uses.clear();
        // svgRule
        //     .test(/\.svg$/)
        //     .include.add(path.resolve(__dirname, './src/assets/svg'))
        //     .end()
        //     .use('svg-sprite-loader')
        //     .loader('svg-sprite-loader')
        //     .options({
        //         symbolId: 'icon-[name]'
        //     });
        // const fileRule = config.module.rule('file');
        // fileRule.uses.clear();
        // fileRule
        //     .test(/\.svg$/)
        //     .exclude.add(path.resolve(__dirname, './src/assets/svg'))
        //     .end()
        //     .use('file-loader')
        //     .loader('file-loader');

    },
    filenameHashing: true,
    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建
    productionSourceMap: false,
    <%_ if(UIfrag==='vant'){ _%>
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer({
                        overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
                    }),
                    pxtorem({
                        rootValue: 41.4,
                        propList: ['*'],
                    })
                ]
            }
        }
    },
    <%_ } _%>
    devServer: {
        open: true,//设置自动打开
        port: 1880,//设置端口
        proxy: {
          //设置代理
　　　　    '/': {
    　　　　　　target: 'http://101.15.22.98',
    　　　　　　changeOrigin: true,
    　　　　　　secure: false, //如果是http接口，需要配置该参数
               disableHostCheck: true,
        }
    },      
}