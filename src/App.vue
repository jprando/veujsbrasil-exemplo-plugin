<template>
  <div id="app"><HomePage /></div>
</template>

<script>
import HomePage from '@/pages/Home'
export default {
  name: 'App',
  components: { HomePage }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
