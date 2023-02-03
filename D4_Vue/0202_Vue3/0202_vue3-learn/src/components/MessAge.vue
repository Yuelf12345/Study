<template>
    <div> 
        {{ info }}
        <div>
            {{ msg }}
        </div>
    </div>
</template>
<script>
import { onMounted,onBeforeMount,reactive,ref} from 'vue';
export default {
   setup(){
    /**
     * //composition api
     * 生命周期 bc c
     */
     onMounted(()=>{
        console.log('MessAge mounted');
     });
     onBeforeMount(()=>{
        console.log('MessAge beforeMount');
     })
     
     // 响应式数据 接受引用类型 object array 
     const info = reactive({msg:"hhh"});
     //值类型使用ref创建
     const msg = ref("hahaha");
     console.log(info);
     console.log(msg);
     //导出
     return {
        info,msg
     }
   }
}
</script>
<style lang="scss" scoped>
 
</style>
