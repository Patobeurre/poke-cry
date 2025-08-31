<template>
    <div v-if="correctPokemon">
        <PokemonContainer
            :pokemon="correctPokemon"
            :propositions="proposedPokemons"
        />
    </div>
</template>


<script setup>
    import PokemonContainer from '../components/PokemonContainer.vue'
    import { ref, onMounted } from 'vue'

    const data = ref(null)
    const proposedPokemons = ref(null)
    const correctPokemon = ref(null)

    onMounted(async () => {
        try {

            const response = await fetch('/data.json')
            if (!response.ok) throw new Error('Erreur de chargement')
            data.value = await response.json()

            cleanData(data.value)

        } catch (error) {
            console.log(error)
        }
    })

    async function checkFile(path) {
        try {
            const response = await fetch(path, { method: 'HEAD' })
            console.log(response)
            if (!response.ok) throw new Error('Erreur de chargement')
            return true
        } catch (error) {
            return false
        }
    }

    function cleanData(arr) {
        var cleanedData = []
        for (const pokemon of arr) {
            if (checkFile("/audio/" + pokemon.audio_path)) {
                cleanedData.push(pokemon)
            }
            else {
                console.log(pokemon)
            }
        }  
        console.log(cleanedData)  
        data.value = cleanedData

        choosePokemonAndPropositions()
    }

    function choosePokemonAndPropositions() {
        proposedPokemons.value = getRandomSubarray(data.value, 4)
        correctPokemon.value = pickRandom(proposedPokemons.value)
    }

    function getRandomSubarray(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

    function pickRandom(arr) {
        return arr[Math.floor(Math.random()*arr.length)];
    }

</script>


<style scoped>
</style>
