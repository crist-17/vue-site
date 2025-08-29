// src/utill/slider.js
import { ref, computed } from 'vue'

/**
 * length: 실제 슬라이드 개수(클론 제외)
 * interval: 멈춤 시간(ms)
 * duration: 이동 애니메이션 시간(ms)
 */
export function useSlider({ length = 3, interval = 3000, duration = 600 } = {}) {
  const index = ref(0)            // 0..length (length는 "첫 슬라이드 클론")
  let timer = null
  const transitioning = ref(true) // 점프 순간엔 transition 꺼두기

  // (퍼센트 이동은 사용 안 해도 무방. 호환용으로 남김)
  const translateX = computed(() => -100 * index.value)
  const transitionCss = computed(() =>
    transitioning.value ? `transform ${duration}ms ease` : 'none'
  )

  // ★ 가드 1: 클론(length)에 도달했으면 추가 next() 금지 (빈 영역/되감기 방지)
  const next = () => {
    if (index.value >= length) return
    transitioning.value = true
    index.value += 1
  }

  const start = () => { stop(); timer = setInterval(next, interval) }
  const stop = () => { if (timer) clearInterval(timer); timer = null }

  // ★ 클론 프레임에서만 즉시 0으로 스냅 (되감기 애니 제거)
  const onAfterTransition = (e) => {
    // 다른 요소의 transitionend 버블링 무시
    if (e && (e.target !== e.currentTarget || e.propertyName !== 'transform')) return

    if (index.value >= length) {
      // 순간 점프: transition 끄고 0으로, 다음 프레임에 다시 켜기
      transitioning.value = false
      index.value = 0
      requestAnimationFrame(() => { transitioning.value = true })
    }
  }

  return { index, translateX, transitionCss, start, stop, onAfterTransition }
}
