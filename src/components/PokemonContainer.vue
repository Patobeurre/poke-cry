<template>
    <div>
       <div>
        <audio :src="'/audio/' + pokemon.audio_path" autoplay controls/>
      </div>

      <div v-if="showImage" class="portrait">
        <img :src="'/images/' + pokemon.image_path"/>
        <h2>{{ pokemon.name }}</h2>
      </div>
      <div v-else class="propals"> 
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
.portrait {
  height: 20em;
}
.portrait img{
  height: 80%;
  padding: 1rem;
}
</style>
