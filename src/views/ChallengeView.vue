<script setup lang="ts">
    import { inject } from 'vue';
    import PokemonContainer from '../components/PokemonContainer.vue'
    import { ref, onMounted } from 'vue'

    const pokemonStore :any = inject('pokemonStore');

    const proposedPokemons = ref<PokemonDTO[]>([])
    const correctPokemon = ref<PokemonDTO>(null)
    const isValidated = ref(false)
    const pokemonSelected = ref<PokemonDTO>()
    const default_pokemon :PokemonDTO = {id:0, name:"", image_path:"", audio_path:""}

    const NB_PROPAL: number = 6
    const audio_success = new Audio('/sound-effects/button-success.mp3')
    const audio_failure = new Audio('/sound-effects/button-failure.mp3')


    onMounted(() => {
        choosePokemonAndPropositions();
    });

    function choosePokemonAndPropositions() {
        isValidated.value = false
        proposedPokemons.value = getRandomSubarray(pokemonStore.pokemons, NB_PROPAL)
        correctPokemon.value = pickRandom(proposedPokemons.value)
        pokemonSelected.value = default_pokemon
    }

    function getRandomSubarray(arr: any, size: number) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

    function pickRandom(arr: any) :any {
        return arr[Math.floor(Math.random()*arr.length)];
    }

    function handleValidate() {
        if (!isValidated.value) {
            if (pokemonSelected.value.id == correctPokemon.value.id) {
                audio_success.play()
            }
            else {
                audio_failure.play()
            }
        }
        isValidated.value = true
    }

    function handleNext() {
        choosePokemonAndPropositions()
    }

</script>

<template>
  <div v-if="correctPokemon">
        <PokemonContainer
            :pokemon="correctPokemon"
            :propositions="proposedPokemons"
            :showImage="isValidated"
            v-model="pokemonSelected"
        />
    </div>
    <div>
        <Button class="btn" :class="isValidated ? 'btn-disabled' : 'btn-primary'" @click="handleValidate">Validate</Button>
        <Button class="btn btn-primary" v-if="isValidated" @click="handleNext">Next</Button>
    </div>
</template>