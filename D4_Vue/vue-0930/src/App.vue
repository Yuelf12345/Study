<template>
  <div id="app">
    {{counter}}
  </div>
  <button @click="Counter()">按钮</button>
</template>


<script>
  export default{
    el:'#app',
    data(){
      return{
        counter:0
      }
    },
    methods:{
      Counter(){
        this.counter+=5
      }
    },
  }
</script>

<style lang="scss" scoped>
 
</style>
