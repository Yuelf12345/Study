const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry:'./src/main.ts',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[{
                test:/\.ts&/,
                use:'ts-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./template/index.html'
        })
    ]
    ,
    devServer:{

    }
}