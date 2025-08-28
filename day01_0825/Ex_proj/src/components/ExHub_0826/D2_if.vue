<template>
<p v-if="cnt > 3">재고있음: {{ cnt }}</p>
<p v-else-if="cnt > 0">재고조금남음 {{ cnt }}]</p>
<p v-else-if="cnt==0">재고없음 {{ cnt }}</p>
<p v-else>선불 및 예약있음 {{ cnt }}</p>
</template>

<script setup>
import { ref } from 'vue';

const cnt = ref(0)
</script>

<style lang="scss" scoped>

</style>