import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
// console.log(ElementUI);

Vue.config.productionTip = false  //设置为 false 以阻止 vue 在启动时生成生产提示。
//use
Vue.use(ElementUI);
/**
 * 插件原理
    function install(vue){
      const {Button} = ElementUI
      Vue.component(Button.name,Button);
    }
 */

new Vue({
  render: h => h(App),
}).$mount('#app')