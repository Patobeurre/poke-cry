<template>
    <div>
      <div v-if="showImage">
        <img :src="'/images/' + pokemon.image_path"/>
        <h2>{{ pokemon.name }}</h2>
      </div>

      <div>
        <audio :src="'/audio/' + pokemon.audio_path" autoplay controls/>
      </div>

      <div class="propals" v-if="!showImage"> 
        <div class="btn-propal" v-for="p in propositions" :key="p.id">
            <label class="btn">
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
    </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue'

  const selectedId = defineModel()

  defineProps<{
    pokemon: any,
    propositions: any,
    showImage: boolean
  }>()

</script>


<style scoped>
.btn-propal {
  margin: 0.5rem;
}
.propals {
  padding: 1rem;
}
</style>
