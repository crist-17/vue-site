<template>
    <div class="wrap2">
<img :src="img_moose" alt="무스">
<p>무스 count: {{ count }}</p>
<button @click="count++">Count Moose</button>
</div>
</template>

<script setup>
import { ref } from 'vue';
import img_moose from '../assets/img_moose.jpg'

const count = ref(0)
</script>

<style lang="scss" scoped>
    .wrap2 {
        border: 2px dashed #000;
        box-sizing: border-box;
    }
    img {
        box-sizing: border-box;
        display: block;
        margin: 10px;
        border-radius: 50px;
    }
    button {
        border: 1px solid green;
        margin-bottom: 10px;
    }
</style>