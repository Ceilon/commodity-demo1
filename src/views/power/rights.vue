<template>
  <div class="rights">
    <!--面包屑块-->
    <div class="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">权限管理</a></el-breadcrumb-item>
        <el-breadcrumb-item>权限列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="rightsTable">
      <el-table :data="rightsList.data" style="width: 100%">
        <el-table-column label="#" type="index"> </el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column label="权限等级">
          <template slot-scope="scope">
            <el-tag :type="scope.row.level==='0'?'':((scope.row.level==='1')?'success':'warning')">{{ convertChinese(scope) }} 级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'rights',
  created() {
    this.storeRightsList()
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('power', ['rightsList']),
  },
  methods: {
    ...mapActions('power', ['storeRightsList']),
    convertChinese(nmb){
      const nmbC=['一','二','三','四','五','六','七','八','九'];
      // console.log("!!!!!!!!!!!!!",nmb.row.level)
      return nmbC[parseInt(nmb.row.level,10)]
    }
  }
}
</script>

<style scoped lang="less">
@import 'rights';
</style>
