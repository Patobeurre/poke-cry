<template>
    <div>
      <div v-if="showImage">
        <img :src="'/images/' + pokemon.image_path"/>
      </div>

      <div>
        <Button @click="showImage = !showImage">Show</Button>
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

      <div>
        <Button @click="handleValidate(pokemon.id)">Validate</Button>
      </div>
    </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'

  const showImage = ref(false)
  const selectedId = ref(0)

  defineProps<{
    pokemon: Object,
    propositions: Array<Object>
  }>()

  function handleValidate(correctId: number) {
    if (correctId === selectedId.value) {
      console.log("YOUPI")
    }
  }

</script>


<style scoped>
</style>
