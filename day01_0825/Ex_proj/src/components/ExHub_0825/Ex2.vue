<template>
  <div class="wrap">
    <!-- 1) 불리언 재고 (토글) -->
    <section class="card">
      <h3 class="title">재고 유무</h3>
      <button class="btn" @click="typewritersInStock = !typewritersInStock">
        {{ typewritersInStock ? '재고: 있음(ON)' : '재고: 없음(OFF)' }}
      </button>
      <p class="out">{{ typewritersInStock ? '재고있음' : '재고없음' }}</p>
    </section>

    <!-- 2) 수량 재고 (숫자 입력 / 버튼) -->
    <section class="card">
      <h3 class="title">수량 재고</h3>
      <div class="row">
        <label>count</label>
        <input type="number" v-model.number="typewriterCount" />
        <button class="btn" @click="typewriterCount--">-1</button>
        <button class="btn" @click="typewriterCount++">+1</button>
      </div>
      <p class="out">{{ typewriterCount > 0 ? '재고있음' : '재고없음' }}</p>
    </section>

    <!-- 3) 다단계 재고 (else-if) -->
    <section class="card">
      <h3 class="title">다단계 재고</h3>
      <div class="row">
        <label>count2</label>
        <input type="number" v-model.number="typewriterCount2" />
        <button class="btn" @click="typewriterCount2 -= 2">-2</button>
        <button class="btn" @click="typewriterCount2 += 2">+2</button>
      </div>
      <p class="out" v-if="typewriterCount2 > 10">재고있음</p>
      <p class="out" v-else-if="typewriterCount2 > 0">재고조금있음</p>
      <p class="out" v-else-if="typewriterCount2 === 0">재고 없음</p>
      <p class="out" v-else>선불예약있음 {{ typewriterCount2 }}</p>
    </section>

    <!-- 4) 문자열 포함 여부 (pizza) -->
    <section class="card">
      <h3 class="title">문자열 포함 (pizza)</h3>
      <div class="row">
        <label>text</label>
        <input class="text" v-model="text" placeholder="문장을 입력하세요" />
      </div>
      <p class="out" v-if="text.includes('pizza')">‘pizza’가 포함되어 있음</p>
      <p class="out" v-else>글자 포함 안 되어 있음</p>
    </section>

    <!-- 5) 한글 포함 체크(‘피자’) + 이미지 표시 -->
    <section class="card">
      <h3 class="title">문자열 포함 (피자) + 이미지</h3>
      <div class="row">
        <label>text2</label>
        <input class="text" v-model="text2" placeholder="문장을 입력하세요" />
      </div>

      <div v-if="text2.includes('피자')" class="pizza">
        <p>피자</p>
        <img src="../assets/img_pizza.svg" alt="pizza" />
      </div>
      <p class="out" v-else>피자없음</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const typewritersInStock = ref(false)
const typewriterCount = ref(0)
const typewriterCount2 = ref(-5)
const text = ref("I like taco, pizza, Thai beef salad, pho soup and tagine.")
const text2 = ref("I like taco, 피자, Thai beef salad, pho soup and tagine.")
</script>

<style scoped>
.wrap {
  max-width: 760px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.card {
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 14px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,.03);
}
.title { margin: 0 0 10px; font-size: 16px; font-weight: 700; }
.row {
  display: flex; align-items: center; gap: 8px; margin-bottom: 8px;
}
.text, input[type="number"] {
  height: 34px; padding: 0 10px; border: 1px solid #ddd; border-radius: 8px; flex: 1;
}
.btn {
  padding: 6px 10px; border: 1px solid #ddd; border-radius: 8px; background: #f6f7fb; cursor: pointer;
}
.out { margin: 6px 0 0; padding: 8px 10px; background: #fafafa; border: 1px dashed #ddd; border-radius: 8px; }
.pizza img { width: 200px; height: 200px; border: 2px solid red; border-radius: 8px; object-fit: contain; }
</style>
