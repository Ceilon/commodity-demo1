/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/11/25
 *@Modified By:
 */
import request from '../../request/api'
const { login, menus } = request
// import axios from 'axios'
export default {
  //注意这里不是namespace
  namespaced: true,
  state: {
    menus: [],
    collapseFlag: false
  },
  mutations: {
    addMenus(state, payload) {
      state.menus = payload
    },
    changeCollapse(state){
      state.collapseFlag=!state.collapseFlag
    }
  },
  actions: {
    userLogin({ commit }, payload) {
      // axios.post('http://127.0.0.1:8888/api/private/v1/login',payload)
      return new Promise(resolve => {
        login(payload).then(re => {
          resolve(re)
        })
      })
      // request.login(payload)
      // axios.post('http://127.0.0.1:8888/api/private/v1/login',payload).then((re)=>{
      //     console.log("rere",re)
      // })
    },
    requestMenus({ commit }) {
        //新增一个仿京东页面
        menus().then(re => {
          let newMenus = [...re.data.data];
          newMenus=re.data.data.map(t=>{
            if(t.authName==='商品管理'){
              t.children.push({
                id:109,
                authName:'仿京东页',
                path:'jd'
              })
            }
            return t
          })
          commit('addMenus', newMenus)
        })
    }
  },
  getters: {},
  modules: {}
}
