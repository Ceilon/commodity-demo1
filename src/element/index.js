/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/11/25
 *@Modified By:
 */
// 导入自己需要的组件
import {Input,Button,Form,FormItem,Message} from 'element-ui'
const element = {
    install: function (Vue) {
        Vue.use(Input);
        Vue.use(Button);
        Vue.use(Form);
        Vue.use(FormItem);
        Vue.prototype.$message = Message;
    }
};
export default element