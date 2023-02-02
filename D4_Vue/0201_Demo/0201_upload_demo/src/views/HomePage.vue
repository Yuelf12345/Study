<template>
    <div class="container">
        <div class="index-wrapper">
            当前用户{{ username }}--{{ password }}
            <UpLoaded></UpLoaded>
            <UPLoading></UPLoading>
            <button class="btnHome" id="btnOut">退出登录</button>
            <button class="btnHome" id="btnUp" @click="handleUpload">点击上传</button>
        </div>
    </div>
</template>
<script>
import UpLoaded from '@/components/UpLoaded.vue';
import UPLoading from  '@/components/UpLoading.vue'

// import { uploadPhoto } from '../api/index'

import { mapGetters } from 'vuex';
export default {
    components:{
        UpLoaded,UPLoading
    },
   computed:{
    // 接受 username password
    ...mapGetters(["username","password"])
   },
   methods:{
    // 调用上传图片接口
    async handleUpload(){
        // await uploadPhoto() 
    }
   }
}
</script>
<style lang="scss" scoped>
 
</style>
