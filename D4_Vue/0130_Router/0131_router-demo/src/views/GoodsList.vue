<template>
    <div> 
        <h2>商品页面</h2>
        <p>
            <router-link to="/detail/123">link传参商品123</router-link>
            <router-link to="/detail/456">link传参商品456</router-link>
        </p>
        <div>
            <button @click="handleByPush(123)">商品123push传参</button>
            <button @click="handleByPush(456)">商品456push传参</button>
        </div>
        <div>
            <button @click="handleByName(123)">商品123name传参</button>
            <button @click="handleByName(456)">商品456name传参</button>
        </div>
        <div>
            <button @click="handleByQuery(123)">商品123query传参</button>
            <button @click="handleByQuery(456)">商品456query传参</button>
        </div>
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
   methods:{
    handleByPush(id){
        console.log(this.$router);
        this.$router.push({
            path:   `/detail/${id}`
        })
    },
    handleByName(id){
        this.$router.push({
            name:"GoodsDetail",
            params:{
                id
            }
        })
    },
    handleByQuery(id){
        this.$router.push({
            // name:"GoodsDetail",
            path:   `/detail/:id`,
            query:{
                id
            }
        })
    }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
