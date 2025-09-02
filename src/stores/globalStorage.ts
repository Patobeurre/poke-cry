import { reactive } from 'vue';

// Load users from localStorage (if available)
let storedPokemons = localStorage.getItem('pokemons');
storedPokemons = storedPokemons ? JSON.parse(storedPokemons) : [];

export const pokemonStore = reactive<{
  pokemons: PokemonDTO[];
}>({
  pokemons: [],
});

// Load pokemons into state & localStorage
export function setPokemons(pokemons :PokemonDTO[]) {
  pokemonStore.pokemons = pokemons;
  localStorage.setItem('pokemons', JSON.stringify(pokemons));
}

// Clear pokemons (optional)
export function clearPokemons() {
  pokemonStore.pokemons = [];
  localStorage.removeItem('pokemons');
}