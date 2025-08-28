<script setup>
import { ref } from 'vue';
import D1_bind from './D1_bind.vue';
import D2_if from './D2_if.vue';
import D3_show from './D3_show.vue';
import D4_for from './D4_for.vue';
import D5_event from './D5_event.vue';


//컨포넌트 맵
const pages = { D1_bind, D2_if, D3_show, D4_for, D5_event }
const activeComp = ref('D4_for')
</script>

<template>
  <!-- <D1_bind/>
 <D2_if/>
 <D3_show/>
 <D4_for/> -->
  <!-- 버튼클릭시 보여줄 컴포넌트 -->
  <button @click="activeComp = 'D1_bind'">v-bind 변수사용</button>
  <button @click="activeComp = 'D2_if'">v-if 조건분기</button>
  <button @click="activeComp = 'D3_show'">v-show 보이다/감추가</button>
  <button @click="activeComp = 'D4_for'">v-for 반복문</button>
  <button @click="activeComp = 'D5_event'">v-event 이벤트발생</button>

  <div class="page-view">
    <keep-alive>
      <component :is="pages[activeComp]"></component>
    </keep-alive>

  </div>

</template>

<style scoped>
.page-view {
  border: 3px dashed rgb(1, 255, 1);
  margin: 50px;
  background-color: rgb(224, 198, 248);
  box-sizing: border-box;
  max-width: 100%;
  max-height: 100%;
}
button {
    border: 1px solid green;
    margin: 2px;
}
</style>
