<template>
    <div> ComA
      <!-- <ComB title="A发送C" ></ComB> -->
      <ComB v-bind="$attrs"></ComB>
    </div>
</template>
<script>
 import ComB from './ComB.vue';
export default {
   // props:["title"],
   //取消暴露到元素上
   inheritAttrs:false,
   provide(){
     return {
      foo:'provide/inject方法',
      comA:this
     }
   },
  components:{
   ComB,
  },
   data() {
      return {
      }
   },
   created(){
   },
   mounted(){
      console.log('没有定义的参数都会在attrs里',this.$attrs);
   },
   computed:{
   },
   methods:{
      getTitle(){
         return 'hello'
      }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
