<template>
  <div id="app">
    <!-- <el-button type="primary" size="medium ">主要按钮</el-button> -->
    <PhotoUpload></PhotoUpload>
  </div>
</template>

<script>
import PhotoUpload from "./view/PhotoUpload.vue";
export default {
  name: 'App',
  components:{
    PhotoUpload
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
