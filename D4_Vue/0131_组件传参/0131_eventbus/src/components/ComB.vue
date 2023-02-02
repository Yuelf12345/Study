<template>
    <div> ComB
      <ComC></ComC>
    </div>
</template>
<script>
 import ComC from './ComC.vue';
import { EventBus } from '../eventBus';
export default {
   components:{ComC},
   mounted(){
   EventBus.$on("child",(msg)=>{
      console.log('B:',msg);
   })
  }
}
</script>
<style lang="scss" scoped>
 
</style>
