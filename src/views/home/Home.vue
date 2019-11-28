<template>
  <div class="home">
    <el-container class="home-container">
      <el-header
        ><div class="avatarBox">
          <el-avatar
            :size="70"
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574940686247&di=a76b844a8a76ff0956284d779c4ffe99&imgtype=jpg&src=http%3A%2F%2Ftva4.sinaimg.cn%2Fcrop.0.0.664.664.180%2Fd7758708jw8f8hy65l9qkj20ig0igdg9.jpg"
          >
          </el-avatar>
        <span class="avatarBoxSpan">电商管理平台</span>
        </div>
        <div class="loginOut">
          <span>{{userName}}</span>
          <a href="javascript:;" @click.prevent="loginOut">退出登录</a>
        </div></el-header
      >
      <el-container>
        <el-aside width="200px">
          <left-menu></left-menu>
        </el-aside>
        <el-container>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import LeftMenu from '../../components/home/leftMenu'
// @ is an alias to /src
// import {} from 'element-ui'
export default {
  name: 'home',
  components: {
    LeftMenu
  },
  methods: {
    loginOut() {
      localStorage.removeItem('userData')
      this.$router.push('/login')
      this.$message('退出登录')
    }
  },
  computed:{
    userName:()=>{
      let user = JSON.parse(localStorage.getItem('userData')).username
      // console.log("useruser",user)
      return user
    }
  }
}
</script>
<style lang="less" scoped>
@import './Home';
</style>
