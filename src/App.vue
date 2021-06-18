<template>
  <Logo class="logo" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import Logo from './assets/Logo.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Logo,
    HelloWorld,
  },
}
</script>

<style>
#app {
  @apply antialiased text-center text-gray-800 mt-10 font-semibold;
}
.logo {
  @apply inline-block text-center;
}
</style>
