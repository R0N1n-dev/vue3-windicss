<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  @apply antialiased text-center text-gray-800 text-base mt-20;
}

.logo {
  @apply inline-block text-center;
}
</style>
