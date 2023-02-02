<template>
    <div> 
        <input type="file"  id="UpLoadFile" @change="handlePhoto" v-show="showAddContainer">
        <div class="task_panel" v-show="showWantUploadContainer">
            <div class="task_header">
                <h4>当前任务:1/3</h4>
                <span></span>
            </div>
                <ul class="task_body">
                    <div v-for="(item ,index) in toUploadPhotos" :key="index">
                            <UploadPhotoItem 
                            :progress="item.progress" 
                            :file="item.file"
                            ></UploadPhotoItem>
                    </div>
                </ul>
                <div>
                    <span @click="handleUpload">开始上传</span>
                </div>
        </div>
    </div>
</template>
<script>
import UploadPhotoItem from './UploadPhotoItem.vue'
import { uploadPhoto } from '@/api'
export default {
   data() {
      return {
        toUploadPhotos:[]
      }
   },
   components:{
    UploadPhotoItem
   },
   methods:{
    async handleUpload(){
            for(const item of this.toUploadPhotos){
                await uploadPhoto(item.file,(e)=>{
                    console.log(e.loaded,e.total);
                    const percent = Math.ceil((e.loaded /e.total) * 100);
                    item.progress = percent;
                })
            }
            //上传完成
            // this.reset();
            this.toUploadPhotos = [];
        },
    handlePhoto(e){
        //处理数据结构
        const photoItems = Array.from(e.target.files).map((file)=>{
            return {
                progress:0,
                file,
            }
        })
        this.toUploadPhotos.push(...photoItems);

        // console.log(this.toUploadPhotos);
        }
   },
   computed:{
    showAddContainer(){
        return this.toUploadPhotos.length === 0
    },
    showWantUploadContainer(){
        return this.toUploadPhotos.length != 0
    }
   }
}
</script>
<style lang="scss" scoped>
 
</style>
