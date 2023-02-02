<template>
    <div> ComC
      <button @click="handleClick">click</button>
    </div>
</template>
<script>
import { EventBus } from '../eventBus';
export default {
   mounted(){

   },
   methods:{
      handleClick(){
         EventBus.$emit("child","我是组件C")
      }    
   }
}
</script>
<style lang="scss" scoped>
 
</style>
