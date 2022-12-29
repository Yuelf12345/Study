//https://webpack.docschina.org/concepts/
//webpack 是运行在 node 环境里,所以使用node下模块导出方式

const path = require('path')

module.exports = {
    //mode参数设置为development,production或none,您可以启用 webpack 与每个环境相对应的内置优化.默认值为production.
    mode:'development',
    //入口,webpack应该使用哪个模块来开始构建其内部依赖关系图.Webpack 将确定入口点依赖于哪些其他模块和库（直接和间接）.
    entry:'./src/index.js',
    output:{
        clean:true,
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        //https://v4.webpack.docschina.org/loaders/
        rules:[
            {
                test: /\.txt$/,
                use: 'raw-loader' 
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader:'file-loader',
                    options:{
                        //[ext]资源模块后缀
                        name:'[name]_[hash].[ext]',
                        //打包后存放位置
                        outputPath:'./images',
                        //打包后的url
                        publicPath:'../dist/images'
                    }
                } 
            },
            {
              test:/\.css$/,
              use:[
                'style-loader',
                {
                    loader:'css-loader',
                    options:{
                        //启用url()处理
                        url:true,
                        //启用import处理
                        import:true,
                        sourceMap:false
                    }
                }
                ]
            }
        ]
    }
}