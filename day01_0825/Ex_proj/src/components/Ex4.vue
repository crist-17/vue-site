<template>
    <h1>for문 배열</h1>
    <ol>
        <li v-for="food in manyFoods" :key="food">{{food}}</li>
    </ol>

<h3>for문 객체배열</h3>
<div class="wrap">
    <img v-for="img in manyFoods2" :key="img" :src="`${img}`" alt="11">
</div>
</template>

<script setup>

import { ref } from 'vue';
import img_Burrito from '../assets/img_burrito.svg'
import img_salad from '../assets/img_salad.svg'
import img_cake from '../assets/img_cake.svg'
import img_soup from '../assets/img_soup.svg'
import img_fish from '../assets/img_fish.svg'
import img_pizza from '../assets/img_pizza.svg'
import img_rice from '../assets/img_rice.svg'

const manyFoods2 = ref([
    img_Burrito,
    img_salad,
    img_cake,
    img_soup,
    img_fish,
    img_pizza,
    img_rice,
])
const manyFoods = ref([
    'Burrito',
    'Salad',
    'Cake',
    'Soup',
    'Fish',
    'Pizza',
    'Rice',
])



</script>

<style lang="scss" scoped>
.wrap {
    border: 1px solid #000;
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
      background: lightblue;
      justify-content: center;
     align-items: center;
}
img {
     width: 100px;
    height: 100px;
    flex: 0 0 calc(33.333% - 10px);
    padding: 5px;
    border: 1px dotted #000;
    box-sizing: border-box;
    margin: 5px;
    
}
</style>