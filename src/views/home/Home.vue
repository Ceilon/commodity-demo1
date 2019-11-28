<template>
  <div class="home">
    <a href="javascript:;" @click="loginOut">退出登录</a>
  </div>
</template>

<script>
// @ is an alias to /src
// import {} from 'element-ui'
export default {
  name: 'home',
  components: {},
  methods: {
    loginOut() {
      localStorage.removeItem('token')
      this.$router.push('/login')
      this.$message('退出登录')
    }
  }
}
</script>
<style lang="less" scoped>
@import './Home';
</style>
