// (개발자 정의) 모달 오픈/닫기 로직
import { ref } from 'vue'

export function useModal() {
  const isOpen = ref(false)
  const open = () => (isOpen.value = true)
  const close = () => (isOpen.value = false)
  return { isOpen, open, close }
}
