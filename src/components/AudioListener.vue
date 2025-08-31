<template>
  <audio :src="'/audio/' + filepath" controls/>
</template>


<script setup lang="ts">
  defineProps<{ filepath: string }>()
</script>


<style scoped>

</style>