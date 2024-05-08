<template>
    <h1>Vue Example</h1>
    <p>The message is taken from 'data' inside the Vue instance by writing {{ message }} inside the div with id="app".</p>
    <div id="app">
      {{ message }}
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const message = ref('Hello World!')
  </script>
  
  <style scoped>
  #app {
    display: inline-block;
    padding: 10px;
    font-size: x-large;
    background-color: lightgreen;
  }
  </style>
  