import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //数据，类似data
    state:{
        msg:"hi vuex",
        name:"xia",
        age:12
    },
    //获取数据 类似计算属性，有缓存效果
    getters:{
        tenYearOld(state){
            // return this.$store.state.age = 20
            return state.age + 10
          }
    },
    //定义方法，操作state
    mutations:{
        changeMsg(state,payload){
        //    setTimeout(()=>{
            console.log(state);
            console.log(payload);
            state.msg = 'hhh vuex'
        //    },5000)
        },
        changeName(state){     
        //    setTimeout(()=>{
            state.name = 'yue'
        //    },1000)
        }
    },
    //异步操作mutation
    actions:{
        getMsg({commit}){
            console.log('GetMag');
            setTimeout(()=>{
                commit("changeMsg")
            },2000)
        }
    },
    //模块
    modules:{

    }
})

export default store