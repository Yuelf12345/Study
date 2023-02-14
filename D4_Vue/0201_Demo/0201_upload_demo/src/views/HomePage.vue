<template>
    <div class="container">
        <div class="index-wrapper">
            当前用户：{{ getUser.uID }}--密码：{{ getUser.password }}
            <UpLoaded></UpLoaded>
            <UPLoading></UPLoading>
            <button class="btnHome" id="btnOut" @click="Logout">退出登录</button>
            <button class="btnHome" id="btnUp" >点击上传</button>
            <input 
            type="file" 
            class="btnHome"  
            name=""
            multiple="multiple"
            style="opacity: 0;position: relative;left: -140px;top:-19px;"
            @change="handleUploadFile">
        </div>
    </div>
</template>
<script>
import UpLoaded from '@/components/UpLoaded.vue';
import UPLoading from  '@/components/UpLoading.vue'
import router from '@/router';

import { fetchUpload } from '../api/index'

import { mapGetters  } from 'vuex';
export default {
    data(){
        return {

        }
    },
    components:{
        UpLoaded,UPLoading
    },
   computed:{
    // 接受 username password
    ...mapGetters(["getUser"])
   },
   methods:{
    // 调用上传图片接口
    async handleUploadFile(e){
        const file = e.target.files[0];
        const uID = this.$store.getters.getUser.uID
        const res = await fetchUpload({file,uID});
        console.log('返回',res);
    },
    Logout(){
        // 退出登录
            localStorage.removeItem("token")
            router.push({
                name:"Login"
            })
        }
   }
}
</script>
<style lang="scss" scoped>
 
</style>
