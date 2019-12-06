import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import users from './user'
Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    login,
    users
  },
  state:{
    token:''
  },
  mutations: {
    changeNetwork(){
    console.log("=>>>>>>>>>>>>>>>>>>>>>>")
    }
  }
  ,
  // state: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
