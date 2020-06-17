import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/initCss.css'
import element from './element'
import axios from 'axios';
import './assets/fonts/iconfont.css'


axios.defaults.baseUrl='http://1.207.114.131:8888/api/private/v1/';
//给全局添加一个原型方法
Vue.config.productionTip = false;
Vue.use(element);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
