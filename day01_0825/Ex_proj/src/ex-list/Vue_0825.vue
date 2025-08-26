<script setup>
import { ref } from 'vue'
import Ex1 from '../components/Ex1.vue'
import Ex2 from '../components/Ex2.vue'
import Ex3 from '../components/Ex3.vue'
import Ex4 from '../components/Ex4.vue'
import Ex5 from '../components/Ex5.vue'
import Ex6 from '../components/Ex6.vue'

const pages = { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6 }
const activeComp = ref("Ex4")
</script>

<template>
  <!-- 헤더 추가 -->
  <header class="header">
    <h1>뷰 예제 만들기</h1>
    <p class="sub">아래의 버튼을 눌러보세영</p>
  </header>

  <!-- 버튼 메뉴 -->
  <nav class="menu">
    <button @click="activeComp = 'Ex1'">bind_바인드</button>
    <button @click="activeComp = 'Ex2'">if_이프</button>
    <button @click="activeComp = 'Ex3'">show_쇼우</button>
    <button @click="activeComp = 'Ex4'">for_포</button>
    <button @click="activeComp = 'Ex5'">event_이벤트</button>
    <button @click="activeComp = 'Ex6'">V - ON</button>
  </nav>

  <!-- 선택된 컴포넌트 출력 -->
  <div id="comp_view">
    <keep-alive>
      <component :is="pages[activeComp]" />
    </keep-alive>
  </div>
</template>

<style scoped>
/* 헤더 스타일 */
.header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(to right, #0c4b04, #0c4b04);
  color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, .1);
}
.header h1 {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
}
.header .sub {
  
  margin: 30px 0 0;
  font-size: 14px;
  opacity: 0.9;
}

/* 버튼 메뉴 */
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
}

button {
  border: 2px solid #42b883;
  padding: 8px 16px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  transition: 0.2s;
}
button:hover {
  transform: translateY(-3px);
  border-color: blue;
  background-color: rgb(133, 248, 185);
}

/* 출력 박스 */
#comp_view {
  margin-top: 20px;
  border: 2px solid green;
  border-radius: 25px;
  padding: 30px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
}
</style>
