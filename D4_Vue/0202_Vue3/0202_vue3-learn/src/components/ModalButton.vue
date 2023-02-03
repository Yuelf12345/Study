<template>
    <div> 
        <button @click="show=true">open</button>
        <div v-if="show">
            <!-- 传送门 指定视图添加位置 -->
            <Teleport to="body">
                <div>
                    modal
                    <button @click="show=false">close</button>
                </div>
            </Teleport>
        </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
        show:false
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style lang="scss" scoped>
 
</style>
