<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">
        vue-cli documentation
      </a>
      .
    </p>
    <p class="description">Styled with Windi CSS using @apply</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<style scoped>
header {
  @apply mt-10 mb-0 mx-0 font-bold;
}
.description {
  @apply mt-10 mb-0 mx-0 font-bold;
}
ul {
  @apply p-0 list-none;
}
li {
  @apply inline-block my-0 mx-3;
}
a {
  @apply text-green-800;
}
</style>
