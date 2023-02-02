<template>
    <div>
        <div class="content-list">
            <img :src="imgUrl" alt="">
            <span>{{ imageName }}</span>
        </div> 
    </div>
</template>

<script>
export default {
   data() {
      return {
      }
   },
   props:["imageName","imgUrl"],
}
</script>
<style lang="scss" scoped>
 
</style>
