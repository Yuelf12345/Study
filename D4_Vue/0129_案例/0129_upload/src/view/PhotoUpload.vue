<template>
    <div> 
        <!-- <div class="content-list">
            <div class="start">已上传</div>
        </div> -->
        <div class="start" @click="showUploadView = true">已上传</div>
        <div v-for="item in photos" :key="item.id">
            <PhotosItem :image-name=item.id  :image-url=item.name></PhotosItem>
        </div>
        
        <header>
            <el-dialog :visible.sync="showUploadView" title="上传照片">
                <!-- <button class="UpLoadBtn">上传</button>
                <input type="file" style="display: none;" id="UpLoadFile"> -->
                <UploadView @uploadComplete="handleUploadComplete"></UploadView>
            </el-dialog>
        </header>
    </div>
</template>

<script>
import { getPhotos } from "../api/index";
import PhotosItem  from "../components/PhotoItem.vue";
import UploadView from "@/components/UploadView.vue";
export default {
   data() {
      return {
        imgUrl:"",
        showUploadView:false,
        photos:[]
      }
   },
   components:{
    PhotosItem,UploadView
   },
   async created(){
    const {data:responseData} = await getPhotos();
    this.photos = responseData[0]
    // (...this.photos).map(item=>{
    //     this.imgUrl = 'img/upload/'+this.item.name
    // })
    console.log(this.photos);
   },
   methods:{
    async handleUploadComplete(){
        const {data:responseData} = await getPhotos();
        this.photos = responseData[0]
    }
   },
}
</script>
<style lang="scss" scoped>
 
</style>
