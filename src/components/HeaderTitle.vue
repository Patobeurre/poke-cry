<template>
    <div class="header-top">
        <h1>{{ title }}</h1>
    </div>
</template>


<script setup lang="ts">
  defineProps<{ title: string }>()
</script>


<style scoped>
.header-top {
  top: 0;
  /* position: fixed; */
  width: 100%;
}
</style>