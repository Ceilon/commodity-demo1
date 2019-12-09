/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/12/6
 *@Modified By:
 */
import request from '../../request/api'
const {rightsList,rolesList} = request;
export default {
    namespaced:true,
    state:{
        rightsList:{},
        rolesList:[]
    },
    mutations:{
        saveRightsList(state,payload){
                state.rightsList=payload;
        },
        saveRolesList(state,payload){
            state.rolesList=payload;
        }
    },
    actions:{
        storeRightsList({commit}){
            rightsList().then(re=>{
                commit('saveRightsList',re.data)
            })
        },
        storeRolesList({commit}){
            rolesList().then(re=>{
                commit('saveRolesList',re.data)
            })
        }
    }
}
