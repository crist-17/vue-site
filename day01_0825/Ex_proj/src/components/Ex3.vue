<template>
  <!-- 요소는 존재, 보이고/감추고 -->
  <div v-show="showDiv">
    이 요소는 <strong>v-show</strong>로 감춰집니다.
  </div>

  <!-- v-show vs v-if 비교 설명 -->
  <p>
    <strong>v-show</strong>는 요소를 DOM에 그대로 두고  
    CSS 속성 <code>display: none</code>으로만 숨깁니다.<br/>
    <strong>v-if</strong>는 조건에 따라 요소를 DOM에서  
    아예 생성하거나 제거합니다.
  </p>

  <div v-show="showDiv">이 div는 v-show 사용</div>
  <div v-if="showDiv">이 div는 v-if 사용</div>

  <!-- 토글 버튼 -->
  <button @click="showDiv = !showDiv">
    {{ showDiv ? '숨기기' : '보이기' }}
  </button>
</template>

<script setup>
import { ref } from 'vue'
const showDiv = ref(true)
</script>

<style lang="scss" scoped>
#app {
  border: black dashed 1px;
  width: 80%;
  padding: 0 20px 20px 20px;
}
#app div {
  padding: 20px;
  margin: 10px;
  display: inline-block;
  font-weight: bold;
  border: solid black 1px;
}
#app p {
  padding: 10px;
  background-color: rgb(200, 246, 200);
  font-size: 14px;
}
button {
  padding: 6px 12px;
  margin-top: 10px;
  border: 1px solid #aaa;
  border-radius: 6px;
  background: #f8f8f8;
  cursor: pointer;
}
</style>
