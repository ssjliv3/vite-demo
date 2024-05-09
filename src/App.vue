<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<script>
  export default {
    data () {
      return {
        compName: 'comp-one'
      }
    }
  }
</script>

<template>
  <div>
    <h1>Dynamic Components</h1>
    <p>With &lt;KeepAlive :max="2"&gt; only the last two visited components will remember the user input.</p>
    <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-one'"> Radio</label>
    <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-two'"> VModel</label>
    <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-three'"> BgCol</label>
    <label><input type="radio" name="rbgComp" v-model="compName" :value="'comp-four'"> APISim</label>
    <label><input type="radio" name="rbgComp" v-model="compName" :value="'type-writers'"> TypeWriter</label>
    <label><input type="radio" name="rbgComp" v-model="compName" :value="'rolling-dies'"> TransitionG</label>
    <KeepAlive :max="2">
      <component :is="compName"></component>
    </KeepAlive>
  </div>
  <div class="text-center">
      <a href="https://vitejs.dev" target="_blank" class="inline-block">
        <img src="/vite.svg" class="logo filter transition duration-300" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="inline-block">
        <img src="./assets/vue.svg" class="logo vue filter transition duration-300" alt="Vue logo" />
      </a>
      <hello-world msg="Vite + Vues" />
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
#app {
    width: 350px;
    margin: 10px;
  }
  #app > div {
    border: solid black 2px;
    padding: 10px;
    margin-top: 10px;
  }
  .component-style {
  display: flex; /* Ensuring components are displayed inline */
  align-items: center; /* Align items vertically */
  }
  h2 {
    text-decoration: underline;
  }
  label {
    display: inline-block;
    padding: 5px;
  }
  label:hover {
    cursor: pointer;
  }
</style>
