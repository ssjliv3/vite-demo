<template>
    <div class="container">
        <div class="content">
            <h2>Component One</h2>
            <p>Choose food.</p>
            <label>
                <input type="radio" name="rbgFood" v-model="imgSrc" :value="'img_apple.svg'" /> 
                Apple
            </label>
            <label>
                <input type="radio" name="rbgFood" v-model="imgSrc" :value="'img_cake.svg'" /> 
                Cake
            </label>
        </div>
        <img :src="imgSrc">
    </div>
</template>

<script>
  export default {
    name: 'CompOne',
    data () {
      return {
        imgSrc: 'img_question.svg'
      }
    }
  }
</script>

<style scoped>
    .container {
        display: flex;
        align-items: center; /* Ensures vertical alignment is centered */
        background-color: lightgreen;
        padding: 10px;
    }
    .content {
        flex-grow: 1; /* Allows the content area to take up available space */
    }
    img {
        height: 50px;
        margin-left: 10px; /* Reduced left margin to minimize space between text and image */
    }
</style>  
