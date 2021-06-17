<template>
  <img
    class="logo"
    width="400"
    height="400"
    alt="Vue logo"
    src="./assets/logo.png"
  />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style>
#app {
  @apply antialiased text-center text-gray-800 text-base mt-10 font-semibold;
}

.logo {
  @apply inline-block text-center aspect-none h-100 w-100;
}
</style>
