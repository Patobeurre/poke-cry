<script setup lang="ts">

    defineProps<{
        pokemon: PokemonDTO
    }>()

</script>

<template>
    <v-row class="entry" align="center" justify="center">
        <v-col cols="12" md="2">
            <v-sheet class="portrait">
                <img :src="'/images/' + pokemon.image_path"/>
            </v-sheet>
        </v-col>
        <v-col cols="12" md="5">
            <v-sheet>
                <h4>#{{ pokemon.id }} - {{ pokemon.name }}</h4>
            </v-sheet>
        </v-col>
        <v-col cols="12" md="5">
            <v-sheet>
                <audio :src="'/audio/' + pokemon.audio_path" controls/>
            </v-sheet>
        </v-col>
    </v-row>
</template>

<style scoped>
.entry {
    min-height: 5rem;
}
.portrait {
    height: 3.5rem;
}
.portrait img{
    max-height: 100%;
}
</style>