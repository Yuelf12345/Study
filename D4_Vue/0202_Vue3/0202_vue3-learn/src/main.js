//为了支持tree-shaking 导入使用ESM标准import,export语法实现模块变量的导入和导出 
import { createApp } from 'vue'
import App from './App.vue'

// options api
// composition api  

//唱
//跳
//rap

/**
 * 逻辑复用
 * mixin 的问题
 * - 来源不清晰
 * - 命名冲突 解决方案(mixin $_)加前缀
 * - 副作用
 */

createApp(App).mount('#app')
