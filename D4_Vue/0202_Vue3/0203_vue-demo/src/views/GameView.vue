<!-- 报错
    spring 里加参数会报错   hostPatchProp is not a function
    解决 canvas/index 定义patchProp接口 

    container 里面加注释会报错 hostCreateCommon is not a function
    container 里面加标签会报错 hostCreateElement is not a function

    CreateCommon 和 CreateElement 区别
    第一个是创建一个HTML元素的 如 TABLE， SELECT OPTION INPUT等等都行的 
    第二个是创建一个注释的，就是给HTML添加注释  
-->
<template>
    <container>
        <sprite :texture="mapImg"></sprite>
    </container>
</template>
<script>
import mapImg from '../assets/map.jpg'

export default {
    setup(){
        return {
            mapImg
        }
    }
}
</script>
<style lang="scss" scoped>
 
</style>
