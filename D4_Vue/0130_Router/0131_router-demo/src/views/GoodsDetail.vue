<template>
    <div> 
        <h2>详情页面</h2>
        <h3>这是商品params{{ $route.params.id }}</h3>
        <h3>这是商品query{{ $route.query.id }}</h3>
        <button @click="HandelGoBack">go back</button>
    </div>
</template>
<script>
export default {
    // props:['id'],
   data() {
      return {
      }
   },
   created(){
    // console.log(this.$router);
   },
   computed:{
   },
   methods:{
    HandelGoBack(){
        this.$router.go(-1)
    }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
