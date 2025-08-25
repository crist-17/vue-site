<template>
    <div class="lightDiv">
        <!-- true 일때 lightOn -->
         <img v-show="!lightOn" :src="pic_bulboff" alt="pic_bulboff" class="bulb"/>
          <img v-show="lightOn" :src="pic_bulbon" alt="pic_bulbon" class="bulb"/>
    </div>
    <button class="swutihbtn" @click="toggle">{{lightOn ? 'Turn off' : 'Turn on'}}</button>
</template>

<script setup>
import { ref } from 'vue';
import pic_bulboff from '../assets/pic_bulboff.gif'
import pic_bulbon from '../assets/pic_bulbon.gif'

const lightOn = ref(false)
const toggle = () => (lightOn.value = !lightOn.value)
</script>

<style lang="scss" scoped>

</style>