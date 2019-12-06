/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/12/6
 *@Modified By:
 */
import request from '../../request/api'
const {rightsList} = request;
export default {
    namespaced:true,
    state:{
        rightsList:{}
    },
    mutations:{
        saveRightsList(state,payload){
                state.rightsList=payload;
        }
    },
    actions:{
        storeRightsList({commit}){
            rightsList().then(re=>{
                commit('saveRightsList',re.data)
            })
        }
    }
}
