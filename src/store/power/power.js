/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/12/6
 *@Modified By:
 */
import request from '../../request/api'
const { rightsList, rolesList, deleteRole, getRightsTree,allotRights} = request
export default {
  namespaced: true,
  state: {
    rightsList: {},
    rolesList: [],
    rightsTree: []
  },
  mutations: {
    saveRightsList(state, payload) {
      state.rightsList = payload
    },
    saveRolesList(state, payload) {
      state.rolesList = payload
    },
    updateRole(state, payload) {
      for (let i = 0; i < state.rolesList.data.length; i++) {
        let data = state.rolesList.data[i]
        if (data.id === payload.roleId) {
          data.children = payload.roleData
          break
        }
      }
    }
  },
  actions: {
    storeRightsList({ commit }) {
      rightsList().then(re => {
        commit('saveRightsList', re.data)
      })
    },
    storeRolesList({ commit }) {
      rolesList().then(re => {
        commit('saveRolesList', re.data)
      })
    },
    storeDeleteRole({ commit }, payload) {
      return new Promise(resolve => {
        deleteRole(payload).then(re => {
          resolve(re.data)
        })
      })
    },
    storeGetRightsTree({ commit }, payload) {
      return new Promise(resolve => {
        getRightsTree(payload).then(re => {
          if(re.data.meta.status===200){
            resolve(re.data)
          }
        })
      })
    },
    storeAllotRights({commit},payload){
      return new Promise(resolve => {
        allotRights(payload).then(re=>{
            if(re.data.meta.status===200){
              resolve(re.data)
            }
        })
      })

    }
  }
}
