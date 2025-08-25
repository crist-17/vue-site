<template>
    <hr>
<p v-if="typewritersInStock">재고있음</p>
<p v-else>재고없음</p>
<hr>
<p v-if="typewriterCount > 0">재고있음</p>
<p v-else>재고없음</p>
<hr>
<p v-if="typewriterCount2 > 3">재고있음</p>
<p v-else-if="typewriterCount2 > 0">재고조금있음</p>
<p v-else-if="typewriterCount2 == 0">재고 없음</p>
<p v-else>선불예약있음{{ typewriterCount2 }}</p>
<hr>
<p v-if="text.includes"> 'pizza' 가 포함되어 있음</p>
<p v-else>글자포함 안되있음</p>
<hr>
<div v-if="text2.includes('피자')">
    <p>피자</p>
    <img src="../assets/img_pizza.svg" alt="pi">

</div>
<p v-else>피자없음</p>
</template>

<script setup>
import { ref } from 'vue';

    const typewritersInStock = ref(false)
    const typewriterCount  = ref(0)
    const typewriterCount2 = ref(-5)
    const text = ref("'I like taco, pizza, Thai beef salad, pho soup and tagine.")
    const text2 = ref("'I like taco, 피자, Thai beef salad, pho soup and tagine.")
</script>

<style lang="scss" scoped>
    img {
        border: 2px solid red;
        width: 200px;
        height: 200px;
    }
</style>