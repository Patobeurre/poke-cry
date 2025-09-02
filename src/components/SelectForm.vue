<template>
  <div>
    <multiselect 
        id="single-select-search"
        v-model="selectedItem"
        :options="options"
        label="name"
        track-by="name">
    </multiselect>
  </div>
</template>

<script setup lang="ts">
    import Multiselect from 'vue-multiselect'

    defineProps<{
        options: any
    }>()

    const selectedItem :any = defineModel();

</script>

<style scoped>
    .dropdown-list {
        list-style-type: none;
        padding: 0;
        margin: 5px 0;
        border: 1px solid #ccc;
        max-height: 200px;
        overflow-y: auto;
        background-color: white;
        position: absolute;
        width: 100%;
    }

    .dropdown-list li {
        padding: 8px;
        cursor: pointer;
    }

    .dropdown-list li:hover {
        background-color: #f0f0f0;
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>