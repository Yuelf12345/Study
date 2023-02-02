<template>
    <div class="parent"> 
        <h2>parent</h2>
        <ChildA title="props传值" ref="ComA" @child="handleChild"></ChildA>
        <input type="text" name="" id="" ref="input">
    </div>
</template>
<script>
import ChildA from './ChildA.vue';
export default {
    components:{
        ChildA
    },
   data() {
      return {
      }
   },
   created(){
   },
   mounted(){
    this.$children[0].data = '$传值'
    // this.$children[0].getData();
    // console.log( this.$refs.ComA.getData());
    this.$refs.input.focus()
   },
   computed:{
   },
   methods:{
    handleChild(msg){
        console.log(msg);
    }
   },
}
</script>
<style lang="css" scoped>
    .parent{
        border: 2px solid black;
    }
</style>
