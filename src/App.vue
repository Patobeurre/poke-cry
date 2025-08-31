<script setup lang="ts">
  import ChallengePage from './views/ChallengePage.vue'
  import HeaderTitle from './components/HeaderTitle.vue'

  const title :string = "C koi le cri du pokemon"
</script>

<template>
  <div class="wrapper">
    <HeaderTitle :title="title" />
    <ChallengePage />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.wrapper {
  min-height: 100vh;
}
</style>
