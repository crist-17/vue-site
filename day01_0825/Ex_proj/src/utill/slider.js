// src/utils/slider.js
import { ref, computed } from 'vue'

/**
 * 무한 루프 캐러셀
 * length: 실제 슬라이드 개수(클론 제외)
 * interval: 다음 슬라이드로 넘어가는 간격(ms)
 * duration: 이동 애니메이션 시간(ms)
 */
export function useSlider({ length = 3, interval = 8500, duration = 3800 } = {}) {
  const index = ref(0)            // 0..length (length는 "첫 슬라이드 클론")
  let timer = null
  const transitioning = ref(true) // 점프 순간엔 transition 꺼두기

  const translateX = computed(() => -100 * index.value)
  const transitionCss = computed(() =>
    transitioning.value ? `transform ${duration}ms ease` : 'none'
  )

  const next = () => {
    transitioning.value = true
    index.value += 1
  }

  const start = () => {
    stop()
    timer = setInterval(next, interval)
  }
  const stop = () => {
    if (timer) clearInterval(timer)
    timer = null
  }

  // 마지막(=첫 슬라이드 클론) 프레임에서 애니 없이 0으로 점프
  const onAfterTransition = () => {
    if (index.value === length) {
      transitioning.value = false
      index.value = 0
      requestAnimationFrame(() => { transitioning.value = true })
    }
  }

  return { index, translateX, transitionCss, start, stop, onAfterTransition }
}
