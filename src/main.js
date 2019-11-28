import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/initCss.css'
import element from './element'
import axios from 'axios';


axios.defaults.baseUrl='http://127.0.0.1:8888/api/private/v1/';
//给全局添加一个原型方法
Vue.config.productionTip = false;
Vue.use(element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
