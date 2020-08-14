<template>
  <div id="app">
    <!-- <h1>Header</h1> -->
    <!-- <search-bar></search-bar> -->
    <snappy-header></snappy-header>
    <snappy-hero></snappy-hero>
    <router-view></router-view>
  </div>
</template>

<script>
// import SearchBar from './components/SearchPix.vue'
import SnappyHeader from './components/photos-component/SnappyHeader.vue'
import SnappyHero from './components/photos-component/SnappyHero.vue'

export default {
  name: 'App',
  components: {
    SnappyHeader,
    SnappyHero
    // SearchBar
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
