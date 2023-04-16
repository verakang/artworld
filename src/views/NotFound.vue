<script>
  import { RouterLink } from 'vue-router'

  export default {
    components: {
      RouterLink
    }
  }
</script>

<template>
  <main class="container d-flex flex-column justify-content-center align-items-center">
    <h2 class="mt-5">404頁面</h2>
    <h3>您要找的頁面不存在</h3>
    <RouterLink to="/" class="btn btn-primary mt-5">回首頁</RouterLink>
  </main>
</template>

<style>
main {
  min-height: calc(100vh - 416px);
}
</style>
