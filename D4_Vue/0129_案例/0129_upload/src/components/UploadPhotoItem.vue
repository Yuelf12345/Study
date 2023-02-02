<template>
    <div> 
        <li>
            <div class="task-progress-status" v-show="showProgress">上传中...</div>
            <div class="progress" :style="{width:progress + '%'}"></div>
            <img :src="imUrl" alt="">
            <span>
                {{ file.name }}
            </span>
        </li> 
    </div>
</template>
<script>
export default {
    props:['progress','file'],
   data() {
      return {
        imUrl:"",
      }
   },
   created(){
    // 
    // this.setImgUrl();
    const fileRender = new fileRender();
        fileRender.readDataURL(this.file)
        fileRender.onload = ()=>{
            this.imUrl = fileRender.result
            // console.log(fileRender.result);
        }
   },
   computed:{
    showProgress(){
        return this.progress != 0 && this.progress != 100
    }
   },
   methods:{
    // setImgUrl(){
        
    // }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
