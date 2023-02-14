import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';

import './assets/css/login.css'
import './assets/css/index.css'

import "element-ui/lib/theme-chalk/index.css"
import ElementUI from 'element-ui';


Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
