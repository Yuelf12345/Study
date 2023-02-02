<template>
  <div id="app">
    <ParentA></ParentA>
    <ComA title="123" @a="handleA"></ComA>
    <ButtonClick disabled></ButtonClick>
  </div>
</template>

<script>
import ParentA from './components/ParentA.vue';
import ComA from './components/ComA.vue';
import ButtonClick from './components/ButtonClick.vue';

export default {
  name: 'App',
  components: {
    ParentA,ComA,ButtonClick
  },
  methods:{
    handleA(){
      console.log("handleA");
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
