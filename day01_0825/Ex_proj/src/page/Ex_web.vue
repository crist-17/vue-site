<!-- src/page/Ex_web.vue -->
<template>
  <!-- 루트: 키보드 접근/스코프 제어 위해 id와 ref 부여 -->
  <div id="exweb-root" ref="root" class="exweb">

    <!-- Ⓐ Header -->
    <header class="hdr" role="banner" aria-label="사이트 헤더">
      <h1 class="logo-wrap">
        <a href="#" class="logo" aria-label="해운대 빛축제 메인으로">
          <img src="../assets/img_soup.svg" alt="Haeundae Light Festival" />
        </a>
      </h1>
      <!-- (상단 바로가기 등 필요시 우측에 배치 가능) -->
    </header>

    <!-- 본문 그리드: 좌측 사이드바 + 메인 -->
    <div class="grid">

      <!-- Ⓐ 사이드바 메뉴: 메인 클릭 시 드롭다운 -->
      <aside class="side" aria-label="주 메뉴">
        <nav>
          <ul class="mainmenu" role="menubar">
            <!-- 이용안내 -->
            <li class="main-li" >
              <button class="main-btn" type="button" aria-expanded="false" aria-controls="sub-use">
                이용안내
              </button>
              <ul id="sub-use" class="submenu" role="menu">
                <li><a href="#" tabindex="0">이용방법</a></li>
                <li><a href="#" tabindex="0">이용시간</a></li>
                <li><a href="#" tabindex="0">이용요금</a></li>
              </ul>
            </li>

            <!-- 이벤트정보 -->
            <li class="main-li">
              <button class="main-btn" type="button" aria-expanded="false" aria-controls="sub-event">
                이벤트정보
              </button>
              <ul id="sub-event" class="submenu" role="menu">
                <li><a href="#" tabindex="0">현장이벤트</a></li>
                <li><a href="#" tabindex="0">온라인이벤트</a></li>
                <li><a href="#" tabindex="0">이벤트예약</a></li>
              </ul>
            </li>

            <!-- 프로그램 -->
            <li class="main-li">
              <button class="main-btn" type="button" aria-expanded="false" aria-controls="sub-program">
                프로그램
              </button>
              <ul id="sub-program" class="submenu" role="menu">
                <li><a href="#" tabindex="0">프로그램안내</a></li>
                <li><a href="#" tabindex="0">온라인예약</a></li>
                <li><a href="#" tabindex="0">단체예약상담</a></li>
              </ul>
            </li>

            <!-- 고객센터 -->
            <li class="main-li">
              <button class="main-btn" type="button" aria-expanded="false" aria-controls="sub-cs">
                고객센터
              </button>
              <ul id="sub-cs" class="submenu" role="menu">
                <li><a href="#" tabindex="0">공지사항</a></li>
                <li><a href="#" tabindex="0">자주묻는질문</a></li>
                <li><a href="#" tabindex="0">자료실</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      <!-- 메인 영역 -->
      <div class="main">

        <!-- Ⓑ 슬라이드 (페이드) -->
        <section class="slide" aria-label="메인 슬라이드">
          <div class="slides">
            <figure class="slide-item is-active">
              <img src="../assets/healing.jpg" alt="빛축제 메인 경관 1" />
              <figcaption class="caption">
                <strong>해운대 빛축제</strong>
                <span>바다 위를 수놓는 빛의 파도</span>
              </figcaption>
            </figure>

            <figure class="slide-item">
              <img src="../assets/activity.jpg" alt="빛축제 메인 경관 2" />
              <figcaption class="caption">
                <strong>겨울 밤의 설렘</strong>
                <span>빛으로 연결되는 도심 산책</span>
              </figcaption>
            </figure>

            <figure class="slide-item">
              <img src="../assets/sun.png" alt="빛축제 메인 경관 3" />
              <figcaption class="caption">
                <strong>추억을 담다</strong>
                <span>가족과 함께하는 포토 스팟</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <!-- Ⓒ 콘텐츠 3분할 -->
        <section class="cards" aria-label="콘텐츠">
          <!-- C.1/C.2 탭: 공지 & 갤러리 -->
          <article class="card tabs" aria-label="공지/갤러리">
            <div class="tab-head" role="tablist">
              <button class="tab-btn is-active" data-tab="notice" role="tab" aria-selected="true">공지사항</button>
              <button class="tab-btn" data-tab="gallery" role="tab" aria-selected="false">갤러리</button>
            </div>

            <!-- 공지사항 -->
            <div id="panel-notice" class="tab-panel is-active" role="tabpanel" aria-labelledby="notice">
              <ol class="notice-list">
                <li class="notice-item">
                  <a href="#" data-open="notice-modal">
                    [공지] 개막식 안내 및 교통 통제 공지
                  </a>
                </li>
                <li class="notice-item"><a href="#">자원봉사자 모집 안내</a></li>
                <li class="notice-item"><a href="#">분실물 접수처 변경 안내</a></li>
              </ol>
            </div>

            <!-- 갤러리 -->
            <div id="panel-gallery" class="tab-panel" role="tabpanel" aria-labelledby="gallery">
              <ul class="gallery">
                <li><a href="#"><img src="../assets/img_moose.jpg" alt="갤러리 이미지 1" /></a></li>
                <li><a href="#"><img src="../assets/img_pizza.svg" alt="갤러리 이미지 2" /></a></li>
                <li><a href="#"><img src="../assets/pic_bulbon.gif" alt="갤러리 이미지 3" /></a></li>
              </ul>
            </div>
          </article>

          <!-- C.3 배너 -->
          <article class="card banner">
            <a href="#" class="banner-link">
              <h3>이벤트 참여 배너</h3>
              <p>온라인 이벤트에 참여하고 기념품 받기</p>
            </a>
          </article>

          <!-- C.4 바로가기 -->
          <article class="card quick">
            <ul class="quick-list">
              <li><a href="#" class="qk">오시는 길</a></li>
              <li><a href="#" class="qk">운영시간</a></li>
              <li><a href="#" class="qk">예약하기</a></li>
            </ul>
          </article>
        </section>

      </div>
    </div>

    <!-- Ⓒ 레이어 팝업 (공지 1번 클릭 시) -->
    <div class="modal" id="notice-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
      <div class="modal-dim" data-close="notice-modal"></div>
      <div class="modal-box" role="document">
        <header class="modal-hd">
          <h4 id="modal-title">개막식 안내</h4>
          <button class="modal-close" type="button" aria-label="닫기" data-close="notice-modal">×</button>
        </header>
        <div class="modal-bd">
          <p>해운대 빛축제 개막식이 진행됩니다. 안전을 위해 행사장 주변 교통이 일시 통제됩니다.</p>
          <p>자세한 내용은 공지사항에서 확인하세요.</p>
        </div>
      </div>
    </div>

    <!-- Ⓓ Footer -->
    <footer class="ftr" role="contentinfo" aria-label="푸터">
      <div class="ftr-wrap">
        <div class="ftr-logo">
          <img src="../assets/img_soup.svg" alt="Haeundae Light Festival (그레이스케일)" />
        </div>
        <nav class="ftr-menu" aria-label="하단 메뉴">
          <a href="#">이용약관</a>
          <a href="#">개인정보처리방침</a>
          <a href="#">고객센터</a>
        </nav>
        <small class="copy">© Haeundae Light Festival. All rights reserved.</small>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import '../assets/exweb.css'           // ⬅️ CSS 외부 분리
import initExWeb from '../utill/ex_web_con' // ⬅️ JS 외부 분리

const root = ref(null)
let cleanup = null

onMounted(() => {
 cleanupA = initExWeb(root.value)  // DOM 바인딩 시작
cleanupB = initSidebar(root.value)
})
onBeforeUnmount(() => {
  if (cleanup) cleanup()          // 타이머/이벤트 해제
})
</script>
