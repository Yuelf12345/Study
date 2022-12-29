//在当前文件中引入需要依赖的外部模块
//

//libs = libs.js中的 Module
import * as libs from './libs.js';
//libsDefault = libs.js中的 Module.default
import libsDefault from './libs.js';
//
import {fn,todo} from './libs.js';

console.log('导入的fn',libs);
console.log('默认导入的fn',libsDefault);

console.log('index.js');

libs.fn();
libs.todo();