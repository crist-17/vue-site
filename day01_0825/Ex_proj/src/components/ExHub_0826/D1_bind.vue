<template>
<div :style="{fontSize:size}">글자크기</div>

</template>

<script setup>
import { ref } from 'vue';

const size = ref('28px')
</script>

<style lang="scss" scoped>

</style>