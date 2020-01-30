/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/12/6
 *@Modified By:
 */
/**
 * article模块接口列表
 */
import base from '../base' // 导入接口域名列表
import axios from '../../http' // 导入http中创建的axios实例
// import qs from 'qs'; // 根据需求是否导入qs模块


//权限列表
const article = {
    rightsList() {
        // axios.post('/saffaww',{name:'ssss'})
        return axios.get(`${base.sq}/rights/list`)
    },
    rolesList() {
        // axios.post('/saffaww',{name:'ssss'})
        return axios.get(`${base.sq}/roles`)
    },
    deleteRole(params){
        return axios.delete(`${base.sq}/roles/${params.roleId}/rights/${params.rightId}`)
    },
//    获取所有权限值，提供给权限分配使用
    getRightsTree(params){
        return axios.get(`${base.sq}/rights/${params}`)
    },
    //分配权限
    allotRights(params){
        return axios.post(`${base.sq}/roles/${params.roleId}rights`,params.rids)
    }

}

export default article
