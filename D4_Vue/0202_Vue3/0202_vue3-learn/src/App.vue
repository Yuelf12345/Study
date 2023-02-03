<template>
    <div class="">hello</div>
    <div class="">world</div>
    <ModalButton></ModalButton>
    <CompositionApi></CompositionApi>
    <MixinComA></MixinComA>
    <ButtonA></ButtonA>
    <MessAge></MessAge>
</template>

<script>
import ModalButton from './components/ModalButton.vue';
import CompositionApi from './components/CompositionApi.vue';
import MixinComA from './components/MixinComA.vue';
import ButtonA from './components/ButtonA.vue';
import MessAge from './components/MessAge.vue';

export default {
  name: 'App',
  components: {
    ModalButton,CompositionApi,MixinComA,ButtonA,MessAge
  },
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
