<template>
  <div id="app">
    <div class="snappy-conta" :class="{demo: getModalStatus}">
      <snappy-header></snappy-header>
      <snappy-hero></snappy-hero>
      <div :class="{'overlay-body': getModalStatus}"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import SnappyHeader from './components/SnappyHeader'
import SnappyHero from './components/SnappyHero'

export default {
  name: 'App',
  components: {
    SnappyHeader,
    SnappyHero,
  },
  computed: {
    ...mapGetters(['getModalStatus'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap');
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background: #222831;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.demo{
  height: 100vh;
  overflow: hidden;
  position: relative;
}
.overlay-body{
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, .8);
  z-index: 1;
}
</style>
