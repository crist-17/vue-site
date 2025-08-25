<script setup>
import { ref } from 'vue';


const msg = ref('')
</script>

<template>
<p>test</p>
<div>{{ msg }}</div>

</template>

<style>
p {
    background-color: aqua;
}

div {
    border:  1px solid red;
}
</style>