<template>
    <div>
      <button @click="fetchData" class="mt-2 mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fetch Data</button>
      <pre v-if="data">{{ data }}</pre>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchData() {
        const response = await fetch("bigLandMammals.json");
        this.data = await response.json();
      }
    }
  };
  </script>   