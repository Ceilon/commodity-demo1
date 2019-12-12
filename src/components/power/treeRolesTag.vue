<template>
  <div class="treeRolesTag">
    <el-row
      type="flex"
      class="rolesRows"
      v-for="(item, index) in roleList"
      :key="index"
    >
      <!--一级权限-->
      <el-col :span="5" class="firstBox">
        <el-tag type="primary">{{ item.authName }}</el-tag>
        <i class="el-icon-caret-right"></i>
      </el-col>

      <!--二级和三级权限-->
      <el-col :span="19" class="secondBox">
        <el-row
          type="flex"
          v-for="t in item.children"
          class="secondBoxRow"
          :key="t.id"
        >
          <el-col class="secondBoxRowCol1" :span="6">
            <el-tag    @close="removeTags(t)" type="success" closable>{{ t.authName }}</el-tag>
            <i class="el-icon-caret-right"></i>
          </el-col>
          <el-col class="secondBoxRowCol2" :span="18">
            <el-tag
              @close="removeTags(s)"
              closable
              type="warning"
              v-for="s in t.children"
              :key="s.id"
              >{{ s.authName }}</el-tag
            >
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'treeRolesTag',
  props: ['roleList', 'role','updateRole'],
  methods: {
    ...mapActions('power', ['storeDeleteRole','storeRolesList']),
    removeTags(obj) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
            console.log("reolessssssssssssssss",this.role)
            const callParam={roleId:this.role.id,rightId:obj.id}
            this.storeDeleteRole(callParam).then(re=>{
                if(re.meta.status===200){
                    // console.log("re.datare.data",re.data)
                    this.updateRole(re.data)
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                }else {
                    this.$message.error(re.mata.msg)
                }
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
  }
}
</script>

<style scoped lang="less">
@import 'treeRolesTag';
</style>
