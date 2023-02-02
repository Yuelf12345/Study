<template>
    <div> 
        <h2>about</h2>
        <button @click="handleToHome">to back</button>
        {{ $route.params.id }}
        <div><h3>name:</h3></div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    props:["id"],
   data() {
      return {
      }
   },
   created(){
    console.log(this.id);
    console.log(this.$route);
   },
   beforeRouteEnter(to,from,next){
    console.log('beforeRouteEnter******')
                console.log(to);
                console.log(from);
                console.log(next);
                next()
   },
//    beforeRouteLeave(){
//         // console.log('离开');
//    },
   computed:{
   },
   methods:{
    handleToHome(){
        this.$router.go(-1)
    }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
