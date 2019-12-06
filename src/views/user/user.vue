<template>
  <div class="user">
    <!--面包屑块-->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!--列表块-->
    <div class="userTable">
      <div class="tableHeader">
        <el-row :gutter="10">
          <el-col :span="6">
            <el-input
              placeholder="请输入内容"
              v-model="selectSomeString"
              class="input-with-select"
              clearable
              @clear="search"
              @keyup.enter.native="search"
            >
              <el-button
                @click="search"
                slot="append"
                icon="el-icon-search"
              ></el-button>
            </el-input>
          </el-col>
          <el-col :span="3"
            ><el-button
              type="primary"
              @click.native="changeUserDialogVisible(true)"
              >添加用户</el-button
            ></el-col
          >
        </el-row>
      </div>

      <div class="tableBox">
        <el-table
          :data="
            userList.users && userList.users.length > 0 ? userList.users : []
          "
          stripe
          style="width: 100%"
        >
          <el-table-column type="index" width="130"> </el-table-column>
          <el-table-column prop="username" label="姓名"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="mobile" label="电话"> </el-table-column>
          <el-table-column prop="role_name" label="角色"> </el-table-column>
          <el-table-column label="状态" width="130">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.mg_state"
                @change="handleUserState(scope)"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作" width="250">
            <template slot-scope="scope">
              <el-row :gutter="1">
                <el-col :span="8">
                  <el-button
                    @click="handleEditUser(scope)"
                    type="primary"
                    icon="el-icon-edit"
                  ></el-button>
                </el-col>
                <el-col :span="8">
                  <el-button
                    @click="handleDeleteUser(scope)"
                    type="danger"
                    icon="el-icon-delete"
                  ></el-button>
                </el-col>
                <el-col :span="8">
                  <el-button type="warning" icon="el-icon-star-off"></el-button
                ></el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!--分页器-->
      <div class="pagination" v-show="userList">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="userList.pagenum"
          :page-sizes="[1, 2, 5, 10]"
          :page-size="0"
          layout="total, sizes, prev, pager, next, jumper"
          :total="Math.ceil(userList.total / 10)"
        >
        </el-pagination>
      </div>
    </div>
    <user-dialog></user-dialog>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import UserDialog from '../../components/user/userDialog'

export default {
  name: 'user',
  data() {
    return {
      selectSomeString: '',
      value1: true,
      popoverVisible: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      queryInfo: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      form: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      }
    }
  },
  created() {
    this.getUserList({ pagenum: 1, pagesize: 10 })
  },
  computed: {
    ...mapState('users', ['userList','editData'])
  },
  methods: {
    ...mapActions('users', [
      'getUserList',
      'ActChangeUserState',
      'ActCreatedUser',
      'ActDeleteUser'
    ]),
    ...mapMutations('users', ['changeEditData', 'changeUserDialogVisible']),
    handleSizeChange(val) {
      this.getUserList({ pagenum: this.userList.pagenum, pagesize: val })
    },
    handleCurrentChange(val) {
      this.getUserList({ pagenum: val, pagesize: 10 })
    },
    handleUserState(userInfo) {
      this.ActChangeUserState({
        uId: userInfo.row.id,
        type: userInfo.row.mg_state
      })
        .then(re => {
          this.$message.success(re.data.meta.msg)
        })
        .catch(error => {
          this.$message.error(error.data.meta.msg)
        })
    },
    handleDeleteUser(userInfo) {
      this.ActDeleteUser({ id: userInfo.row.id }).then(re => {
        if (re.meta.status === 200) {
          this.$message.success(re.meta.msg)
          this.getUserList({ pagenum: 1, pagesize: 10 })
        } else {
          this.$message.error(re.meta.msg)
        }
      })
    },
    search() {
      this.getUserList({
        query: this.selectSomeString,
        pagenum: 1,
        pagesize: 4
      })
    },
    handleEditUser(scope) {
      // const copyEditData = JSON.parse(JSON.stringify(this.editData))
      // copyEditData.editData = scope.row
      // console.log("copyEditDatacopyEditData",copyEditData)
      this.changeEditData(scope.row)
      this.changeUserDialogVisible(true)
    }
  },
  components: {
    UserDialog
  }
}
</script>

<style scoped lang="less">
@import 'user';
</style>
