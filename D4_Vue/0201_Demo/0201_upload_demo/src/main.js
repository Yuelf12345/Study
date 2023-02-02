import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import store from './store/index';

import './assets/css/login.css'
import './assets/css/index.css'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
