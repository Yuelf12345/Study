const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const { dirname } = require("path");
/**
 * webpack 从入口文件开始,分析所有依赖,对依赖资源进行打包
 */
module.exports = {
    entry:'./src/index.js',
    output:{
        //清除上一次打包，也可以用插件方法
        // clean:true,
        path: path.resolve(__dirname,'dist'),
        filename:'./js/[name].js'
    },
    mode:'development',

    //方便调试： https://webpack.docschina.org/configuration/devtool/
    //博客：http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html
    devtool:'source-map',//源文件映射

    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    // 'style-loader',
                    {
                        // 生成link
                        loader:miniCssExtractPlugin.loader
                    },
                    {
                        loader:'css-loader',
                        options:{
                            url:true,
                            import:true,
                            sourceMap:false
                        }
                    }
                ]
              },
            {
                test: /\.(png|jpg|gif)$/,
                use:{
                    loader: 'url-loader',
                    options: {
                        name:'[name]_[hash].[ext]',
                        outputPath:'./images',
                        // publicPath:'../images',
                        publicPath:'/images',
                        limit:100
                    },
                },
            },
            
              {
                test:/\.md$/,
                use:[
                    'html-loader',
                    'markdown-loader'
                ]
              }
        ]
    },

    //插件执行顺序与书写顺序无关
    plugins: [
        new HtmlWebpackPlugin({
            template:'./template/index.html',
            //解析后生成存放位置和文件名,根据output.path
            filename:'index.html',
            title:'hello webpack'
        }),
        //清除上一次打包
        new CleanWebpackPlugin(),
        new miniCssExtractPlugin({
            filename: './css/[name].css'
        })
    ],

    //dev-server
    devServer:{
        //配置为根目录，http://localhost:8080/1.txt
        // static:'./data',
        open :true, //自动开浏览器

        hot:true,  //开启热更新,逻辑在index.js

        //后端代理
        proxy:{
            '/api':{
                target:'http://localhost:1228',
                //路径重写
                pathRewrite:{
                    '^/api':''
                },
                // changeOrigin: true,
            }
        }
    }
}