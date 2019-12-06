import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import users from './user'
import power from './power/power'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    login,
    users,
    power
  },
  state:{
    token:''
  }
  // state: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
