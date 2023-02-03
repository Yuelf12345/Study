<template>
    <div> 
        mixin
        <button @click="add">add</button>
    </div>
</template>
<script>
import mixinA from '../mixin/index';
export default {
    mixins:[mixinA],
   data() {
      return {
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
