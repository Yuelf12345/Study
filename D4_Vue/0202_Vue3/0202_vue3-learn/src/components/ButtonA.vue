<template>
    <div> 
    </div>
</template>
<script>
import { onMounted } from 'vue';

//可以封装到函数内
function test(){
    //生命周期函数
    onMounted(()=>{
        console.log("buttonA onMounted");
    })
}
export default {
   setup(){
    //组件初始化的入口

    test()
   }
}
</script>
<style lang="scss" scoped>
 
</style>
