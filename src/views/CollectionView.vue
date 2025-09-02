<script setup lang="ts">
  import CollectionEntry from '../components/CollectionEntry.vue';
  import { ref, onMounted } from 'vue';
  import { inject } from 'vue';

  const pokemonStore :any = inject('pokemonStore');
  const pokemonsList = ref<PokemonDTO[]>([]);
  const searchText = ref('')

  onMounted(() => {
    pokemonsList.value = pokemonStore.pokemons
  });

  function sortByName() {
    pokemonsList.value = [...pokemonsList.value].sort((a, b) => a.name.localeCompare(b.name))
  }
  function sortById() {
    pokemonsList.value = [...pokemonsList.value].sort((a, b) => (a.id - b.id))
  }

  function onSearchTxtUpdated() {
    if (searchText.value.trim()) {
      pokemonsList.value = pokemonStore.pokemons.filter(function(p :PokemonDTO) {
        return p.name.toLowerCase().includes(searchText.value.toLowerCase())
      })
    }
    else {
      pokemonsList.value = pokemonStore.pokemons
    }
  }

</script>

<template>
  <v-row class="filterPanel" align="center" justify="center">
    <v-col cols="12" md="8">
        <v-text-field v-model="searchText" placeholder="Search by name" @input="onSearchTxtUpdated"></v-text-field>
    </v-col>
    <v-col cols="6" md="2">
        <button class="btn btn-primary" @click="sortByName">Sort A-Z</button>
    </v-col>
    <v-col cols="6" md="2">
        <button class="btn btn-primary" @click="sortById">Sort 0-9</button>
    </v-col>
  </v-row>
  
  <v-container v-for="pokemon in pokemonsList" :key="pokemon.id">
    <CollectionEntry :pokemon="pokemon"/>
  </v-container>
</template>

<style scoped>

</style>