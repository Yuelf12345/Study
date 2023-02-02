<template>
    <div> 
        <!-- 让disabled挂到button上而不是外面的div -->
        <button :disabled="$attrs.disabled">click</button>
    </div>
</template>
<script>
export default {
  inheritAttrs:false
}
</script>
<style lang="scss" scoped>
 
</style>
