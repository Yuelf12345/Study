<template>
  <div id="login">
    <el-form ref="form" :model="User" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="User.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="User.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toLogin">立即登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'login',
  data () {
    return {
      User: {//user实体对象
        username: '',
        password: ''
      }
    }
  },
  methods: {
    toLogin () {//登录方法
      var vm = this;
      axios.post('http://localhost:8888/login', this.User)
        .then(function (response) {
          if (response.data.state == 200) {//登录成功
            vm.$notify.success({//弹窗
              title: '登录',
              message: '登录成功！',
              position: 'bottom-right'
            });
            //登录成功后
            vm.$router.push('/user_info');//跳转页面
          } else if (response.data.state == 202) {
            vm.$message({
              type: 'error',
              message: '登录失败，用户名或密码错误！'
            });
          } else {
            vm.$message({
              type: 'error',
              message: '发生错误，登录失败！'
            });
          }
        })
        .catch(function (error) {
          console.log(error)
        })

    }
  }
}

</script>

<style>
#login {
  width: 800px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
