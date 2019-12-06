/**
 * article模块接口列表
 */
import base from '../base' // 导入接口域名列表
import axios from '../../http' // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块

const article = {
    userList(params){
        return axios.get(`${base.sq}/users`,{
            params: params
        })
    },
    changeUserState(params){
        return axios.put(`${base.sq}/users/${params.uId}/state/${params.type}`)
    },
    createdUser(params){
        return axios.post(`${base.sq}/users`,params)
    },
    deleteUser(params){
        return axios.delete(`${base.sq}/users/${params.id}`)
    },
    editUser(params){
        return axios.put(`${base.sq}/users/${params.id}`,params)
    }
    // // 新闻列表
    // articleList () {
    //     return axios.get(`${base.sq}/topics`);
    // },
    // // 新闻详情,演示
    // articleDetail (id, params) {
    //     return axios.get(`${base.sq}/topic/${id}`, {
    //         params: params
    //     });
    // },
    // post提交
}

export default article
