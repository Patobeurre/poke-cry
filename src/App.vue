<script setup lang="ts">
  const title :string = "C Ki Ki Cri ?"
</script>

<template>
  <v-app>
    <v-app-bar :elevation="2">
      <v-app-bar-nav-icon to="/"><i class="bi bi-house-door-fill"></i></v-app-bar-nav-icon>
      <v-app-bar-title>{{ title }}</v-app-bar-title>
      <v-btn to="/challenge">Challenge</v-btn>
      <v-btn to="/collection">List</v-btn>
      <v-btn to="/about">About</v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container class="pa-4">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
   
  
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.wrapper {
  min-height: 100vh;
}
i {
  font-size: 1.5rem;
}
</style>
