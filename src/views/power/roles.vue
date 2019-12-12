<template>
  <div class="roles">
    <!--面包屑块-->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">权限管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="roleTableBox">
      <!--添加角色按钮-->
      <div class="addRolesBox">
        <el-button type="primary">添加角色</el-button>
      </div>

      <!--表格-->
      <el-table
        :data="rolesList.data"
        stripe
        style="width: 100%;margin-bottom: 20px;"
        border
      >
        <!--展开属性tag项-->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <tree-roles-tag :updateRole="()=>updateRole(data='',role=scope.row)" :role="scope.row" :roleList="scope.row.children"></tree-roles-tag>
          </template>
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="operationBox">
              <el-button
                type="primary"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)"
                >编辑</el-button
              >
              <el-button
                type="danger"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)"
                >删除</el-button
              >
              <el-button type="warning" icon="el-icon-search"
                >分配权限</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import TreeRolesTag from '../../components/power/treeRolesTag'
export default {
  name: 'roles',
  components: {
    TreeRolesTag
  },
  created() {
    this.storeRolesList()
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('power', ['storeRolesList']),
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    updateRole(data,role){
      console.log("data",data,'fffffffffffffffffffff',role)
      role.children=data
    }
  },
  computed: {
    ...mapState('power', ['rolesList'])
  }
}
</script>

<style scoped lang="less">
@import 'roles';
</style>
