<template>
    <div> 
        ComA 10年后年龄
        {{ tenYearOld }}
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
   computed:{
    //语法糖
    ...mapGetters(["tenYearOld"])
    // tenYearOld(){
    // //   return this.$store.state.age + 10
    //     return this.$store.getters.tenYearOld
    // },
   },
}
</script>
<style lang="scss" scoped>
 
</style>
