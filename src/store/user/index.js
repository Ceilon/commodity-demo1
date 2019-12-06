/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/12/2
 *@Modified By:
 */
import request from '../../request/api'
const { userList, changeUserState, createdUser, deleteUser, editUser } = request
export default {
  namespaced: true,
  state: {
    userList: [],
      dialogFormVisible: false,
      editData: {
        id:''
      }
  },
  mutations: {
    saveUserList(state, payload) {
      state.userList = payload.data.data
    },
    changeUserDialogVisible(state, payload) {
      state.dialogFormVisible = payload
    },
    changeEditData(state, payload) {
      state.editData = payload
    }
  },
  actions: {
    getUserList({ commit }, payload) {
      userList(payload).then(re => {
        commit('saveUserList', re)
      })
    },
    ActChangeUserState({ commit }, payLoad) {
      return new Promise(resolve => {
        changeUserState(payLoad).then(re => {
          resolve(re)
        })
      })
    },
    ActCreatedUser({ commit }, payload) {
      return new Promise(resolve => {
        createdUser(payload).then(re => {
          resolve(re.data)
        })
      })
    },
    ActDeleteUser({ commit }, payload) {
      return new Promise(resolve => {
        deleteUser(payload).then(re => {
          resolve(re.data)
        })
      })
    },
    ActEditUser({ commit }, payload) {
      return new Promise(resolve => {
        editUser(payload).then(re => resolve(re.data))
      })
    }
  }
}
