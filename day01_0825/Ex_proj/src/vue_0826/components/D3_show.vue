<template>
    <div v-show="showDiv">
        나는 사라진다.
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showDiv = ref(true)
</script>

<style lang="scss" scoped>

</style>