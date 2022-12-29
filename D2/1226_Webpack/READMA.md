# webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。
1. Webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。
2. 它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件（图片，字体）等，让开发更高效。
3. 对于不同类型的依赖，Webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合并生成优化的静态资源。

## CommonJS 的基本语法：
### 使用 module.exports 把模块文件中的数据导出,内容类型可以是字符串,变量,对象等.在需要的页面中使用require()获取相应数据.
    lib文件 module.exports = { a:function(){} }
    index文件 const obj = require('./lib.js');obj.a();


## ESM 的基本语法
### 1.变量函数声明导出：
    export const name = '123'
    export function fn1(){..}
### 2.命名导出
    const name = '123'
    function fn1(){..}
    export {name, fn1}
### 3.默认导出文件
    export default {
        a: function() {
            console.log('export from module');
        }
    }
## ES6 Modules 有四种加载方式:
### 1.按需导入：导入的变量名字必须和导出的变量名一致。
import { fn1, fn2 } from './libs'
### 2.全部导入：（命名空间导入）
import * as libs from './libs'
### 3.导入(export default)：可以取任意名字，因为一个模块只有一个export default，可以省略大括号。
import _ from 'lodash'
### 4.只运行模块而不引入任何模块中的方法或变量。
import 'lodash'