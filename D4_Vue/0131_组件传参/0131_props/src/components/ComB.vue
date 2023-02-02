<template>
    <div> ComB
      <!-- <ComC :title=title></ComC> -->
      <ComC v-bind="$attrs" v-on="$listeners"></ComC>
    </div>
</template>
<script>
 import ComC from './ComC.vue';
export default {
   components:{ComC},
   // props:["title"],
   data() {
      return {
      }
   },
   created(){
   },
   mounted(){
      console.log('B',this.$attrs);
      console.log('B',this);
   },
   computed:{
   },
   methods:{
   },
}
</script>
<style lang="scss" scoped>
 
</style>
