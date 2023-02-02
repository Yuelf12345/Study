<template>
    <div class="child"> 
        <h4>Child</h4>
        <h4>父传子 {{ title }} --- {{ cont }}</h4>
        <button @click="handleClick">emit</button>
    </div>
</template>
<script>
export default {
    props:["title","cont"],
   data() {
      return {
      }
   },
   created(){
   },
   computed:{
   },
   methods:{
    getData(){
        return this.cont
    },
    handleClick(){
        // this.$emit("child","child发送过来的数据");
        console.log(this.$parent);
    }
   },
}
</script>
<style lang="css" scoped>
    .child{
        border: 1px solid black;
    }
</style>
