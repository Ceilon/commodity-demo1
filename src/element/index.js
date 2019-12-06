/**
 *@Author:ChaiLong
 *@Description:
 *@Date:Created in  2019/11/25
 *@Modified By:
 */
// 导入自己需要的组件
import {
    Input,
    Button,
    Form,
    FormItem,
    Message,
    Container,
    Aside,
    Header,
    Main,
    Footer,
    Avatar,
    Menu,
    Submenu,
    MenuItemGroup,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Table,
    TableColumn,
    Row,
    Col,
    Switch,
    Pagination,
    Dialog,
    Popover,
    Tag
} from 'element-ui'

const element = {
    install: function (Vue) {
        Vue.use(Input)
        Vue.use(Button)
        Vue.use(Form)
        Vue.use(FormItem)
        Vue.use(Container)
        Vue.use(Aside)
        Vue.use(Header)
        Vue.use(Main)
        Vue.use(Footer)
        Vue.use(Avatar)
        Vue.use(Menu)
        Vue.use(Submenu)
        Vue.use(MenuItemGroup)
        Vue.use(MenuItem)
        Vue.use(Breadcrumb)
        Vue.use(BreadcrumbItem)
        Vue.use(Table)
        Vue.use(TableColumn)
        Vue.use(Row)
        Vue.use(Col)
        Vue.use(Switch)
        Vue.use(Pagination)
        Vue.use(Dialog)
        Vue.use(Popover)
        Vue.use(Tag)
        Vue.prototype.$message = Message
    }
}
export default element
