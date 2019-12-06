/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/11/27
 *@Modified By:
 */ /**
 * api接口的统一出口
 */
// 文章模块接口
import loginRequest from './login'
import user from './user'
// 其他模块的接口……
// console.log("login",login({username:'ss',password:'sss'}));
// 导出接口
export default {
  ...loginRequest,
  ...user
  // ……
}
