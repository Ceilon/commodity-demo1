/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/11/25
 *@Modified By:
 */
import request from '../../request/api'
// import axios from 'axios'
export default {
    //注意这里不是namespace
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        userLogin({commit}, payload) {
            // axios.post('http://127.0.0.1:8888/api/private/v1/login',payload)
            return new Promise((resolve)=>{
                const {login} = request;
                // console.log("login", login);
                login(payload).then(re => {
                    resolve(re)
                })
            });

            // request.login(payload)
            // axios.post('http://127.0.0.1:8888/api/private/v1/login',payload).then((re)=>{
            //     console.log("rere",re)
            // })
        }
    },
    getters:{

    },
    modules: {}
}