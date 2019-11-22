<template>
    <div class="login">
        <div class="loginBox">
            <div class="imageBox">
                        <div class="imageCentre">
                            <img src="../../assets/logo.png" alt="">
                        </div>
            </div>
            <div class="loginCenter">
                <el-input
                        prefix-icon="el-icon-user"
                        placeholder="请输入账号"
                        v-model="username"
                        clearable>
                </el-input>
                <el-input prefix-icon="el-icon-lock" placeholder="请输入密码" v-model="password" show-password></el-input>
            </div>
            <div class="loginFooter">
                <el-button type="primary">登录</el-button>
                <el-button type="info">重置</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        components:{
        },
        data() {
            return {
                username:'',
                password: ''
            }
        }
    }
</script>

<style scoped lang="less">
@import "./login";
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>