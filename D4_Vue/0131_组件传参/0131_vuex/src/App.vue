<template>
  <div id="app">
    <ComA></ComA>
    {{ mymsg }} * {{ name }} * {{ age }}
    <!-- <button @click="handelChange">change</button> -->
    <button @click="handelSyncChange">异步</button>
    <button @click="handelName">name</button>
    10年后年龄 {{ tenYearOld }}
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions  } from 'vuex';
import ComA from './components/ComA.vue';
export default {
  name: 'App',
  components: {
    ComA
  },
  data(){
    return {
      // msg:this.$store.state.msg  响应式丢失，利用计算属性
    }
  },
  mounted(){
    // console.log(this.$store);
  },
  computed:{
    //vuex提供语法糖 
    ...mapState(["name","age"]),
    ...mapState({
      mymsg:"msg"
    }),
    ...mapGetters(["tenYearOld"]),
    // msg(){
    //   return  this.$store.state.msg
    // },
    // name(){
    //   return  this.$store.state.name
    // },
    // age(){
    //   return  this.$store.state.age
    // }
    
    // tenYearOld(){
    //   return this.$store.state.age + 10
    // }
  },
  methods:{
    ...mapActions(["getMsg"]),
    handelChange(){
      // this.$store.state.msg = 'change msg'
      this.$store.commit("changeMsg",{msg:"hhh vuex"})
    },
    handelName(){
      this.$store.commit("changeName",{name:"yue"})
    },
    handelSyncChange(){
      this.$store.dispatch("getMsg")
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
