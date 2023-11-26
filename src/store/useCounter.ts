import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const setCount = (countVal?: number) => {
    if (countVal) {
      count.value = countVal
    } else {
      count.value++
    }
  }

  return { count, setCount }
})
