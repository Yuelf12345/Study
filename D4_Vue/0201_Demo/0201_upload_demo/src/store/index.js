// 状态管理文件
import router from '@/router';
import Vue from 'vue';
import Vuex from 'vuex';

import { fetchLogin } from '../api/index'
Vue.use(Vuex);

const types = {
    LOGIN: "login",
    UPDATE_PHOTOS: "updatePhotos",
    UPDATE_PAGE: "updatePage"
  };

const store = new Vuex.Store({
    // 数据
    state:{
        uID:'',
        username:'',
        password:'',
        //获取本地存储token
        token: localStorage.getItem("token") || "",
        photos:[],
        pageSize:0,
        pageTotal:0
    },
    //获取用户数据
    getters:{
        getUser(state){
            return {
                uID:state.uID,
                username:state.username,
                password:state.password
            }
        }
    },
    //修改数据
    mutations:{
        [types.LOGIN](state,{token,uID}){
            state.uID = uID
            state.token = token;
            localStorage.setItem("token",token);
        },
    },
    //异步修改
    actions:{
        login({commit} , payload) {
            // 赋值
           const { username , password } = payload;
           this.state.username = username,
           this.state.password = password,
           console.log(commit);
            //调接口
            fetchLogin({username , password}).then(res=>{
                // console.log('res',res);
                if(res.data.data.token){
                    // 存token
                    commit(types.LOGIN,{
                        uID: res.data.uID,
                        token:res.data.data.token
                    })
                    router.push({
                        name:"Home"
                    })
                }
            })
        }
    },
});

export default store;