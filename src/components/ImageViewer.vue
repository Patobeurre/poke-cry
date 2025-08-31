<template>
  <div v-if="visible">
    <img :src="'/images/' + filepath"/>
  </div>
</template>


<script setup lang="ts">
  defineProps<{ 
    filepath: string,
    visible: boolean
  }>()
</script>

<style scoped>

</style>