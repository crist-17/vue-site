<script setup>
import { useModal } from '../utill/modal.js'
import activity from '../assets/activity.jpg'
import healing from '../assets/healing.jpg'
import sun from '../assets/sun.png'

const { isOpen, open, close } = useModal()
</script>


<template>
  <section class="hero" aria-label="메인 슬라이드" style="--vw: 650px">
  <div class="slider">
    <div class="slider-track" role="list">
      <figure class="slide" role="listitem" aria-roledescription="slide">
        <img :src="activity" alt="서울의 야경" />
        <figcaption class="slide-caption">지금의 서울 — 반짝이는 야경 속으로</figcaption>
      </figure>
      <figure class="slide" role="listitem" aria-roledescription="slide">
        <img :src="healing" alt="서울 전통시장" />
        <figcaption class="slide-caption">시장 골목에서 만나는 따뜻함</figcaption>
      </figure>
      <figure class="slide" role="listitem" aria-roledescription="slide">
        <img :src="sun" alt="한강에서의 여유" />
        <figcaption class="slide-caption">한강 바람, 오후의 산책</figcaption>
      </figure>
      <!-- 무한루프용 클론(첫 장 복제) -->
      <figure class="slide" aria-hidden="true">
        <img :src="activity" alt="" />
      </figure>
    </div>

    <!-- 도트 (CSS 애니로 색상만 바뀌게) -->
    <div class="dots" aria-label="슬라이드 이동">
      <button class="dot"></button>
      <button class="dot"></button>
      <button class="dot"></button>
    </div>
  </div>
</section>


  <!-- 이하 배너/공지/모달 그대로 -->

   <!-- 배너 -->
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

<!-- 공지 + 갤러리 -->
<section class="notice-gallery">
  <div class="notice" aria-labelledby="notice-title">
    <h2 id="notice-title">공지사항</h2>
    <ul class="notice-list">
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

<!-- 모달 -->
<div v-if="isOpen" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
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

<style scoped>
.hero {
  box-sizing: border-box;
  width: var(--vw);
  height: 360px;
  margin: 0 auto 24px;
  border: 1px solid #ddd;
  overflow: hidden;
}

/* 뷰포트 */
.slider {
  width: var(--vw);
  height: 100%;
  overflow: hidden;
  position: relative;
}

/* 트랙: 가로 나열 + 키프레임 이동 */
.slider-track {
  display: flex;
  height: 100%;
  width: calc(var(--vw) * 4); /* 3장 + 클론 1장 */
  margin: 0; padding: 0;
  animation: horiz 9s infinite;
}

/* 1장 = 정확히 뷰포트 폭 */
.slide {
  flex: 0 0 var(--vw);
  width: var(--vw);
  height: 100%;
  margin: 0; padding: 0;
  position: relative;
}

.slide > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 꽉 채우려면 cover */
  object-position: center;
}

.slide-caption {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  padding: 12px 16px;
  color: #fff;
  font-size: 16px;
  background: linear-gradient(to top, rgba(0,0,0,.45), rgba(0,0,0,0));
}

/* 가로 슬라이드 키프레임 (멈춤 포함) */
@keyframes horiz {
  /* #1 정지 */
  0%, 22%   { transform: translateX(0); }

  /* #1 → #2 이동 */
  33%       { transform: translateX(calc(-1 * var(--vw))); }

  /* #2 정지 */
  55%       { transform: translateX(calc(-1 * var(--vw))); }

  /* #2 → #3 이동 */
  66%       { transform: translateX(calc(-2 * var(--vw))); }

  /* #3 정지 */
  88%       { transform: translateX(calc(-2 * var(--vw))); }

  /* #3 → (클론)#1 이동 */
  100%      { transform: translateX(calc(-3 * var(--vw))); }
}

/* 도트: CSS로 타이밍만 맞춰 색상 변경 */
.dots { display: flex; gap: 8px; justify-content: center; margin-top: 8px; }
.dot  { width: 8px; height: 8px; border-radius: 50%; border: 0; background: #cfd3d8; }

.dot:nth-child(1) { animation: dotOn 9s infinite; }
.dot:nth-child(2) { animation: dotOn 9s infinite; animation-delay: 3s; }
.dot:nth-child(3) { animation: dotOn 9s infinite; animation-delay: 6s; }

@keyframes dotOn {
  0%, 22% { background: #333; }        /* on */
  33%, 100% { background: #cfd3d8; }    /* off */
}

@media (max-width: 768px) {
  .hero { height: 240px; }
}

.slider:hover .slider-track { animation-play-state: paused; }

.slider { --dur: 9s; } /* 한 곳에서만 변경 */
.slider-track { animation: horiz var(--dur) infinite; }
.dot:nth-child(1){ animation: dotOn var(--dur) infinite; }
.dot:nth-child(2){ animation: dotOn var(--dur) infinite; animation-delay: calc(var(--dur) / 3); }
.dot:nth-child(3){ animation: dotOn var(--dur) infinite; animation-delay: calc(2 * var(--dur) / 3); }

.dots{
  position: absolute;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 2;                 /* 슬라이드 위로 */
}

.dot{
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid rgba(0,0,0,.2);
  background: rgba(255,255,255,.55);  /* 기본 색 */
  box-shadow: 0 1px 3px rgba(0,0,0,.25);
}
</style>
