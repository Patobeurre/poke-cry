import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import PrimeVue from 'primevue/config';

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './style.css'

import { pokemonStore, setPokemons, clearPokemons } from './stores/globalStorage';
import pokemonsJson from './assets/data.json';

import App from './App.vue'

// Router
import HomeView from './views/HomeView.vue'
import ChallengeView from './views/ChallengeView.vue'
import CollectionView from './views/CollectionView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/challenge', component: ChallengeView },
  { path: '/collection', component: CollectionView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

// Load from JSON only if not already in localStorage
if (!pokemonStore.pokemons.length) {
  setPokemons(pokemonsJson); // Save to localStorage + state
}

// Provide global state
app.provide('pokemonStore', pokemonStore);
app.provide('setPokemons', setPokemons);
app.provide('clearPokemons', clearPokemons);

app.use(PrimeVue);
app.use(router);
app.use(vuetify);
app.mount('#app');