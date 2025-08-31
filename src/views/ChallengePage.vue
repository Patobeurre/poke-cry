<template>
    <div v-if="correctPokemon">
        <PokemonContainer
            :pokemon="correctPokemon"
            :propositions="proposedPokemons"
        />
    </div>
</template>


<script setup lang="ts">
    import PokemonContainer from '../components/PokemonContainer.vue'
    import { ref, onMounted } from 'vue'

    const data = ref(null)
    const proposedPokemons = ref(null)
    const correctPokemon = ref(null)
    //const fileExists = ref(false)

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

    async function checkFile(path: string) {
        try {
            const response = await fetch(path, { method: 'HEAD' })
            if (!response.ok) throw new Error('Erreur de chargement')
            //fileExists.value = true
            return true
        } catch (error) {
            //fileExists.value = false
            return false
        }
    }

    async function cleanData(arr: any) {
        var cleanedData :any = []
        for (const pokemon of arr) {
            const fileExists = await checkFile("/audio/" + pokemon.audio_path)
            if (fileExists) {
                cleanedData.push(pokemon)
                console.log("ADDED " + pokemon.name)
            }
            else {
                console.log("MISSING " + pokemon)
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

    function pickRandom(arr: any) {
        return arr[Math.floor(Math.random()*arr.length)];
    }

</script>


<style scoped>
</style>
