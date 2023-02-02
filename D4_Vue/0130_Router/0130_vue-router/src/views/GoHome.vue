<template>
    <div> 
       <h2>home</h2>
       <p>
            <!-- <router-link to="/about/123">to about</router-link> -->
            <button @click="handleToAbout">to about</button>
            <router-link :to="{name:'aboutView'}">to about</router-link>
       </p>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    handleToAbout(){
        console.log(this.$router);
        // 跳转，有历史记录
        this.$router.push({
            name:"aboutView"
        })
        // 跳转，没有历史记录
        // this.$router.replace({
        //     name:"aboutView"
        // })
    }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
