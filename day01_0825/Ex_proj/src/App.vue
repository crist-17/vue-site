<script setup>

import { ref } from 'vue'
import Ex1 from './components/Ex1.vue';
import Ex2 from './components/Ex2.vue';
import Ex3 from './components/Ex3.vue';
import Ex4 from './components/Ex4.vue';
import Ex5 from './components/Ex5.vue';
import Ex6 from './components/Ex6.vue';

const pages = { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6 }
const activeComp = ref("Ex4")

</script>

<template>
  <!-- <Ex1 />
  <Ex2 />
  <Ex3 />
  <Ex4 /> -->
  <button @click="activeComp = 'Ex1'">bind_바인드</button>
  <button @click="activeComp = 'Ex2'">if_이프</button>
  <button @click="activeComp = 'Ex3'">show_쇼우</button>
  <button @click="activeComp = 'Ex4'">for_포</button>
  <button @click="activeComp = 'Ex5'">event_이벤트</button>
  <button @click="activeComp = 'Ex6'">V - ON</button>

  <div id="comp_view">

    <keep-alive>
      <component :is="pages[activeComp]"></component>
    </keep-alive>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

#comp_view {
  margin-top: 100px;
  border: 2px solid green;
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0px 0px 50px;
}

button {
  border: 3px solid green;
  margin-left: 15px;

}

button:hover {
  transform: translateY(-3px);
  border-color: blue;
  background-color: rgb(133, 248, 185);
}
</style>
