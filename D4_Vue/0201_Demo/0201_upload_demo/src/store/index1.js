// 状态管理文件
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    // 数据
    state:{
        username:'',
        password:''
    },
    //获取数据
    getters:{
         username(state){
            return state.username
          },
         password(state){
            return state.password
          }
    },
    //修改数据
    mutations:{
        getUser(state,payload){
            state.username = payload.username,
            state.password = payload.password,
            console.log(payload);
        },
    },
    //异步修改
    actions:{},
});

export default store;