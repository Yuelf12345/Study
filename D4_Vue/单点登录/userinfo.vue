<template>
  <div id="userinfo">
    <h1>登录成功，学习使我快乐！</h1>

    <!-- <el-button type="primary" @click="del">退出登录</el-button> -->
  </div>
</template>

<script>
const axios = require("axios");
export default {
  name: 'userinfo',
  data () {
    return {

    }
  },
  components: {

  },
  created () {//页面加载就调用方法判断
    this.toLogin();
  },
  methods: {
    toLogin () {
      var vm = this;
      axios.get('http://localhost:8888/toLogin')
        .then(function (response) {
          if (response.data.state == 202) {
            vm.$notify({
              title: '警告',
              message: '该账号已在别处登录！',
              type: 'warning'
            });
            vm.$router.push('/login');
          }
        }).catch(function (error) {
          console.log(error)
        })
    }
    // del () {
    //   this.delCookie("session")
    //   this.$router.push('/login');
    // }
  }
}
</script>
