<script setup>
import { ref } from 'vue'
import Vue_0825 from './ex-list/Vue_0825.vue'   
import Apport_0826 from './vue_0826/Apport_0826.vue'

// 페이지 맵 & 현재 활성 페이지
const pages = { Vue_0825, Apport_0826 }
const active = ref('Vue_0825')


// 클릭 핸들러
const go = (key) => { active.value = key }
</script>

<template>
  <!-- 헤더: 기존 CSS 유지 -->
  <header class="app-header">
    <h1 class="logo">뷰 예습해보자</h1>
  </header>

  <!-- 좌측 메뉴 + 우측 콘텐츠 -->
  <div class="layout">
    <aside class="sidebar">
      <nav>
        <button
          class="nav-btn"
          :class="{ active: active === 'Vue_0825' }"
          @click="go('Vue_0825')">
          Vue_0825
        </button>
         <button
          class="nav-btn"
          :class="{ active: active === 'Apport_0826' }"
          @click="go('Apport_0826')">
          Vue_0826
        </button>
      </nav>
    </aside>

    <main class="content">
      <!-- 히어로 섹션: 배경 + 큰 버튼 -->
      <section class="hero">
        <div class="hero-inner">
          <h2>Vue-Site 만들기</h2>
          <button class="hero-cta" @click="go('Vue_0825')">Vue_0825</button>
         <button class="hero-cta" @click="go('Apport_0826')">Vue_0826</button>
        </div>
      </section>

      <!-- 실제 페이지 출력 -->
      <div class="page-view">
        <keep-alive>
          <component :is="pages[active]" />
        </keep-alive>
      </div>
    </main>
  </div>
</template>


<style scoped>


/* ===== 공통 ===== */
*{ box-sizing: border-box; }

/* ===== 헤더(상단 고정) ===== */
.app-header{
  position: fixed; top:0; left:0; right:0;
  height: 64px;
  background: #040a04;
  border-bottom: 1px solid #e5e5e5;
  display:flex; align-items:center; justify-content: space-between;
  padding: 0 16px;
  z-index: 1000;
}
.logo{
 font-size:20px; font-weight:700; 
 color: #fff;
 }

/* ===== 레이아웃 컨테이너 (헤더 높이만큼 아래로) ===== */
.layout{
  padding-top: 64px;            /* 헤더 공간 확보 */
  min-height: 100vh;            /* 화면 높이 채우기 */
}

/* ===== 사이드바(좌측 고정) ===== */
.sidebar{
  position: fixed; top: 64px; left: 0;
  width: 220px;
  height: calc(100vh - 64px);   /* 헤더 제외 높이 */
  background: #e7fcf7;
  border-right: 3px solid #08a02e;
  padding: 16px;
  overflow: auto;               /* 메뉴 길면 내부 스크롤 */
}

/* 사이드 메뉴 버튼 */
.nav-btn{
  width: 100%;
  display: block;
  padding: 10px 12px;
  margin-bottom: 8px;
  border: 1px solid #08e476;
  border-radius: 10px;
  background: #fff;
  cursor: pointer;
  font-weight: 600;
  transition: border-color .2s, box-shadow .2s, transform .2s;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.nav-btn:hover{ transform: translateY(-2px); border-color:#7b5cff; box-shadow:0 0 0 2px rgba(123,92,255,.1); }
.nav-btn.active{ border-color:#0c4b04; box-shadow:0 0 0 2px rgba(12,75,4,.15); }

/* ===== 콘텐츠(오른쪽 영역) ===== */
.content{
  margin-left: 220px;                 /* 사이드 폭만큼 밀기 */
  padding: 16px;
  min-height: calc(100vh - 64px);     /* 헤더 제외 높이 */
  overflow: auto;                      /* 이 영역만 스크롤 */
}

/* 히어로 섹션(배경+큰 버튼) */
.hero{
  border-radius: 14px;
  padding: 40px 24px;
  margin-bottom: 16px;
  width: 1000px;
  background: linear-gradient(135deg, #f1e9ff 0%, #e8f6ff 100%);
  /* 배경 이미지 쓰려면:
     background: url('/images/hero-bg.jpg') center/cover no-repeat; */
}
.hero-inner{ max-width: 960px; margin: 0 auto; text-align: center; }
.hero-cta{
  font-size: 20px; padding: 14px 22px;
  border: none; border-radius: 12px;
  background: #2a0bb8; color:#fff; cursor: pointer;
  margin: 5px;
}

/* 페이지 표시 박스(기존 점선 보더 유지) */
.page-view{
  border: 3px dashed rgb(1,255,1);
  margin: 16px 0;
  padding: 16px;
  background: rgb(255, 255, 254);
  border-radius: 12px;
}

/* 콘텐츠 내부 이미지가 영역 넘치지 않게 */
.content img{ max-width: 100%; height: auto; display: block; }
</style>