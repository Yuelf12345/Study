<!-- 报错
    spring 里加参数会报错   hostPatchProp is not a function
    解决 canvas/index 定义patchProp接口 

    container 里面加注释会报错 hostCreateCommon is not a function
    解决    定义CreateCommon接口
    container 里面加标签会报错 hostCreateElement is not a function
    解决    定义CreateElement接口

    CreateCommon 和 CreateElement 区别
    第一个是创建一个HTML元素的 如 TABLE， SELECT OPTION INPUT等等都行的 
    第二个是创建一个注释的，就是给HTML添加注释  
-->
<template>
    <container>
        <sprite :texture="startPageImg"></sprite>
        <sprite :texture="startButtonImg"
        x="230" y="510" 
        :interactive = "true"
        @click="handleClick"
        ></sprite>
    </container>
</template>
<script>
import startPageImg from '../assets/start_page.jpg'
import startButtonImg from '../assets/startBtn.png'

export default {
    setup(props,{emit}){
        function handleClick(){
            console.log('click Login');
            //发起切换页面
            emit("change-view","GameView")
        }

        return {
            handleClick,
            startPageImg,
            startButtonImg
        }
    }
}
</script>
<style lang="scss" scoped>
 
</style>
