<template>
    <div> ComA
      <ComB></ComB>
    </div>
</template>
<script>
import ComB from './ComB.vue';
import { EventBus } from '../eventBus';
export default {
  components:{
   ComB,
  },
  mounted(){
   EventBus.$on("child",(msg)=>{
      console.log('A:',msg);
   })
  }
}
</script>
<style lang="scss" scoped>
 
</style>
