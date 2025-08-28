<template>
  <div class="wrap">
    <!-- 상단 이미지 -->
    <header class="hero-box">
      <img class="hero" :src="img_beach3" alt="beach" />
      <p>바닷가 풍경 (import + v-bind 예제)</p>
     
   
    </header>

    <!-- 폰트 크기 -->
    <section class="card">
      <h3 class="title">폰트 크기 (:style)</h3>
      <div class="row">
        <label>크기</label>
        <select v-model.number="fontSize">
          <option :value="14">작게(14px)</option>
          <option :value="18">보통(18px)</option>
          <option :value="24">크게(24px)</option>
          <option :value="32">아주 크게(32px)</option>
        </select>
      </div>
      <div class="demo" :style="{ fontSize: fontSize + 'px' }">
        선택한 크기: {{ fontSize }}px
      </div>
    </section>

    <!-- 배경색 -->
   
    <section class="card">
      <h3 class="title">배경색 (:style)</h3>
      <div class="row">
        <label>색상선택</label>
        <input type="color" v-model="bgColor" />
        <span class="code">{{ bgColor }}</span>
      </div>
      <div class="demo" :style="{ backgroundColor: bgColor }">
        배경 컬러 미리보기
      </div>
    </section>

    <!-- 중요 여부 -->
    <section class="card">
      <h3 class="title">클래스 바인딩 (:class)</h3>
      <button class="btn" @click="isImportant = !isImportant">
        {{ isImportant ? '중요 off' : '중요 on' }}
      </button>

      <div class="demo" :class="{ myClass: isImportant }">
        :class="{ myClass: isImportant }" → {{ isImportant }}
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img_beach3 from '../../assets/img_beach3.jpg'

// 상태값
const fontSize = ref(32)
const bgColor = ref('#f4f6fb')
const isImportant = ref(true)
</script>

<style lang="scss" scoped>
/* 전체 래퍼: 세로 스택 */
.wrap {
  max-width: 800px;   /* 가운데 정렬 + 가로폭 제한 */
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 상단 이미지 */
.hero-box {
  width: 100%;
}
.hero {
  width: 100%;         /* 가로 전체 차지 */
  height: 300px;       /* 고정 높이 */
  object-fit: cover;   /* 꽉 채우면서 비율 유지 */
  border-radius: 12px;
  border: 1px solid #eee;
  display: block;
}

/* 공통 카드 */
.card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 14px;
  padding: 14px;
  box-shadow: 0 2px 10px rgba(0,0,0,.03);
}

.title {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 10px;
}

/* 입력 줄 */
.row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;

  label { font-size: 13px; color: #555; }
  select, input[type="color"] {
    height: 32px;
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 0 8px;
    background: #fff;
  }
  .code { font-size: 12px; color: #666; }
}

/* 데모 박스 */
.demo {
  padding: 10px 12px;
  border: 1px dashed #dcdcdc;
  border-radius: 10px;
  background: #fafafa;
}

/* 버튼 */
.btn {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: #f6f7fb;
  cursor: pointer;
  margin-bottom: 8px;
}

/* 클래스 바인딩용 */
.myClass {
  background-color: #fffbe6;
  border-color: #ffe58f;
  box-shadow: inset 0 0 0 1px #ffe58f;
}
</style>
