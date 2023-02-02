<template>
  <div id="app">
    hello router!
    <router-view></router-view>
    <router-view name="one"></router-view>
    <router-view name="two"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
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
