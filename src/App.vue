<script setup>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import VBindImage from './components/VBindImage.vue'
import TypeWriters from './components/TypeWriters.vue'
import RollingDies from './components/RollingDies.vue'
</script>

<template>
  <div class="text-center">
      <a href="https://vitejs.dev" target="_blank" class="inline-block">
        <img src="/vite.svg" class="logo filter transition duration-300" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="inline-block">
        <img src="./assets/vue.svg" class="logo vue filter transition duration-300" alt="Vue logo" />
      </a>
      <hello-world msg="Vite + Vues" />
      <hello-world-2  class="mt-8" />
      <v-bind-image  class="mt-20" />
      <type-writers />
      <rolling-dies />
    </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
