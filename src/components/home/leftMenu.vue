<template>
  <div class="leftMenu">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
      :collapse="collapseFlag"
      :default-active="path"
      :collapse-transition="false"
      router
    >
      <div class="collapseBox" @click="changeCollapse">
        {{ collapseFlag ? '＞' : '＜＜＜' }}
      </div>
      <!--一级菜单-->
      <el-submenu v-for="item in menus" :index="item.id + ''" :key="item.id">
        <template slot="title">
          <i :class="[icon[item.id], 'submenuIcon']"></i>
          <span>{{ item.authName }}</span>
        </template>
        <!--二级菜单-->
        <el-menu-item v-for="i in item.children" :index="'/'+i.path" :key="i.id">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ i.authName }}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'leftMenu',
  created() {
    this.path=this.$route.path
    // console.log("router",this.$route.path)
    this.requestMenus()
  },
  data: () => {
    return {
      icon: {
        '125': 'iconfont icon-user',
        '103': 'iconfont icon-tijikongjian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-danju',
        '145': 'iconfont icon-baobiao'
      },
      path:''
    }
  },
  computed: {
    ...mapState('login', ['menus', 'collapseFlag'])
  },
  methods: {
    ...mapMutations('login', ['changeCollapse']),
    ...mapActions('login', ['requestMenus']),
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped lang="less">
@import 'leftMenu';
</style>
