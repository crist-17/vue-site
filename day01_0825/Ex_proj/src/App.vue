<script setup>
// App 레이아웃만 담당. 로직 없음.
import img_rice from './assets/img_rice.svg'
</script>

<template>
  <header class="site-header" role="banner">
    <div class="header-inner">
      <RouterLink to="/" class="logo" aria-label="서울구석구석 홈">
        <img :src="img_rice" alt="서울구석구석 로고" />
      </RouterLink>

      <!-- (공식 컴포넌트) RouterLink는 1개만 실제 라우팅 -->
      <nav class="top-nav" role="navigation" aria-label="주요 메뉴">
        <ul class="gnb">
          <!-- 1) HOME: 임시링크 -->
          <li class="gnb-item">
            <a href="#" tabindex="0">HOME</a>
          </li>

          <!-- 2) 지금의 서울: 임시링크 + 서브메뉴 -->
          <li class="gnb-item has-sub">
            <a href="#" tabindex="0" aria-haspopup="true" aria-expanded="false">지금의 서울</a>
            <ul class="submenu" aria-label="지금의 서울 하위 메뉴">
              <li><a href="#" tabindex="0">이벤트</a></li>
              <li><a href="#" tabindex="0">축제 & 행사</a></li>
              <li><a href="#" tabindex="0">전시</a></li>
              <li><a href="#" tabindex="0">에디터 추천</a></li>
            </ul>
          </li>

          <!-- 3) 여행정보: 임시링크 + 서브메뉴 -->
          <li class="gnb-item has-sub">
            <a href="#" tabindex="0" aria-haspopup="true" aria-expanded="false">여행정보</a>
            <ul class="submenu" aria-label="여행정보 하위 메뉴">
              <li><a href="#" tabindex="0">가이드북 & 지도</a></li>
              <li><a href="#" tabindex="0">시티투어버스</a></li>
              <li><a href="#" tabindex="0">날씨</a></li>
              <li><a href="#" tabindex="0">한류관광</a></li>
            </ul>
          </li>

          <!-- 4) 스터디: 유일하게 실제 라우팅 -->
          <li class="gnb-item">
            <RouterLink to="/study">스터디</RouterLink>
          </li>
           <li class="gnb-item">
            <RouterLink to="/ex_web">예제링크</RouterLink>
          </li>

        </ul>
      </nav>
    </div>
  </header>

  <p class="route-indicator"><b>스터디를 클릭하세요</b></p>

  <main id="main" class="site-main" role="main">
    <RouterView />
  </main>

  <footer class="site-footer" role="contentinfo">
    <div class="footer-inner">
      <div class="footer-brand">
        <img :src="img_rice" alt="서울구석구석 흑백 로고" class="logo-gray" />
        <p class="copy">© 2025 GusukGusuk Foundation. All rights reserved.</p>
      </div>
      <div class="family">
        <label for="family-site" class="visually-hidden">패밀리 사이트</label>
        <select id="family-site" name="family-site">
          <option value="">Family Site</option>
          <option value="#">서울관광재단</option>
          <option value="#">VisitKorea</option>
          <option value="#">K-culture</option>
        </select>
        <a href="#" class="go" aria-label="패밀리 사이트 이동">이동</a>
      </div>
    </div>
  </footer>
</template>
