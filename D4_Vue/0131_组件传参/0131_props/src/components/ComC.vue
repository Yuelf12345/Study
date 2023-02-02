<template>
    <div> ComC
      <!-- {{ title }} -->
      {{ $attrs.title }}
      <div></div>
      {{ foo }}
    </div>
</template>
<script>
export default {
   inject:["foo","comA"],
   // props:["title"],
   mounted(){
      console.log(this.comA);
      const ComATitle = this.comA.getTitle()
      console.log(ComATitle);
   }
}
</script>
<style lang="scss" scoped>
 
</style>
