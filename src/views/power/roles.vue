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
            <tree-roles-tag
              :role="scope.row"
              :roleList="scope.row.children"
            ></tree-roles-tag>
          </template>
        </el-table-column>
        <el-table-column prop="roleName" label="角色名称"></el-table-column>
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
              <el-button
                @click="handlePrivilege(scope.row)"
                type="warning"
                icon="el-icon-search"
                >分配权限</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="privilege">
      <el-dialog title="权限分配" :visible.sync="dialogVisible" @close="closePrivilege">
        <div>
          <el-tree
                  :data="rightsTree"
                  show-checkbox
                  node-key="id"
                  :default-checked-keys="defaultTree"
                  :default-expand-all=true
                  :props="defaultProps"
                  ref="rightsTree"
          >
          </el-tree>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitTree(scope.row)"
            >确 定</el-button
          >
        </div>
      </el-dialog>
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
    return {
      dialogVisible: false,
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      rightsTree:[],
      defaultTree:[]
    }
  },
  methods: {
    ...mapActions('power', ['storeRolesList','storeGetRightsTree','storeAllotRights']),
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handlePrivilege(role) {
      this.storeGetRightsTree('tree').then(re=>{
        if(re.meta.status===200){
          this.rightsTree=re.data
          this.getThreeLevelArray(role,this.defaultTree)
          this.dialogVisible = true
          return
        }
        this.message.error(re.meta.msg)
      })
    },
    //筛选出三级知识点生成数组进行树形选择默认
    getThreeLevelArray(objData,arr){
      if(!objData.children){
        arr.push(objData.id)
      }else {
        objData.children.map(re=>{
          this.getThreeLevelArray(re,arr)
        })
      }
    },
      submitTree(row){

          let  checkeds=[
              ...this.$refs.rightsTree.getCheckedKeys(),
              ...this.$refs.rightsTree.getHalfCheckedKeys(),
          ]
          this.storeAllotRights({
              roleId:row.id,
              rids:checkeds.join(',')
          }).then(re=>{
              if(re.data.meta.status===200){
                  this.storeRolesList()
                  this.dialogVisible = false
              }else {
                  this.message.error(re.data.meta.msg)
              }
          })
         console.log(" this.$refs.rightsTree.getCheckedKeys()")
      },
    closePrivilege(){
      this.defaultTree=[]
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
