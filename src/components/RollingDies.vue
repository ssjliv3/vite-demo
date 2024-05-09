<template>
  <h3>The &lt;TransitionGroup&gt; Component</h3>
  <p>New products are given animations using the &lt;TransitionGroup&gt; component.</p>
  <button @click="addDie">Roll</button>
  <button @click="removeDie">Remove random</button><br>
  <TransitionGroup>
    <div v-for="x in dice" :key="x" class="diceDiv" :style="{ backgroundColor: 'hsl('+x*40+',85%,85%)' }">
      {{ x }}
    </div>
  </TransitionGroup>
</template>

<script>
  export default {
    data() {
      return {
        dice: [],
        inpName: ''
      }
    },
    methods: {
      addDie() {
        const newDie = Math.ceil(Math.random()*6);
        this.dice.push(newDie);
      },
      removeDie() {
        if(this.dice.length>0){
          this.dice.splice(Math.floor(Math.random()*this.dice.length), 1);
        }
      }
    },
    mounted() {
      this.addDie();
      this.addDie();
      this.addDie();
    }
  }
</script>

<style>
.v-enter-from {
  opacity: 0;
  translate: 200px 0;
  rotate: 360deg;
}
.v-enter-to {
  opacity: 1;
  translate: 0 0;
  rotate: 0deg;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.7s;
}
.v-leave-from { opacity: 1; }
.v-leave-to { opacity: 0; }
.diceDiv {
  margin: 10px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  vertical-align: middle;
  text-align: center;
  border: solid black 1px;
  border-radius: 5px;
  display: inline-block;
}
</style>                  