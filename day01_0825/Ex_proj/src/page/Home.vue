<script setup>
// 홈(메인) 페이지: 슬라이드, 배너, 공지(모달), 갤러리 구현
import { onMounted, onBeforeUnmount } from 'vue'
import { useSlider } from '../utill/slider.js'   // (개발자 정의) 슬라이드 로직
import { useModal } from '../utill/modal.js'     // (개발자 정의) 모달 로직
import activity from '../assets/activity.jpg'
 import healing from '../assets/healing.jpg'
import sun from '../assets/sun.png'


// 슬라이드 3장, 3초 간격
const { index, translateX, start, stop } = useSlider({ length: 3, interval: 3000 })
onMounted(start)
onBeforeUnmount(stop)

const { isOpen, open, close } = useModal()
</script>

<template>
  <section class="hero" aria-label="메인 슬라이드">
    <div class="slider" :style="{ transform: `translateX(${translateX}%)` }" role="list">
      <figure class="slide" role="listitem" aria-roledescription="slide">
        <img :src="activity" alt="서울의 야경" />
        <figcaption class="slide-caption">
          지금의 서울 — 반짝이는 야경 속으로
        </figcaption>
      </figure>
      <figure class="slide" role="listitem" aria-roledescription="slide">
        <img :src="healing" alt="서울 전통시장" />
        <figcaption class="slide-caption">
          시장 골목에서 만나는 따뜻함
        </figcaption>
      </figure>
      <figure class="slide" role="listitem" aria-roledescription="slide">
        <img :src="sun" alt="한강에서의 여유" />
        <figcaption class="slide-caption">
          한강 바람, 오후의 산책
        </figcaption>
      </figure>
    </div>
    <div class="dots" aria-label="슬라이드 이동">
      <button :class="{ on: index === 0 }" aria-label="1번 슬라이드"></button>
      <button :class="{ on: index === 1 }" aria-label="2번 슬라이드"></button>
      <button :class="{ on: index === 2 }" aria-label="3번 슬라이드"></button>
    </div>
  </section>

  <section class="banners" aria-label="추천 배너">
    <a href="#" class="banner-card">
      <h3>테마코스</h3>
      <p>도보해설로 만나는 서울의 골목</p>
    </a>
    <a href="#" class="banner-card">
      <h3>명소</h3>
      <p>에디터 추천 포토 스팟</p>
    </a>
    <a href="#" class="banner-card">
      <h3>엔터테인먼트</h3>
      <p>밤에도 즐거운 서울</p>
    </a>
  </section>

  <section class="notice-gallery">
    <div class="notice" aria-labelledby="notice-title">
      <h2 id="notice-title">공지사항</h2>
      <ul class="notice-list">
        <!-- 첫 번째 항목 클릭 시 모달 -->
        <li>
          <button class="notice-link" @click="open">
            [공지] ‘서울구석구석’ 이용 안내 (모달 팝업)
          </button>
        </li>
        <li><a href="#" class="notice-link">테마코스 봄 시즌 업데이트</a></li>
        <li><a href="#" class="notice-link">가이드북 & 지도 최신판 배포</a></li>
        <li><a href="#" class="notice-link">시티투어버스 운행 안내</a></li>
      </ul>
    </div>

    <div class="gallery" aria-labelledby="gallery-title">
      <h2 id="gallery-title">갤러리</h2>
      <ul class="gallery-list">
        <li class="gallery-item">
          <a href="#" class="gallery-card">
            <img :src="activity" alt="서울의 야경 사진" />
            <span class="caption">도심 야경</span>
          </a>
        </li>
        <li class="gallery-item">
          <a href="#" class="gallery-card">
            <img :src="healing" alt="전통시장 풍경" />
            <span class="caption">전통시장</span>
          </a>
        </li>
        <li class="gallery-item">
          <a href="#" class="gallery-card">
            <img :src="sun" alt="한강 산책 장면" />
            <span class="caption">한강 산책</span>
          </a>
        </li>
      </ul>
    </div>
  </section>

  <!-- 모달: 첫 공지 클릭 시 표시 -->
  <div
    v-if="isOpen"
    class="modal-backdrop"
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div class="modal">
      <h3 id="modal-title">‘서울구석구석’ 이용 안내</h3>
      <div class="modal-body">
        <p>사이트 이용에 관한 필수 안내를 확인해 주세요.</p>
        <ul>
          <li>모든 이미지에는 alt를 포함합니다.</li>
          <li>탭키로 메뉴/버튼 이동이 가능합니다.</li>
          <li>CSS 비활성화 시 콘텐츠는 세로로 나열됩니다.</li>
        </ul>
      </div>
      <button class="modal-close" @click="close" aria-label="닫기">닫기</button>
    </div>
  </div>
</template>
