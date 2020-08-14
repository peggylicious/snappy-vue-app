<template>
  <div id="app">
    <snappy-header></snappy-header>
    <snappy-hero></snappy-hero>
  </div>
</template>

<script>
import SnappyHeader from './components/SnappyHeader'
import SnappyHero from './components/SnappyHero'

export default {
  name: 'App',
  components: {
    SnappyHeader,
    SnappyHero,
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body{
  background: #222831;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
