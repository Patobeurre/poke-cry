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
        <SelectForm
          :options="searchPropositions"
          :placeholderTxt="'Type your answer'"
          v-model="selectedPokemon"
        />

        <v-btn v-if="!isSuggestionsShown" class="btn-suggestions" @click="useSuggestions">Show suggestions</v-btn>

        <div v-if="isSuggestionsShown" class="btn-propal" v-for="p in propositions" :key="p.id">
            <label class="btn">
              <input
                type="radio"
                name="pokemons"
                :value="p.id"
                v-model="selectedPokemon.id"
              />
              {{ p.name }}
            </label>
        </div>
      </div>
    </div>
</template>


<script setup lang="ts">
  import { inject, onMounted, ref, watch } from 'vue';
  import SelectForm from './SelectForm.vue';

  const pokemonStore :any = inject('pokemonStore');

  const selectedPokemon :PokemonDTO = defineModel()
  const searchPropositions = ref<PokemonDTO[]>([])
  const isSuggestionsShown = ref(false)

  const props = defineProps<{
    pokemon: PokemonDTO,
    propositions: PokemonDTO[],
    showImage: boolean
  }>()

  onMounted(() => {
    init();
  })

  watch(() => props.pokemon.id, () => {
    console.log("pokemon changed")
    init();
  })

  function init() {
    searchPropositions.value = pokemonStore.pokemons;
    isSuggestionsShown.value = false;
  }

  function useSuggestions() {
    searchPropositions.value = props.propositions
    isSuggestionsShown.value = true;
  }

</script>


<style scoped>
.btn-propal, .btn-suggestions {
  margin: 1vh;
}
.propals {
  padding: 1vh;
}
.portrait {
  height: 20em;
}
.portrait img{
  max-width: 80vw;
  max-height: 80%;
  padding: 1vh;
}
</style>
