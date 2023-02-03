<template>
  <container>
    <CurrentView @change-view = "handleChangeView"></CurrentView>
  </container>
</template>

<script>
// eslint-disable-next-line vue/no-unused-components
import StartView from './views/StartView.vue';
// eslint-disable-next-line vue/no-unused-components
import GameView from './views/GameView.vue';
import {computed , ref} from 'vue'
export default {
  name: 'App',
// eslint-disable-next-line vue/no-unused-components
  components: {
      StartView,
      GameView
  },
  setup(){
    const CurrentViewName = ref("StartView")
    // 处理依赖
    
    const CurrentView = computed(()=>{
      if(CurrentViewName.value === "StartView"){
        return StartView;
      }else if(CurrentViewName.value === "GameView"){
        return GameView;
      }
    })    


    function handleChangeView(viewName){
      console.log(viewName);
      CurrentViewName.value = viewName;
    }
    return {
      CurrentView,
      handleChangeView
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
