<template name="login">
  <div class="login">
    <div class="loginBox">
      <div class="imageBox">
        <div class="imageCentre">
          <img src="../../assets/logo.png" alt="" />
        </div>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="loginCenter">
          <el-form-item label-width="0" prop="username">
            <el-input
              prefix-icon="el-icon-user"
              placeholder="请输入账号"
              v-model="ruleForm.username"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item label-width="0" prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="ruleForm.password"
              show-password
            ></el-input>
          </el-form-item>
        </div>
      </el-form>
      <div class="loginFooter">
        <el-button
          @keyup.enter.native="login"
          type="primary"
          @click.native="login"
          >登录
        </el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { Message } from 'element-ui'

const { mapActions } = createNamespacedHelpers('login')
export default {
  name: 'login',
  components: {},
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: this.verifyUsername, trigger: 'blur' }],
        password: [{ validator: this.verifyPassword, trigger: 'blur' }]
      }
    }
  },
  methods: {
    ...mapActions(['userLogin']),
    verifyUsername(rule, value, callback) {
      // let p =  /^[a-zA-Z]\w{5,11}$/;
      let p = /^[0-9]|[A-Za-z]*$/
      let r = p.test(value)
      if (!r) {
        callback(new Error('帐号只能输入6-12个以字母开头的组合'))
        return
      }
      callback()
    },
    verifyPassword(rule, value, callback) {
      // let p = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z_]{8,16}$/;
      let p = /^[0-9]|[A-Za-z]*$/
      let r = p.test(value)
      if (value === '') {
        callback(new Error('密码不能为空'))
        return
      } else if (!r) {
        callback(new Error('密码必须是不能以数字开头6-10位之间的字母、_、@、.'))
        return
      }
      callback()
    },
    //重置
    resetForm() {
      this.$refs.ruleForm.resetFields()
    },
    //登录
    login() {
      this.$refs.ruleForm.validate(valid => {
        //valid验证表单是否通过
        if (valid) {
          this.userLogin(this.ruleForm).then(re => {
            const { msg, status } = re.data.meta
            if (status !== 200) {
              Message.error(msg)
              return
            }
            Message.success(msg)
            localStorage.setItem('userData',JSON.stringify(re.data.data))
            this.$router.push({ name: 'home' })
          }).catch((e) => {
            // console.log("error",e)
          })

          // console.log('验证通过', this.ruleForm)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
@import './login';

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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
