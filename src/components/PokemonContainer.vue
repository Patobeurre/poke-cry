<template>
    <div>
      <div v-if="showImage">
        <img :src="'/images/' + pokemon.image_path"/>
      </div>

      <div>
        <audio :src="'/audio/' + pokemon.audio_path" controls/>
      </div>

      <div v-for="p in propositions" :key="p.id">
        <label>
          <input
            type="radio"
            name="pokemons"
            :value="p.id"
            v-model="selectedId"
          />
          {{ p.name }}
        </label>
      </div>
    </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'

  const showImage = defineModel()

  const selectedId = ref(0)

  defineProps<{
    pokemon: any,
    propositions: any
  }>()

</script>


<style scoped>
</style>
