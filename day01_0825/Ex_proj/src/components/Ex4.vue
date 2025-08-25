<template>
    <h1>for문 배열</h1>
    <ol>
        <li v-for="food in manyFoods" :key="food">{{food}}</li>
    </ol>

</template>

<script setup>
import { ref } from 'vue';
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

<style lang="scss" scoped></style>